
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative space-y-8 max-w-5xl mx-auto pt-20">
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-[128px] animate-pulse -z-10" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-[128px] animate-pulse -z-10" />
      
      <motion.div 
        className="space-y-6 text-center relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
          The Future of
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"> Digital Assets</span>
        </h1>

        <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto leading-relaxed">
          Join the revolution of digital engagement. Discover unique NFTs, complete tasks, 
          and earn rewards in our innovative Web3 ecosystem.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Link to="/discover">
          <Button 
            size="lg" 
            className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Start Exploring
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {[
          { label: "Active Users", value: "10K+", gradient: "from-purple-400 to-pink-400" },
          { label: "NFTs Traded", value: "50K+", gradient: "from-blue-400 to-cyan-400" },
          { label: "Total Volume", value: "$2M+", gradient: "from-pink-400 to-orange-400" },
          { label: "Daily Rewards", value: "$5K+", gradient: "from-green-400 to-emerald-400" }
        ].map((stat, index) => (
          <motion.div 
            key={stat.label}
            className="p-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.5, duration: 0.8 }}
            whileHover={{ y: -5 }}
          >
            <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300`}>
              {stat.value}
            </div>
            <div className="text-sm text-[#CCCCCC] mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
