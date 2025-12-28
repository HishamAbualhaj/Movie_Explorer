import Button from "@/components/ui/Button";
import { CircleDotDashed } from "lucide-react";

interface PlanCardProps {
  title: string;
  desc: string;
  price: string;
  type: "monthly" | "yearly";
  features: string[];
}
const PlanCard = ({ title, desc, price, type, features }: PlanCardProps) => {
  return (
    <div className="flex-1 border border-border/70 bg-bg-light rounded-lg p-10">
      <div className="text-white font-medium lg:text-2xl text-xl">{title}</div>
      <div className="mt-3 text-text-secondary/70 text-[15px]">{desc}</div>
      <div className="mt-8 lg:text-4xl text-2xl text-white font-medium flex items-end gap-2">
        {"$" + price}{" "}
        <div className="text-[15px] text-text-secondary">
          {type === "monthly" ? "/month" : "/year"}
        </div>
      </div>
      <div className="mt-10">
        {features.map((feat, i) => (
          <div
            key={i}
            className="flex mt-5 items-center gap-2 border p-2 rounded-lg border-bg/80 bg-bg/50"
          >
            <CircleDotDashed size={19} className="text-primary" />
            <div className="text-white"> {feat}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Button>Choose Plan</Button>
      </div>
    </div>
  );
};

export default PlanCard;
