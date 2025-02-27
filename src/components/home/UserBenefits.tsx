
import { motion } from "framer-motion";
import { CircleDollarSign, Gamepad2, Flame, Shield, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    title: "Free to Join",
    description: "No hidden fees, just complete quests and earn rewards",
    icon: <CircleDollarSign className="w-6 h-6 text-green-400" />,
    image: "/lovable-uploads/free-to-join.png"
  },
  {
    title: "Fun & Interactive",
    description: "Engage with Web3 in a fresh, exciting way",
    icon: <Gamepad2 className="w-6 h-6 text-blue-400" />,
    image: "/lovable-uploads/interactive.png"
  },
  {
    title: "Upgrade System",
    description: "Keep progressing and leveling up your collection",
    icon: <Flame className="w-6 h-6 text-orange-400" />,
    image: "/lovable-uploads/upgrade.png"
  },
  {
    title: "Anti-Bot Protection",
    description: "We ensure a fair system for all users",
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    image: "/lovable-uploads/protection.png"
  },
  {
    title: "Global Access",
    description: "Anyone can participate, anytime, anywhere",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    image: "/lovable-uploads/global.png"
  }
];

export const UserBenefits = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
      
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
              <Card className="relative h-full group overflow-hidden bg-black/40 backdrop-blur-xl border-0">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content wrapper */}
                <div className="relative p-8 h-full">
                  {/* Header with icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/5 backdrop-blur">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Image section */}
                  <div className="mt-6 rounded-xl overflow-hidden bg-black/30 p-4">
                    <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                      {/* Placeholder visual element */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-1/2 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 blur-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
