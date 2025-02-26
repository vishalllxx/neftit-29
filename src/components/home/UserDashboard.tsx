
import { motion } from "framer-motion";
import { Layout, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const UserDashboard = () => {
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
            Track Your Progress
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Monitor your NFT collection and upgrade progress in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10">
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block">
                  <Layout className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  NFT Collection Overview
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>View all earned NFTs in one place</li>
                  <li>Track upgrade eligibility</li>
                  <li>Monitor collection growth</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10">
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Live Analytics
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Check rarity stats</li>
                  <li>Compare with other collectors</li>
                  <li>Track leaderboard position</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
