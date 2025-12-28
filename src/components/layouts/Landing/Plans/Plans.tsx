"use client";
import LandingTitle from "@/components/ui/LandingTitle";
import PlanSwitcher from "./PlanSwitcher";
import PlanCard from "./PlanCard";
import { useState } from "react";

type plan = {
  title: string;
  desc: string;
  price: string;
  type: "monthly" | "yearly";
  features: string[];
};
const Plans = () => {
  const plansMonthly: plan[] = [
    {
      title: "Free Plan",
      desc: "Perfect for casual users who want to explore movies and trailers.",
      price: "0",
      type: "monthly",
      features: [
        "Access to basic movie database",
        "Search & filter movies",
        "Watch trailers",
        "Add favorites (limit 10)",
        "Basic recommendations",
        "Signup/Login required",
        "Ads supported",
      ],
    },
    {
      title: "Premium Plan",
      desc: "Ideal for movie enthusiasts who want unlimited access and ad-free experience.",
      price: "9.99",
      type: "monthly",
      features: [
        "Everything in Free plan",
        "Unlimited favorites & watchlist",
        "Full HD streaming",
        "Ad-free experience",
        "Advanced recommendations",
        "Create & share playlists",
        "Priority support / notifications",
        "Early access to new features",
      ],
    },
  ];

  const plansYearly: plan[] = [
    {
      title: "Free Plan",
      desc: "Perfect for casual users who want to explore movies and trailers.",
      price: "0",
      type: "yearly",
      features: [
        "Access to basic movie database",
        "Search & filter movies",
        "Watch trailers",
        "Add favorites (limit 10)",
        "Basic recommendations",
        "Signup/Login required",
        "Ads supported",
      ],
    },
    {
      title: "Premium Plan",
      desc: "Ideal for movie enthusiasts who want unlimited access and ad-free experience.",
      price: "99.99",
      type: "yearly",
      features: [
        "Everything in Free plan",
        "Unlimited favorites & watchlist",
        "Full HD streaming",
        "Ad-free experience",
        "Advanced recommendations",
        "Create & share playlists",
        "Priority support / notifications",
        "Early access to new features",
      ],
    },
  ];

  const [currentPlan, setCurrentPlan] = useState<"monthly" | "yearly">(
    "monthly"
  );
  return (
    <div className="container-wrapper pb-40" id="plans">
      <div className="flex max-lg:flex-col max-lg:gap-5 justify-between">
        <LandingTitle
          title="Choose the plan that's right for you"
          subtitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />
        <PlanSwitcher
          currentPlan={currentPlan}
          setCurrentPlan={setCurrentPlan}
        />
      </div>
      <div className="mt-10 flex max-lg:flex-col gap-5">
        {currentPlan === "monthly"
          ? plansMonthly.map((plan, i) => <PlanCard key={i} {...plan} />)
          : plansYearly.map((plan, i) => <PlanCard key={i} {...plan} />)}
      </div>
    </div>
  );
};

export default Plans;
