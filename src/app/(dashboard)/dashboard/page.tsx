import { redirect } from "next/navigation";

const page = () => {
  redirect("/dashboard/analytics");
  return null;
};

export default page;
