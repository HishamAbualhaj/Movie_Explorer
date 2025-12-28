import Logo from "@/components/ui/Logo";
import MovieBackground from "@/components/ui/MovieBackground";
import { Check, Film } from "lucide-react";
import { socials } from "../login/page";
import SignupForm from "@/components/layouts/Signup/SignupForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
const page = () => {
  return (
    <div className="lg:flex gap-10">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <MovieBackground />
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12">
          <div className="max-w-md text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 border border-primary/30 mb-8">
              <Film className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl text-white font-bold mb-4">
              Join <span className="text-primary">StreamVibe</span> Today
            </h1>
            <p className="text-lg text-text-secondary font-medium">
              Create your free account and start exploring the world of cinema.
            </p>
          </div>
          <div className="space-y-4 text-left mt-5">
            {[
              "Track and rate your favorite movies",
              "Create personalized watchlists",
              "Get recommendations based on your taste",
              "Join discussions with movie lovers",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden flex justify-center py-8 px-5">
        <Logo />
      </div>
      <div className="text-white flex flex-1 justify-center lg:py-32 px-5">
        <div className="max-w-[500px] rounded-xl  flex-1 bg-bg-light px-10 py-8">
          <div className="text-white font-bold text-center text-3xl">
            Create Account
          </div>
          <div className="text-text-secondary mt-2 text-center">
            Start your cinematic journey today
          </div>

          <div className="flex flex-col gap-3 py-8">
            {socials.map((soc, i) => (
              <button
                key={i}
                type="button"
                className={cn(
                  "flex items-center justify-center gap-3 w-full py-3 rounded-lg cursor-pointer",
                  "bg-border/20 border border-border",
                  "text-foreground font-medium",
                  "transition-all duration-200",
                  "hover:bg-secondary hover:bg-bg-light"
                )}
              >
                {soc.icon}
                <span>{soc.label}</span>
              </button>
            ))}
          </div>

          <div className="relative flex justify-between items-center">
            <div className="h-px w-full bg-border"></div>
            <div className="text-[15px] flex-1">
              <span className="px-2 text-text-muted text-nowrap">
                or sign up with email
              </span>
            </div>
            <div className="h-px w-full bg-border"></div>
          </div>

          <SignupForm />
        
          <div className="mt-5 flex justify-center gap-2">
            Already have an account?{" "}
            <Link className="text-primary underline" href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
