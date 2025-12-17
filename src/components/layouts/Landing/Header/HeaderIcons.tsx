import WatchedButton from "@/components/ui/WatchedButton";
import WatchLaterButton from "@/components/ui/WatchLatterButton";
import { BellRing, HeartIcon, Search } from "lucide-react";
import Link from "next/link";

const HeaderIcons = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className={`flex gap-6 text-white lg:py-3 py-2 px-4 ${
        isMobile ? "" : "max-md:hidden"
      }`}
    >
      <Link href="/watchLater" className="inline-block">
        <WatchLaterButton />
      </Link>
      <Link href="/watched" className="inline-block">
        <WatchedButton />
      </Link>
      <Link href="/favourites" className="inline-block">
        <HeartIcon />
      </Link>
      <Link href="/search" className="inline-block">
        <Search />
      </Link>
    </div>
  );
};

export default HeaderIcons;
