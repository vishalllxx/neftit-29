
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Clock, Award, Coins } from "lucide-react";
import { NFTProject } from "@/types/nft";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  project: NFTProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState("");

  const calculateTimeLeft = () => {
    const end = new Date(project.endTime).getTime();
    const now = new Date().getTime();
    const distance = end - now;
    
    if (distance < 0) {
      return "Ended";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${days}d ${hours}h ${minutes}m`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every minute

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [project.endTime]);

  return (
    <Card 
      className="group flex flex-col overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="relative aspect-square">
        <img
          src={project.image}
          alt={project.nftName}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-2 text-sm text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-medium">{timeLeft}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 p-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gradient animate-text">{project.nftName}</h3>
          <p className="text-sm text-white/70 font-medium">{project.projectName}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-white/70">Complete tasks to earn:</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/20">
              <Award className="h-5 w-5 text-primary" />
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-primary">{project.xpReward}</span>
                <span className="text-sm font-medium text-white/70">XP</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-accent/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-accent/20">
              <Coins className="h-5 w-5 text-accent" />
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-accent">{project.neftReward}</span>
                <span className="text-sm font-medium text-white/70">NEFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
