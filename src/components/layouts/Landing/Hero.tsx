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
            The Best Streaming Experience
          </div>
          <div className="mt-8 max-lg:hidden text-text-muted  text-lg">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With <br />{" "}
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more.
            <br /> You can also create your own watchlists, so you can easily
            find the content you want to watch.
          </div>
          <div className="lg:mt-8 mt-5 lg:hidden lg:text-text-muted text-text-secondary lg:text-lg font-medium">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </div>
        </div>
        <div className="flex mt-10 justify-center">
          <Button iconLeft={<PlayIcon fill="white" />}>
            Start Watching Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
