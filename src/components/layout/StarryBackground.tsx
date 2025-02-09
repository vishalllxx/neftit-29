
const StarryBackground = () => {
  return (
    <>
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-subtle">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </>
  );
};

export default StarryBackground;
