
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-l from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl" />
      
      <div className="relative space-y-4">
        <div className="flex items-center justify-center gap-2 animate-fade-in">
          <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
          <span className="bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent">
            Welcome to the Future of Digital Assets
          </span>
          <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D1D5DB] via-white to-[#D1D5DB] animate-fade-in relative z-10 font-['Audrey'] leading-tight">
          Discover & Engage with the Best Web3 Projects
        </h1>

        <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto animate-fade-in delay-100 leading-relaxed">
          Join the future of digital engagement. Complete tasks, earn rewards, and build your Web3 portfolio with our innovative platform.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 animate-fade-in delay-200">
        <Link to="/discover">
          <Button 
            size="lg" 
            className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/20 group hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Start Exploring
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
        {[
          { label: "Active Users", value: "10K+" },
          { label: "NFTs Traded", value: "50K+" },
          { label: "Total Volume", value: "$2M+" },
          { label: "Daily Rewards", value: "$5K+" }
        ].map((stat, index) => (
          <div 
            key={stat.label}
            className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 100 + 300}ms` }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
