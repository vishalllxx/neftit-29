
import { motion } from "framer-motion";

export const HowItWorksNew = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Your journey to rare NFTs in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-900 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">Complete Quests & Challenges</h3>
            <p className="text-gray-400 mt-2">
              Participate in social & interactive quests. Follow, retweet, join Discord, solve puzzles, and more!
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-500">
              <li>Engage with the community</li>
              <li>Complete interactive tasks</li>
              <li>Solve exciting puzzles</li>
            </ul>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-gray-900 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">Earn & Collect NFTs</h3>
            <p className="text-gray-400 mt-2">
              Every completed quest rewards you with a unique NFT. Our NFTs are visually stunning, highly collectible, and valuable.
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-500">
              <li>Earn unique NFTs</li>
              <li>Build your collection</li>
              <li>Get guaranteed rewards</li>
            </ul>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-gray-900 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">Upgrade Your NFTs</h3>
            <p className="text-gray-400 mt-2">
              Start with Common NFTs and burn them to upgrade to higher tiers. Follow the upgrade path to reach the exclusive Gold tier!
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-500">
              <li>5 Commons → 1 Platinum</li>
              <li>5 Platinum → 1 Silver</li>
              <li>5 Silver → 1 Gold</li>
            </ul>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 bg-gray-900 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">Showcase, Trade & Hold</h3>
            <p className="text-gray-400 mt-2">
              Trade your NFTs on leading marketplaces, showcase your collection, and hold for exclusive future perks.
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-500">
              <li>Trade on marketplaces</li>
              <li>Display your collection</li>
              <li>Access exclusive perks</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
