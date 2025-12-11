import Categories from "@/components/layouts/Landing/Categories/Categories";
import Devices from "@/components/layouts/Landing/Devices/Devices";
import FAQ from "@/components/layouts/Landing/FAQ/FAQ";
import Hero from "@/components/layouts/Landing/Hero";
import Plans from "@/components/layouts/Landing/Plans/Plans";
import Trial from "@/components/ui/Trial";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <FAQ />
      <Plans />
      <Trial />
    </>
  );
}
