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
};
const Plans = () => {
  const plansMonthly: plan[] = [
    {
      title: "Basic Plan",
      desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: "9.99",
      type: "monthly",
    },
    {
      title: "Standard Plan",
      desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price: "12.99",
      type: "monthly",
    },
    {
      title: "Premium Plan",
      desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: "14.99",
      type: "monthly",
    },
  ];

  const plansYearly: plan[] = [
    {
      title: "Basic Plan",
      desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: "99.99",
      type: "monthly",
    },
    {
      title: "Standard Plan",
      desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price: "120.99",
      type: "monthly",
    },
    {
      title: "Premium Plan",
      desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: "160.99",
      type: "monthly",
    },
  ];

  const [currentPlan, setCurrentPlan] = useState<"monthly" | "yearly">(
    "monthly"
  );
  return (
    <div className="container-wrapper pb-40">
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
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {currentPlan === "monthly"
          ? plansMonthly.map((plan, i) => <PlanCard key={i} {...plan} />)
          : plansYearly.map((plan, i) => <PlanCard key={i} {...plan} />)}
      </div>
    </div>
  );
};

export default Plans;
