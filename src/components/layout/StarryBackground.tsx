
const StarryBackground = () => {
  return (
    <div className="fixed inset-0 bg-[#1A1F2C]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};

export default StarryBackground;
