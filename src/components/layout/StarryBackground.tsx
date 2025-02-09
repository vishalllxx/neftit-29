
const StarryBackground = () => {
  return (
    <div className="fixed inset-0 bg-[#111111]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
    </div>
  );
};

export default StarryBackground;
