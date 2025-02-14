
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[#111111]">
      {/* Removed the left gradient orb that was causing the overlay */}
      <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px] -z-10 animate-pulse" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full pb-52 px-8 lg:px-16"
      >
        <div className="space-y-8"> {/* Increased spacing between elements */}
          <div className="space-y-3"> {/* Increased spacing between headlines */}
            <h1 className="text-white text-5xl sm:text-7xl font-bold tracking-tight leading-relaxed antialiased">
              Future of
            </h1>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-relaxed bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text overflow-visible antialiased mb-4">
              Digital Assets
            </h1>
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
