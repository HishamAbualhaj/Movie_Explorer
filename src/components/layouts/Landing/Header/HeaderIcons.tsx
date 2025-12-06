import { BellRing, HeartIcon, Search } from "lucide-react";
import Link from "next/link";

const HeaderIcons = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className={`flex gap-6 text-white lg:py-3 py-2 px-4 ${
        isMobile ? "" : "max-md:hidden"
      }`}
    >
      <Link href="/favourites" className="inline-block"><HeartIcon /></Link>
      <Search />
      <BellRing />
    </div>
  );
};

export default HeaderIcons;
