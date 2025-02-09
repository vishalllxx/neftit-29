
const StarryBackground = () => {
  return (
    <div className="fixed inset-0 bg-[#111111]">
      {/* Subtle dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
    </div>
  );
};

export default StarryBackground;
