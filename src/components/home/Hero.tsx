
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[#111111] overflow-visible">      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full pb-56 px-8 lg:px-16 overflow-visible"
      >
        <div className="space-y-8 overflow-visible relative z-10"> 
          <div className="space-y-3 overflow-visible"> 
            <h1 className="text-white text-5xl sm:text-7xl font-bold tracking-tight leading-loose antialiased relative">
              Future of
            </h1>
            <div className="relative overflow-visible pb-4">
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-loose bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text antialiased relative z-10">
                Digital Assets
              </h1>
            </div>
          </div>

          <p className="text-xl text-white/80 leading-relaxed antialiased">
            Join the revolution of digital engagement. Discover unique NFTs, complete tasks, 
            and earn rewards in our innovative Web3 ecosystem.
          </p>

          <div className="mt-8">
            <Link to="/discover">
              <Button 
                size="lg" 
                className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Exploring
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
