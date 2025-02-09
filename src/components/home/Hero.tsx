
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pt-20">
      <div className="space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary animate-fade-in">
          <span className="text-sm font-medium">
            Welcome to NEFTIT
          </span>
        </div>

        <h1 className="h1 animate-fade-in [--animate-delay:200ms]">
          Discover & Trade Premium
          <span className="text-primary"> Digital Assets</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [--animate-delay:300ms]">
          Join the future of digital engagement. Complete tasks, earn rewards, and build your Web3 portfolio with our innovative platform.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in [--animate-delay:400ms]">
        <Link to="/discover">
          <Button 
            size="lg" 
            className="rounded-full text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
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
            className="card-base p-4 animate-fade-in hover:bg-card/50 transition-colors"
            style={{ animationDelay: `${index * 100 + 500}ms` }}
          >
            <div className="text-2xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
