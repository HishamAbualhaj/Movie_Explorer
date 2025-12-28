import SideBar from "@/components/layouts/dashboard/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-lg:flex-col lg:gap-5 gap-0">
      <SideBar />
      <div className="flex-1"> {children}</div>
    </div>
  );
};

export default DashboardLayout;
