const MovieSkeletonCard = () => {
  return (
    <div className="border max-w-[450px] border-border rounded-xl bg-bg-light overflow-hidden">
      <div className="h-[280px] bg-bg-dark/50  animate-pulse" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-bg-dark/50 rounded  animate-pulse" />
        <div className="h-3 w-1/2 bg-bg-dark/50 rounded animate-pulse" />
        <div className="flex gap-2 mt-2">
          <div className="h-3 w-10 bg-bg-dark/50 rounded  animate-pulse" />
          <div className="h-3 w-10 bg-bg-dark/50 rounded  animate-pulse" />
        </div>
      </div>
    </div>
  );
};
export default MovieSkeletonCard;
