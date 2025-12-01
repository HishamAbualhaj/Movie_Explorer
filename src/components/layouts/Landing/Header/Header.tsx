import Logo from "@/components/ui/Logo";

import Link from "next/link";
import HeaderBar from "./HeaderBar";
import HeaderIcons from "./HeaderIcons";
export const navs = [
  {
    title: "Home",
    link: "/",
    active: false,
  },
  {
    title: "Movies & Shows",
    link: "/",
    active: true,
  },
  {
    title: "Support",
    link: "/",
    active: false,
  },
  {
    title: "Subscription",
    link: "/",
    active: false,
  },
];
const Header = () => {
  return (
    <header className="relative max-w-[1600px] mx-auto px-5 flex items-center py-5 bg-transparent justify-between">
      <Logo />
      <div className="flex gap-5 bg-black/60 border-3 border-border rounded-lg p-2 lg:px-7 px-5 max-md:hidden">
        {navs.map((nav, i) => (
          <Link
            className={`text-text-secondary rounded-md lg:py-3 py-2 lg:px-4 px-2 hover:bg-bg-light  hover:text-white transition ${
              nav.active ? "bg-bg-light  text-white" : ""
            }`}
            key={i}
            href={nav.link}
          >
            {nav.title}
          </Link>
        ))}
      </div>
      <HeaderBar />
      <HeaderIcons isMobile={false}/>
    </header>
  );
};

export default Header;
