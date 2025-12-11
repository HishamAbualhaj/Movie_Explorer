interface LandingTitleProps {
  title: string;
  subtitle: string;
}
const LandingTitle = ({ title, subtitle }: LandingTitleProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl font-medium text-white">{title}</div>
      <div className="text-text-muted">{subtitle}</div>
    </div>
  );
};

export default LandingTitle;
