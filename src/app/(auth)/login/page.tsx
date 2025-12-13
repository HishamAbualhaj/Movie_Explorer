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
              Weclome Back to <span className="text-primary">StreamVibe</span>{" "}
            </h1>
            <p className="text-lg text-text-secondary font-medium">
              Discover millions of movies, track your favorites, and join a
              community of film enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
