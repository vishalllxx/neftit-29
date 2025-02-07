
import { useEffect, useState } from "react";

const StarryBackground = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-[#121212] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/95 to-gray-900/90">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent animate-pulse" />
      </div>
      
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Parallax stars */}
      <div 
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{
          background: `radial-gradient(2px 2px at ${20 + offset * 0.02}% ${30 + offset * 0.01}%, #fff 0%, transparent 100%),
                      radial-gradient(2px 2px at ${60 + offset * 0.01}% ${40 + offset * 0.02}%, #fff 0%, transparent 100%),
                      radial-gradient(2px 2px at ${35 + offset * 0.03}% ${80 + offset * 0.01}%, #fff 0%, transparent 100%),
                      radial-gradient(2px 2px at ${80 + offset * 0.02}% ${15 + offset * 0.01}%, #fff 0%, transparent 100%),
                      radial-gradient(2px 2px at ${10 + offset * 0.02}% ${90 + offset * 0.01}%, #fff 0%, transparent 100%)`,
        }}
      />

      {/* Animated stars */}
      <div className="fixed inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-[0.15] animate-twinkle"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 3 + 2 + "s",
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="fixed inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30 animate-pulse"
            style={{
              width: Math.random() * 300 + 200 + "px",
              height: Math.random() * 300 + 200 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background: `radial-gradient(circle, rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.2) 0%, transparent 70%)`,
              animationDelay: i * 2 + "s",
              animationDuration: "4s",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default StarryBackground;
