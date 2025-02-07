
import { Trophy, Gamepad, Gem } from "lucide-react";

const features = [
  {
    icon: <Gem className="h-6 w-6 text-[#D1D5DB]" />,
    title: "Turn NFTs into Passive Income",
    description: "Why just collect when you can earn? Our platform lets you stake, rent, and trade NFTs to generate ongoing rewards. The more you engage, the bigger the payouts!"
  },
  {
    icon: <Gamepad className="h-6 w-6 text-[#D1D5DB]" />,
    title: "Gaming That Pays You to Play",
    description: "Imagine a world where every game you play fills your wallet! Complete challenges, climb the leaderboards, and earn real NEFT tokens just by playing. More gaming = more earnings!"
  },
  {
    icon: <Trophy className="h-6 w-6 text-[#D1D5DB]" />,
    title: "No More Blockchain Hassles",
    description: "Tired of gas fees and complicated swaps? Our platform ensures zero headaches when moving assets across chains. Stake, trade, and participate in dApps with one-click simplicity!"
  }
];

export const WhatIsNeftit = () => {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl" />
      
      <div className="text-center mb-16 space-y-4">
        <h2 
          className="text-4xl font-bold"
          style={{ 
            background: 'linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            padding: '0.2em 0' 
          }}
        >
          What is NEFTIT?
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Join the future of digital assets where collecting meets earning
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl 
                     transition-all duration-300 space-y-6
                     hover:scale-105 hover:bg-white/10
                     border border-white/10 hover:border-white/20
                     hover:shadow-lg hover:shadow-purple-500/10
                     animate-fade-in"
            style={{ 
              animationDelay: `${index * 150}ms`,
              transform: `translateY(${index * 5}px)`
            }}
          >
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#475569] to-[#475569]/50 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {feature.title}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
