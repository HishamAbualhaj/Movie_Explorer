import { Award, Star, ThumbsUp, Trophy } from "lucide-react";

type RatingBadgeProps = {
  rating: number;
};

const RatingBadge = ({ rating }: RatingBadgeProps) => {
  let type: "masterpiece" | "top-rated" | "recommended" | null =
    getRatingBadge(rating);

  if (!type) return null;

  const styles = {
    masterpiece: "bg-yellow-400 text-black shadow-yellow-400",
    "top-rated": "bg-primary text-white shadow-red-500",
    recommended: "bg-bg-dark text-white border border-bg-light",
  };

  const labels = {
    masterpiece: (
      <div className="flex items-center gap-1.5">
        <Trophy size={19} fill="none" /> Masterpiece
      </div>
    ),
    "top-rated": (
      <div className="flex gap-1.5 items-center">
        <Star size={19} /> Top Rated
      </div>
    ),
    recommended: (
      <div className="flex gap-1.5 items-center">
        <ThumbsUp size={19} /> Recommended
      </div>
    ),
  };

  return (
    <div
      className={`px-4 py-1.5 text-sm font-medium rounded-lg w-fit shadow-2xl  ${styles[type]}`}
    >
      {labels[type]}
    </div>
  );
};

const getRatingBadge = (rating: number) => {
  if (rating >= 9) return "masterpiece";
  if (rating >= 8) return "top-rated";
  if (rating >= 7) return "recommended";
  return null;
};

export default RatingBadge;
