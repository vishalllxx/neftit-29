
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { NFTProject } from "@/types/nft";

interface ProjectCardProps {
  project: NFTProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  const getRemainingTime = (endTime: string) => {
    const end = new Date(endTime).getTime();
    const now = new Date().getTime();
    const distance = end - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return `${days}d ${hours}h remaining`;
  };

  return (
    <Card 
      className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={project.image}
          alt={project.nftName}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white backdrop-blur-sm bg-black/30">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{project.nftName}</h3>
          <p className="text-sm text-white/80">{project.projectName}</p>
          
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Clock className="h-4 w-4" />
            <span>{getRemainingTime(project.endTime)}</span>
          </div>
          
          <div className="mt-4 space-y-2">
            <p className="text-sm text-white/90">Complete tasks to earn:</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-primary">{project.xpReward}</span>
                <span className="text-sm text-white/80">XP</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-accent">{project.neftReward}</span>
                <span className="text-sm text-white/80">NEFT</span>
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full mt-4 bg-primary/20 backdrop-blur-sm hover:bg-primary/30"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
}
