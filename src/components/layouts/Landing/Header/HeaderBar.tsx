"use client";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { navs } from "./Header";
import { Activity, useState } from "react";
import Link from "next/link";
import HeaderIcons from "./HeaderIcons";
const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="md:hidden text-white bg-bg-light p-2 border-2 border-border rounded-md cursor-pointer hover:bg-bg"
      >
        <ChartNoAxesColumnIncreasing size={25} className="-rotate-90" />
      </div>

      <Activity mode={`${isOpen ? "visible" : "hidden"}`}>
        <div className="px-5 absolute top-full left-0 z-10 w-full">
          <div className="flex flex-col gap-3 bg-black border-3 border-border rounded-lg p-2 lg:px-7 px-5 ">
            {navs.map((nav, i) => (
              <Link
                className={`text-text-secondary rounded-md lg:py-3 py-2 px-4 hover:bg-bg-light  hover:text-white transition ${
                  nav.active ? "bg-bg-light  text-white" : ""
                }`}
                key={i}
                href={nav.link}
              >
                {nav.title}
              </Link>
            ))}
            <HeaderIcons isMobile={true} />
          </div>
        </div>
      </Activity>
    </>
  );
};

export default HeaderBar;
