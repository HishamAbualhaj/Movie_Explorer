"use client";

import { Dispatch, SetStateAction, useState } from "react";

const PlanSwitcher = ({
  currentPlan,
  setCurrentPlan,
}: {
  currentPlan: "monthly" | "yearly";
  setCurrentPlan: Dispatch<SetStateAction<"monthly" | "yearly">>;
}) => {
  return (
    <div className="w-fit flex gap-2 bg-bg-dark p-2.5 rounded-md text-white items-center border border-bg-light">
      <div
        onClick={() => {
          setCurrentPlan("monthly");
        }}
        className={`${
          currentPlan === "monthly" && "bg-bg-light"
        }  py-3 px-5 rounded-md hover:bg-bg-light/70 transition cursor-pointer`}
      >
        Monthly
      </div>
      <div
        onClick={() => {
          setCurrentPlan("yearly");
        }}
        className={`${
          currentPlan === "yearly" && "bg-bg-light"
        }  py-3 px-5 rounded-md hover:bg-bg-light/70 transition cursor-pointer`}
      >
        Yearly
      </div>
    </div>
  );
};

export default PlanSwitcher;
