
import { useParams, useNavigate } from "react-router-dom";
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { NFTProject } from "@/types/nft";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { NFTInfo } from "@/components/nft/NFTInfo";
import { NFTTaskList } from "@/components/nft/NFTTaskList";
import { featuredProjects } from "@/data/nftProjects";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<NFTProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const foundProject = featuredProjects.find(p => p.id === id);
    console.log("Found project:", foundProject);
    
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-[#1A1F2C]">
        <StarryBackground />
        <MainNav />
        <main className="container relative mx-auto px-4 pt-8">
          <div className="text-center text-white">Loading...</div>
        </main>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="relative min-h-screen bg-[#1A1F2C]">
        <StarryBackground />
        <MainNav />
        <main className="container relative mx-auto px-4 pt-8">
          <div className="text-center text-white">Project not found</div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#1A1F2C]">
      <StarryBackground />
      <MainNav />
      <main className="container relative mx-auto px-4 pt-8">
        <Button
          variant="ghost"
          className="mb-6 text-white hover:text-white/80 hover:bg-white/10"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - NFT Image */}
            <div className="w-full md:w-1/3">
              <img 
                src={project.image} 
                alt={project.nftName}
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e";
                }}
              />
            </div>
            
            {/* Right Side - Project Info */}
            <div className="w-full md:w-2/3">
              <div className="max-h-[600px] overflow-y-auto pr-4 space-y-6">
                <NFTInfo
                  projectName={project.projectName}
                  nftName={project.nftName}
                  xpReward={project.xpReward}
                  neftReward={project.neftReward}
                  startTime={project.startTime}
                  endTime={project.endTime}
                  description={project.description}
                  rarityDistribution={project.rarityDistribution}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px bg-white/10 my-8" />

        {/* Lower Section - Tasks */}
        <div className="space-y-6">
          <NFTTaskList tasks={project.tasks} />
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
