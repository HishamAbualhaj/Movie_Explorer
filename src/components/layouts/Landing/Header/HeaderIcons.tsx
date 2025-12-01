import { BellRing, Search } from "lucide-react";

const HeaderIcons = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className={`flex gap-6 text-white lg:py-3 py-2 px-4 ${
        isMobile ? "" : "max-md:hidden"
      }`}
    >
      <Search />
      <BellRing />
    </div>
  );
};

export default HeaderIcons;
