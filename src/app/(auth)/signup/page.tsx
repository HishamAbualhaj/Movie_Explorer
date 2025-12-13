import MovieBackground from "@/components/ui/MovieBackground";
import { Check, Film } from "lucide-react";


const page = () => {
  return (
    <div className="h-full">
      <div className="h-full hidden lg:flex lg:w-1/2 relative">
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
    </div>
  );
};

export default page;
