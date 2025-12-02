import Image from 'next/image';
import heroImg from './support-cta-image.png';

export function SupportHero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <p className="uppercase text-xs md:text-sm tracking-[0.2em] text-text-muted">
            Start your free trial today!
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Welcome to our support page!
          </h1>

          <p className="text-text-secondary max-w-md md:max-w-lg mx-auto md:mx-0">
            We&apos;re here to help you with any problems you may be having with our product.
          </p>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl overflow-hidden shadow-lg">
            <Image
              src={heroImg}
              alt="Support hero image"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
