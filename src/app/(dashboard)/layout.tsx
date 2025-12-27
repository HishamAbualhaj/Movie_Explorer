import SideBar from "@/components/layouts/dashboard/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-5">
      <SideBar />
      <div className="flex-1"> {children}</div>
    </div>
  );
};

export default DashboardLayout;
