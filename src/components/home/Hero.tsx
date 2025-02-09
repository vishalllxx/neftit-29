
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pt-20">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white/90 animate-fade-in">
          Discover & Trade Premium
          <span className="text-primary"> Digital Assets</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [--animate-delay:200ms]">
          Join the future of digital engagement. Complete tasks, earn rewards, and build your Web3 portfolio with our innovative platform.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in [--animate-delay:300ms]">
        <Link to="/discover">
          <Button 
            size="lg" 
            className="rounded-md text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Start Exploring
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
        {[
          { label: "Active Users", value: "10K+" },
          { label: "NFTs Traded", value: "50K+" },
          { label: "Total Volume", value: "$2M+" },
          { label: "Daily Rewards", value: "$5K+" }
        ].map((stat, index) => (
          <div 
            key={stat.label}
            className="p-4 rounded-lg border border-white/10 bg-card/50 hover:bg-card transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 100 + 400}ms` }}
          >
            <div className="text-2xl font-semibold text-white">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
