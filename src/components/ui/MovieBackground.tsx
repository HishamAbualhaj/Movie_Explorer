const MovieBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-background-dark via-background to-background-light" />

      <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-glow" />

      <div className="absolute top-0 left-8 w-16 h-full opacity-5">
        <div className="w-full h-full flex flex-col gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-full h-8 bg-foreground rounded-sm" />
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-8 w-16 h-full opacity-5">
        <div className="w-full h-full flex flex-col gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-full h-8 bg-foreground rounded-sm" />
          ))}
        </div>
      </div>

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export default MovieBackground;
