
import { useParams, useNavigate } from "react-router-dom";
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { NFTProject } from "@/types/nft";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { NFTImage } from "@/components/nft/NFTImage";
import { NFTInfo } from "@/components/nft/NFTInfo";
import { NFTTaskList } from "@/components/nft/NFTTaskList";
import { NFTDetails } from "@/components/nft/NFTDetails";
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
      <div className="min-h-screen bg-[#1A1F2C]">
        <StarryBackground />
        <MainNav />
        <main className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center text-white">Loading...</div>
        </main>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1A1F2C]">
        <StarryBackground />
        <MainNav />
        <main className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center text-white">Project not found</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Button
          variant="ghost"
          className="mb-8 text-white hover:text-white/80 hover:bg-white/10"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <NFTImage image={project.image} name={project.nftName} />
          
          <div className="space-y-6">
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
            <NFTDetails project={project} />
          </div>
        </div>

        <div className="h-px bg-white/10 my-8 max-w-7xl mx-auto" />
        
        <div className="max-w-7xl mx-auto">
          <NFTTaskList tasks={project.tasks} />
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
