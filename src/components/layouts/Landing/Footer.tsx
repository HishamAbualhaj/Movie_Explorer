import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerItems = [
    {
      title: "Home",
      links: [
        { title: "Categories", link: "/" },
        { title: "Devices", link: "/" },
        { title: "Pricing", link: "/" },
        { title: "FAQ", link: "/" },
      ],
    },
    {
      title: "Movies",
      links: [
        { title: "Genres", link: "/" },
        { title: "Trending", link: "/" },
        { title: "New Release", link: "/" },
        { title: "Popular", link: "/" },
      ],
    },
    {
      title: "Shows",
      links: [
        { title: "Genres", link: "/" },
        { title: "Trending", link: "/" },
        { title: "New Release", link: "/" },
        { title: "Popular", link: "/" },
      ],
    },
    {
      title: "Support",
      links: [{ title: "Contact Us", link: "/" }],
    },
    {
      title: "Subscription",
      links: [
        { title: "Plans", link: "/" },
        { title: "Features", link: "/" },
      ],
    },
    {
      title: "Connect With Us",
      links: [
        {
          title: (
            <div className="bg-bg-light p-2 w-fit border-2 border-border rounded-md">
              <Facebook fill="white" stroke="none" />
            </div>
          ),
          link: "/",
        },
        {
          title: (
            <div className="bg-bg-light p-2 w-fit border-2 border-border rounded-md">
              <Twitter fill="white" stroke="none" />
            </div>
          ),
          link: "/",
        },
        {
          title: (
            <div className="bg-bg-light p-2 w-fit border-2 border-border rounded-md">
              <Linkedin fill="white" stroke="none" />
            </div>
          ),
          link: "/",
        },
      ],
    },
  ];

  return (
    <div className="bg-black px-5">
      <div className="max-w-[1600px] mx-auto">
        <footer className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 py-8 max-lg:gap-5">
          {footerItems.map((item, i) => (
            <div key={i} className="flex-1">
              <div className="text-white">{item.title}</div>
              <div
                className={`flex flex-wrap ${
                  i === 5 ? "sm:flex-row" : "flex-col "
                } mt-3 gap-2`}
              >
                {item.links.map((link, indx) => (
                  <Link
                    href={link.link}
                    key={indx}
                    className={`text-text-secondary`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </footer>

        <div className="border-t border-border flex justify-between max-lg:flex-col max-lg:gap-3 py-5">
          <div className="text-text-secondary">
            @2023 streamvib, All Rights Reserved
          </div>
          <div className="flex gap-6 mt-4 md:mt-0 text-text-secondary max-md:text-sm">
            <span className="cursor-pointer hover:text-white">
              Terms of Use
            </span>
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
