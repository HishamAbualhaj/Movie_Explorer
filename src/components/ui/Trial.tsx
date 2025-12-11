import Image from "next/image";
import Button from "./Button";

const Trial = () => {
  return (
    <div className="container-wrapper pb-40">
      <div className="border border-border bg-[url('/trial_image.png')] relative rounded-lg">
        <div className="absolute z-0 left-0 top-0  w-full h-full rounded-lg lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_30%,rgba(224,0,0,0.4)_100%)] bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_5%,rgba(224,0,0,0.4)_100%)]"></div>
        <div className="lg:py-30 py-20 lg:px-16 sm:px-10 px-5 flex max-lg:flex-col max-lg:gap-8 items-center justify-between z-10 relative">
          <div className="max-lg:text-center">
            <div className="text-4xl text-white font-bold">
              Start your free trial today!
            </div>
            <div className="text-text-secondary mt-2">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </div>
          </div>

          <Button>Start a Free Trail</Button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
