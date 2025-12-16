import { SupportHero } from "@/components/layouts/Support/SupportHero";
import { SupportForm } from "@/components/layouts/Support/SupportForm/SupportForm";
import { SupportCTA } from "@/components/layouts/Support/SupportCTA";
import FAQ from "@/components/layouts/Landing/FAQ/FAQ";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-bg text-text-main">
      <SupportHero />
      <SupportForm />
      <FAQ />
      <SupportCTA />
    </main>
  );
}
