
interface DiscoverHeaderProps {
  title: string;
  subtitle: string;
}

export const DiscoverHeader = ({ title, subtitle }: DiscoverHeaderProps) => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white/90">
        {title}
      </h1>
      <p className="text-lg text-white/60 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};
