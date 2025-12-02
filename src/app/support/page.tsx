// src/app/support/page.tsx
import { SupportHero } from '@/components/layouts/Support/SupportHero';
import { SupportForm } from '@/components/layouts/Support/SupportForm';
import { SupportFAQ } from '@/components/layouts/Support//SupportFAQ/SupportFAQ';
import { SupportCTA } from '@/components/layouts/Support/SupportCTA';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-bg text-text-main">
      <SupportHero />
      <SupportForm />
      <SupportFAQ />
      <SupportCTA />
    </main>
  );
}
