import { useParams, useNavigate } from "react-router-dom";
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { NFTProject } from "@/types/nft";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { NFTHeader } from "@/components/nft/NFTHeader";
import { NFTRewards } from "@/components/nft/NFTRewards";
import { NFTTasks } from "@/components/nft/NFTTasks";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<NFTProject | null>(null);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const featuredProjects: NFTProject[] = [
      {
        id: "1",
        projectName: "Genesis Collection",
        nftName: "Ethereal Guardian",
        image: "https://images.unsplash.com/photo-1592492152545-9695d3f473f4?auto=format&fit=crop&q=80",
        endTime: "2024-04-01T00:00:00Z",
        xpReward: 25,
        neftReward: 15,
        description: "A mystical guardian NFT that protects the digital realm. Earn this rare collectible by completing community tasks.",
        owner: "0x1234...5678",
        totalSupply: 1000,
        levelRequirement: 5,
        rarity: "Legendary",
        category: "Gaming",
        subcategory: "RPG",
        taskStatus: "Not Started",
        usdValue: 150,
        network: "Ethereum",
        tasks: [
          { id: "1", title: "Join Discord Community", completed: false },
          { id: "2", title: "Follow on Twitter", completed: false },
          { id: "3", title: "Share announcement post", completed: false }
        ]
      },
      {
        id: "2",
        projectName: "Cyber Warriors",
        nftName: "Neon Samurai",
        image: "https://images.unsplash.com/photo-1614792221813-42eb6f781a6f?auto=format&fit=crop&q=80",
        endTime: "2024-03-28T00:00:00Z",
        xpReward: 30,
        neftReward: 20,
        description: "A futuristic warrior wielding digital katanas. Join the Cyber Warriors and claim your unique Neon Samurai.",
        owner: "0x1234...5678",
        totalSupply: 1000,
        levelRequirement: 5,
        rarity: "Legendary",
        category: "Gaming",
        subcategory: "RPG",
        taskStatus: "Not Started",
        usdValue: 150,
        network: "Ethereum",
        tasks: [
          { id: "1", title: "Complete tutorial", completed: false },
          { id: "2", title: "Visit 3 virtual spaces", completed: false }
        ]
      },
      {
        id: "3",
        projectName: "Space Explorers",
        nftName: "Astral Voyager",
        image: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&q=80",
        endTime: "2024-03-25T00:00:00Z",
        xpReward: 35,
        neftReward: 25,
        description: "Navigate through the cosmic web as an Astral Voyager. Perfect for space exploration enthusiasts.",
        owner: "0x1234...5678",
        totalSupply: 1000,
        levelRequirement: 5,
        rarity: "Legendary",
        category: "Gaming",
        subcategory: "RPG",
        taskStatus: "Not Started",
        usdValue: 150,
        network: "Ethereum",
        tasks: [
          { id: "1", title: "Create explorer profile", completed: false },
          { id: "2", title: "Complete first mission", completed: false }
        ]
      },
      {
        id: "4",
        projectName: "Digital Beasts",
        nftName: "Cyberpunk Panther",
        image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?auto=format&fit=crop&q=80",
        endTime: "2024-03-30T00:00:00Z",
        xpReward: 40,
        neftReward: 30,
        description: "A fierce digital beast enhanced with cybernetic augmentations. Own this rare creature by completing challenges.",
        owner: "0x1234...5678",
        totalSupply: 1000,
        levelRequirement: 5,
        rarity: "Legendary",
        category: "Gaming",
        subcategory: "RPG",
        taskStatus: "Not Started",
        usdValue: 150,
        network: "Ethereum",
        tasks: [
          { id: "1", title: "Join beast hunters", completed: false },
          { id: "2", title: "Complete hunting challenge", completed: false }
        ]
      }
    ];

    const foundProject = featuredProjects.find(p => p.id === id);
    setProject(foundProject || null);
  }, [id]);

  const calculateTimeLeft = () => {
    if (!project) return "";
    
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
    }, 60000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [project]);

  const handleTaskComplete = (taskId: string) => {
    toast.success("Task completed!");
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <StarryBackground />
        <MainNav />
        <main className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center">Project not found</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <Button
          variant="ghost"
          className="absolute top-28 left-4 md:left-8 text-white/80 hover:text-white"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-5xl mx-auto mt-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden rounded-xl border-0 bg-gradient-to-br from-[#222222]/50 via-background/20 to-background/10 backdrop-blur-sm">
              <img
                src={project.image}
                alt={project.nftName}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </Card>

            <div className="space-y-6">
              <NFTHeader project={project} timeLeft={timeLeft} />
              <NFTRewards project={project} />
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Description</h3>
                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <Button 
                className="w-full md:w-auto bg-gradient-to-r from-[#333333] to-[#444444] hover:opacity-90 transition-opacity"
                onClick={() => toast.success("Tasks started! Complete them to earn your NFT.")}
              >
                Start Tasks
              </Button>
            </div>
          </div>

          <NFTTasks project={project} onTaskComplete={handleTaskComplete} />
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
