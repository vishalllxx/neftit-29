
import { Trophy, Gamepad, Gem } from "lucide-react";

const features = [
  {
    icon: <Gem className="h-6 w-6 text-orange-400" />,
    title: "Turn NFTs into Passive Income",
    description: "Why just collect when you can earn? Our platform lets you stake, rent, and trade NFTs to generate ongoing rewards. The more you engage, the bigger the payouts!"
  },
  {
    icon: <Gamepad className="h-6 w-6 text-orange-400" />,
    title: "Gaming That Pays You to Play",
    description: "Imagine a world where every game you play fills your wallet! Complete challenges, climb the leaderboards, and earn real NEFT tokens just by playing. More gaming = more earnings!"
  },
  {
    icon: <Trophy className="h-6 w-6 text-orange-400" />,
    title: "No More Blockchain Hassles",
    description: "Tired of gas fees and complicated swaps? Our platform ensures zero headaches when moving assets across chains. Stake, trade, and participate in dApps with one-click simplicity!"
  }
];

export const WhatIsNeftit = () => {
  return (
    <div className="py-32 relative">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-[#000000] opacity-90"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-transparent to-transparent" />
      
      <div className="relative">
        <div className="text-center mb-20">
          <h2 
            className="text-6xl font-extrabold italic mb-6"
            style={{ 
              textShadow: '0 0 20px rgba(255,165,0,0.3)',
              fontFamily: "'Audrey', sans-serif",
            }}
          >
            What is NEFTIT?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative"
            >
              {/* Background with glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-orange-700/10 rounded-3xl 
                           backdrop-blur-xl border border-orange-500/10 transition-all duration-300
                           group-hover:border-orange-500/30 group-hover:from-orange-800/30 group-hover:to-orange-600/20"
              />
              
              {/* Content */}
              <div className="relative p-8 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-950/50 to-orange-900/30 
                             flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/40
                             transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white/90">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
