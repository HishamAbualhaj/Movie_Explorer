import Image from "next/image";
import Button from "./Button";

const Trial = () => {
  return (
    <div className="container-wrapper pb-30">
      <div className="border border-border bg-[url('/trial_image.png')] relative rounded-lg">
        <div className="absolute z-0 left-0 top-0  w-full h-full rounded-lg lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_30%,rgba(224,0,0,0.4)_100%)] bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_5%,rgba(224,0,0,0.4)_100%)]"></div>
        <div className="lg:py-30 py-20 lg:px-16 sm:px-10 px-5 flex max-lg:flex-col max-lg:gap-8 items-center justify-between z-10 relative">
          <div className="max-lg:text-center">
            <div className="text-4xl text-white font-bold">
              Get started with StreamVibe today!
            </div>
            <div className="text-text-secondary mt-2">
              Explore movies and TV shows for free, chat with the AI in a limited way,<br />
              or upgrade anytime to unlock full access and advanced features.
            </div>
          </div>

          <Button>Explore for Free</Button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
