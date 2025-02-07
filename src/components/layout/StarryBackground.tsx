
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
      {/* Enhanced base background */}
      <div className="fixed inset-0 bg-[#121212] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/95 to-gray-900/90">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-purple-500/10 animate-pulse delay-75" />
      </div>
      
      {/* Enhanced grid pattern */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      
      {/* Enhanced parallax stars */}
      <div 
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{
          background: `radial-gradient(2px 2px at ${20 + offset * 0.02}% ${30 + offset * 0.01}%, #fff 0%, transparent 100%),
                      radial-gradient(3px 3px at ${60 + offset * 0.01}% ${40 + offset * 0.02}%, #fff 0%, transparent 100%),
                      radial-gradient(1px 1px at ${35 + offset * 0.03}% ${80 + offset * 0.01}%, #fff 0%, transparent 100%),
                      radial-gradient(2.5px 2.5px at ${80 + offset * 0.02}% ${15 + offset * 0.01}%, #fff 0%, transparent 100%),
                      radial-gradient(1.5px 1.5px at ${10 + offset * 0.02}% ${90 + offset * 0.01}%, #fff 0%, transparent 100%)`,
        }}
      />

      {/* Enhanced animated stars */}
      <div className="fixed inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-[0.15] animate-twinkle"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 8 + "s",
              animationDuration: Math.random() * 4 + 2 + "s",
            }}
          />
        ))}
      </div>

      {/* Enhanced glowing orbs */}
      <div className="fixed inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
            style={{
              width: Math.random() * 400 + 200 + "px",
              height: Math.random() * 400 + 200 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background: `radial-gradient(circle, rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.15) 0%, transparent 70%)`,
              animationDelay: i * 2 + "s",
              animationDuration: "6s",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default StarryBackground;
