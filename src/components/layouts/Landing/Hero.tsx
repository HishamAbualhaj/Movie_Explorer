import Button from "@/components/ui/Button";
import { PlayIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[860px] absolute top-0 -z-10">
        <Image
          src="/hero_image.png"
          alt="photo"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex justify-center lg:mt-26 mt-20">
        <Image
          width={450}
          height={450}
          className="max-lg:h-72 max-lg:w-72  opacity-80 hover:opacity-100 cursor-pointer"
          alt="Player Image"
          src="/player.png"
        />
      </div>
      <div className="px-5">
        <div className="text-center lg:mt-40 mt-20">
          <div className="text-white text-4xl font-bold">
            The Ultimate Movie & Show Discovery Experience
          </div>
          <div className="mt-8 max-lg:hidden text-text-muted  text-lg">
            StreamVibe is your go-to destination for exploring movies and TV
            shows in depth, anytime, anywhere. With StreamVibe, you can discover
            detailed <br /> information about a wide range of titles, including
            the latest releases, classic films, popular series, and more.
            <br /> You can also save titles to your personal library, making it
            easy to revisit and explore the content that interests you most.
          </div>
          <div className="lg:mt-8 mt-5 lg:hidden lg:text-text-muted text-text-secondary lg:text-lg font-medium">
            StreamVibe is your go-to destination for exploring movies and TV
            shows in depth, anytime, anywhere.
          </div>
        </div>
        <div className="flex mt-10 justify-center">
          <Button iconLeft={<PlayIcon fill="white" />}>
            Explore Titles Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
