
import { motion } from "framer-motion";
import { MessagesSquare, Gift, Flame, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Complete Quests & Challenges",
    description: "Participate in various social & interactive quests. Follow, retweet, join Discord, solve puzzles, and more!",
    icon: <MessagesSquare className="w-6 h-6 text-blue-400" />,
    details: ["Engage with the community", "Complete interactive tasks", "Solve exciting puzzles"]
  },
  {
    title: "Earn & Collect NFTs",
    description: "Every completed quest rewards you with a unique NFT. Our NFTs are visually stunning, highly collectible, and valuable.",
    icon: <Gift className="w-6 h-6 text-purple-400" />,
    details: ["Earn unique NFTs", "Build your collection", "Get guaranteed rewards"]
  },
  {
    title: "Upgrade Your NFTs",
    description: "Start with Common NFTs and burn them to upgrade to higher tiers. Follow the upgrade path to reach the exclusive Gold tier!",
    icon: <Flame className="w-6 h-6 text-pink-400" />,
    details: ["5 Commons → 1 Platinum", "5 Platinum → 1 Silver", "5 Silver → 1 Gold"]
  },
  {
    title: "Showcase, Trade & Hold",
    description: "Trade your NFTs on leading marketplaces, showcase your collection, and hold for exclusive future perks.",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    details: ["Trade on marketplaces", "Display your collection", "Access exclusive perks"]
  },
];

export const HowItWorksNew = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your journey to rare NFTs in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
