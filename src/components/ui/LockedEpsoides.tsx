import Button from "./Button";

const benefits = ["No commitment, cancel anytime.", "Unlimited Access.", "Watch on any device."];

export default function LockedEpisodes() {
  return (
    <div className="rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-5 space-y-5">
      <ul className="text-sm text-neutral-500 list-disc list-inside space-y-1 border-t border-neutral-800 pt-3">
        {benefits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Button variant="primary" className="w-full">
        Subscribe Now
      </Button>
    </div>
  );
}
