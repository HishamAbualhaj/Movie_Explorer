import { SupportHero } from "@/components/layouts/Support/SupportHero";
import { SupportForm } from "@/components/layouts/Support/SupportForm/SupportForm";
import FAQ from "@/components/layouts/Landing/FAQ/FAQ";
import Trial from "@/components/ui/Trial";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-bg text-text-main">
      <SupportHero />
      <SupportForm />
      <FAQ />
      <Trial />
    </main>
  );
}
