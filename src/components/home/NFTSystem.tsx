
import { motion } from "framer-motion";
import { GitMerge, GitBranch, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const NFTSystem = () => {
  const tiers = [
    {
      name: "Common",
      description: "Start your journey with Common NFTs",
      icon: <GitBranch className="w-6 h-6 text-blue-400" />,
      details: "Complete quests to earn Common NFTs"
    },
    {
      name: "Platinum & Silver",
      description: "Burn & upgrade to higher tiers",
      icon: <GitMerge className="w-6 h-6 text-purple-400" />,
      details: "5 Commons → 1 Platinum, 5 Platinum → 1 Silver"
    },
    {
      name: "Gold",
      description: "Reach the exclusive Gold tier",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      details: "5 Silver → 1 Gold (Super rare & exclusive)"
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            The NEFTIT NFT System
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Upgrade your NFTs for maximum rarity & exclusivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {tier.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {tier.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {tier.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
