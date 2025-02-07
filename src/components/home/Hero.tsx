
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D1D5DB] via-white to-[#D1D5DB] animate-fade-in relative z-10 font-['Audrey']">
        Discover & Engage with the Best Web3 Projects
      </h1>
      <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto animate-fade-in delay-100">
        Join the future of digital engagement. Complete tasks, earn rewards, and build your Web3 portfolio.
      </p>
      <div className="flex justify-center gap-4 pt-4 animate-fade-in delay-200">
        <Link to="/discover">
          <Button 
            size="lg" 
            className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-[#475569] to-[#475569]/80 hover:from-[#475569]/90 hover:to-[#475569]/70 text-[#D1D5DB] transition-all duration-300 shadow-lg hover:shadow-[#475569]/20 group hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Start Exploring
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
