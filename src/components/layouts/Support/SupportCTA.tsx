import Link from "next/link";
import bg from "./assets/cta-background-image.png";

export function SupportCTA() {
  return (
    <section className="w-full py-10 flex justify-center">
      <div className="w-full max-w-6xl px-4">
        <div
          className="
            relative w-full rounded-2xl overflow-hidden 
            bg-center bg-cover
            flex items-center justify-between
            px-6 md:px-12 py-10 md:py-16
          "
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-6">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Enjoy Endless Movies & Shows
              </h2>
              <p className="text-gray-300 mt-3 text-sm md:text-base">
                Explore our library of movies and TV shows. If you have any
                issues or need assistance, our support team is here to help.
              </p>
            </div>

            <Link
              href="/"
              className="relative z-10 bg-primary text-white px-8 py-3 rounded-xl font-medium text-sm md:text-base hover:opacity-90 transition inline-block"
            >
              Browse Movies & Shows
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
