import Button from "@/components/ui/Button";

interface PlanCardProps {
  title: string;
  desc: string;
  price: string;
  type: "monthly" | "yearly";
}
const PlanCard = ({ title, desc, price, type }: PlanCardProps) => {
  return (
    <div className="border border-border/70 bg-bg-light rounded-lg p-10">
      <div className="text-white font-medium lg:text-2xl text-xl">{title}</div>
      <div className="mt-3 text-text-secondary/70 text-[15px]">{desc}</div>
      <div className="mt-8 lg:text-4xl text-2xl text-white font-medium flex items-end gap-2">
        {"$" + price}{" "}
        <div className="text-[15px] text-text-secondary">
          {type === "monthly" ? "/month" : "/year"}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Button variant="secondary">Start Free Trial</Button>
        <Button>Choose Plan</Button>
      </div>
    </div>
  );
};

export default PlanCard;
