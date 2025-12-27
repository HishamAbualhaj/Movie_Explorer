import Logo from "../../ui/Logo";
import { ChartBarBig, MicrowaveIcon, User2 } from "lucide-react";
import Link from "next/link";

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
  return (
    <div className="flex flex-col bg-bg-dark h-screen shadow-2xl">
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
      <Link href="/logout" className="text-white px-5 bg-primary/80 py-3 font-medium">Logout</Link>
    </div>
  );
};

export default SideBar;
