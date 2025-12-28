"use client";
import WatchedButton from "@/components/ui/WatchedButton";
import WatchLaterButton from "@/components/ui/WatchLatterButton";
import { HeartIcon, Search } from "lucide-react";
import Link from "next/link";
import { useUserStore } from "@/stores/userStore";
import Button from "@/components/ui/Button";

const HeaderIcons = ({ isMobile }: { isMobile: boolean }) => {
  const { user } = useUserStore();
  return (
    <div
      className={`flex items-center gap-6 text-white lg:py-3 py-2 px-4 ${
        isMobile ? "" : "max-md:hidden"
      }`}
    >
      {user ? (
        <>
          <Link href="/watchLater" className="inline-block">
            <WatchLaterButton />
          </Link>
          <Link href="/watched" className="inline-block">
            <WatchedButton />
          </Link>
          <Link href="/favourites" className="inline-block">
            <HeartIcon />
          </Link>
        </>
      ) : (
        <div className="flex gap-3">
          <Link href="/login">
            <Button className="py-1.5! cursor-pointer">Login</Button>
          </Link>
          <Link href="/signup">
            <Button className="py-1.5! cursor-pointer">Signup</Button>
          </Link>
        </div>
      )}
      <Link href="/search" className="inline-block">
        <Search />
      </Link>
    </div>
  );
};

export default HeaderIcons;
