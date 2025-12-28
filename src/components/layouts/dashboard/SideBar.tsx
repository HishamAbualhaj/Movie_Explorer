"use client";
import Logo from "../../ui/Logo";
import { BarChart2Icon, ChartBarBig, MicrowaveIcon, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SideBar = () => {
  const sideItems = [
    {
      title: "Analytics",
      link: "/dashboard/analytics",
      icon: <ChartBarBig size={19} />,
    },
    {
      title: "Users",
      link: "/dashboard/users",
      icon: <User2 size={19} />,
    },
    {
      title: "Movies",
      link: "/dashboard/movies",
      icon: <MicrowaveIcon size={19} />,
    },
  ];
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <div className="px-5 lg:hidden">
        <div
          onClick={() => {
            setSideBar(!sideBar);
          }}
          className=" text-white mt-5  bg-bg-light p-2 h-fit w-fit rounded-md hover:bg-bg-light/50 cursor-pointer"
        >
          <BarChart2Icon className="rotate-90" />
        </div>
      </div>
      <div
        className={`max-lg:-translate-x-full transition max-lg:absolute max-lg:mt-18 max-lg:rounded-md z-10 flex flex-col bg-bg-dark lg:h-screen h-96 shadow-2xl ${
          sideBar ? "translate-x-[calc(0%+20px)]!" : ""
        } `}
      >
        <div className="flex-1">
          <div className="py-4 px-8">
            <Logo />
          </div>
          <div className="">
            <div className="flex flex-col">
              {sideItems.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className="flex items-center gap-2 text-text-secondary border-b py-5 border-border px-5 hover:bg-bg-light transition"
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link
          href="/logout"
          className="text-white px-5 bg-primary/80 py-3 font-medium"
        >
          Logout
        </Link>
      </div>
    </>
  );
};

export default SideBar;
