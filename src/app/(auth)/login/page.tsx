import LoginForm from "@/components/layouts/Login/LoginForm";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import MovieBackground from "@/components/ui/MovieBackground";
import { cn } from "@/lib/utils";
import { Film } from "lucide-react";
import Link from "next/link";
export const socials = [
  {
    label: "Continue with Google",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
  },
  {
    label: "Continue with Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path
          fill="#1877F2"
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </svg>
    ),
  },
];
const page = () => {
  return (
    <div className="h-screen lg:flex gap-10">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <MovieBackground />
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12">
          <div className="max-w-md text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 border border-primary/30 mb-8">
              <Film className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl text-white font-bold mb-4">
              Weclome Back to <span className="text-primary">StreamVibe</span>{" "}
            </h1>
            <p className="text-lg text-text-secondary font-medium">
              Discover millions of movies, track your favorites, and join a
              community of film enthusiasts.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex justify-center py-8 px-5">
        <Logo />
      </div>
      <div className="text-white  flex flex-1 justify-center lg:py-32 px-5">
        <div className="max-w-[500px] rounded-xl  flex-1 bg-bg-light px-10 py-8">
          <div className="text-white font-bold text-center text-3xl">
            Sign In
          </div>
          <div className="text-text-secondary mt-2 text-center">
            Enter your credentials to access your account
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
                or continue with email
              </span>
            </div>
            <div className="h-px w-full bg-border"></div>
          </div>

          <LoginForm />
          <div className="flex justify-center mt-3">
            <Button className="py-2!">Login</Button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            Don't have an account{" "}
            <Link className="text-primary underline" href="/signup">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
