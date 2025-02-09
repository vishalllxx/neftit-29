
const StarryBackground = () => {
  return (
    <>
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background/95">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </>
  );
};

export default StarryBackground;
