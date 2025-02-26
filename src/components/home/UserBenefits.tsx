
import { motion } from "framer-motion";
import { CircleDollarSign, Gamepad2, Flame, Shield, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Free to Join",
    description: "No hidden fees, just complete quests and earn rewards",
    icon: <CircleDollarSign className="w-6 h-6 text-green-400" />
  },
  {
    title: "Fun & Interactive",
    description: "Engage with Web3 in a fresh, exciting way",
    icon: <Gamepad2 className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Upgrade System",
    description: "Keep progressing and leveling up your collection",
    icon: <Flame className="w-6 h-6 text-orange-400" />
  },
  {
    title: "Anti-Bot Protection",
    description: "We ensure a fair system for all users",
    icon: <Shield className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Global Access",
    description: "Anyone can participate, anytime, anywhere",
    icon: <Globe className="w-6 h-6 text-cyan-400" />
  }
];

export const UserBenefits = () => {
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
            Why Users Love NEFTIT
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of users already collecting and upgrading NFTs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
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
