
import { Trophy, Gamepad, Gem } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Gem className="h-6 w-6 text-purple-400" />,
    title: "Turn NFTs into Passive Income",
    description: "Why just collect when you can earn? Our platform lets you stake, rent, and trade NFTs to generate ongoing rewards.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    icon: <Gamepad className="h-6 w-6 text-blue-400" />,
    title: "Gaming That Pays You to Play",
    description: "Imagine a world where every game you play fills your wallet! Complete challenges, climb the leaderboards, and earn real NEFT tokens.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    icon: <Trophy className="h-6 w-6 text-pink-400" />,
    title: "No More Blockchain Hassles",
    description: "Tired of gas fees and complicated swaps? Our platform ensures zero headaches when moving assets across chains.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  }
];

export const WhatIsNeftit = () => {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl" />
      
      <motion.div 
        className="text-center mb-16 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
          What is NEFTIT?
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Join the future of digital assets where collecting meets earning
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative h-[200px] mb-6 rounded-2xl overflow-hidden">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  {feature.icon}
                </div>
              </div>
            </div>
            <div className="relative backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-4">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
