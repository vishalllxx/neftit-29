
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative space-y-8 max-w-5xl mx-auto pt-20">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-[128px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px] -z-10" />
      
      <div className="space-y-6 text-center relative">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white animate-fade-in">
          The Future of
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"> Digital Assets</span>
        </h1>

        <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto animate-fade-in [--animate-delay:200ms] leading-relaxed">
          Join the revolution of digital engagement. Discover unique NFTs, complete tasks, 
          and earn rewards in our innovative Web3 ecosystem.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in [--animate-delay:300ms]">
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
        {[
          { label: "Active Users", value: "10K+", gradient: "from-purple-400 to-pink-400" },
          { label: "NFTs Traded", value: "50K+", gradient: "from-blue-400 to-cyan-400" },
          { label: "Total Volume", value: "$2M+", gradient: "from-pink-400 to-orange-400" },
          { label: "Daily Rewards", value: "$5K+", gradient: "from-green-400 to-emerald-400" }
        ].map((stat, index) => (
          <div 
            key={stat.label}
            className="p-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300 animate-fade-in group hover:scale-105"
            style={{ animationDelay: `${index * 100 + 400}ms` }}
          >
            <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300`}>
              {stat.value}
            </div>
            <div className="text-sm text-[#CCCCCC] mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
