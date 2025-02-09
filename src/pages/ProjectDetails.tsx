
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

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<NFTProject | null>(null);

  useEffect(() => {
    // Simulating data fetch - in real app, this would be an API call
    const featuredProjects: NFTProject[] = [
      {
        id: "1",
        projectName: "Genesis Collection",
        nftName: "Ethereal Guardian",
        image: "https://cdn.midjourney.com/8cf5f7c7-7365-4302-8696-d4366653195d/0_0.webp",
        endTime: "2024-04-01T00:00:00Z",
        startTime: "2024-03-01T00:00:00Z",
        xpReward: 25,
        neftReward: 15,
        description: "A mystical guardian NFT that protects the digital realm. This rare collectible showcases the fusion of ethereal energy and digital artistry.",
        owner: "0x1234...5678",
        totalSupply: 1000,
        levelRequirement: 5,
        rarity: "Legendary",
        category: "Gaming",
        subcategory: "RPG",
        taskStatus: "Not Started",
        usdValue: 150,
        network: "Ethereum",
        rarityDistribution: {
          legendary: 5,
          rare: 15,
          common: 80
        },
        tasks: [
          { id: "1", title: "Follow on Twitter", completed: false, type: "twitter" },
          { id: "2", title: "Join Discord Community", completed: false, type: "discord" },
          { id: "3", title: "Share announcement post", completed: false, type: "twitter" }
        ]
      },
      {
        id: "2",
        projectName: "Cyber Warriors",
        nftName: "Neon Samurai",
        image: "https://cdn.midjourney.com/b6605ce7-0416-4c63-89eb-4b5f5c5e0dd8/0_0.webp",
        endTime: "2024-03-28T00:00:00Z",
        startTime: "2024-03-01T00:00:00Z",
        xpReward: 30,
        neftReward: 20,
        description: "A futuristic warrior wielding digital katanas, the Neon Samurai represents the perfect blend of traditional warrior spirit and cyberpunk aesthetics.",
        owner: "0x1234...5678",
        totalSupply: 1000,
        levelRequirement: 5,
        rarity: "Legendary",
        category: "Gaming",
        subcategory: "RPG",
        taskStatus: "Not Started",
        usdValue: 150,
        network: "Ethereum",
        rarityDistribution: {
          legendary: 5,
          rare: 15,
          common: 80
        },
        tasks: [
          { id: "1", title: "Follow on Twitter", completed: false, type: "twitter" },
          { id: "2", title: "Join Discord Server", completed: false, type: "discord" }
        ]
      },
      {
        id: "3",
        projectName: "Space Explorers",
        nftName: "Astral Voyager",
        image: "https://cdn.midjourney.com/91cd0db7-7550-4a71-9b78-e88af54c4c45/0_0.webp",
        endTime: "2024-03-25T00:00:00Z",
        startTime: "2024-03-01T00:00:00Z",
        xpReward: 35,
        neftReward: 25,
        description: "Navigate through the cosmic web as an Astral Voyager. This space explorer represents humanity's eternal quest to explore the unknown reaches of the universe.",
        owner: "0x1234...5678",
        totalSupply: 1000,
        levelRequirement: 5,
        rarity: "Legendary",
        category: "Gaming",
        subcategory: "RPG",
        taskStatus: "Not Started",
        usdValue: 150,
        network: "Ethereum",
        rarityDistribution: {
          legendary: 5,
          rare: 15,
          common: 80
        },
        tasks: [
          { id: "1", title: "Follow on Twitter", completed: false, type: "twitter" },
          { id: "2", title: "Join Discord", completed: false, type: "discord" }
        ]
      },
      {
        id: "4",
        projectName: "Digital Beasts",
        nftName: "Cyberpunk Panther",
        image: "https://cdn.midjourney.com/7c0f7326-e9a5-4e27-a39c-8118703e9778/0_0.webp",
        endTime: "2024-03-30T00:00:00Z",
        startTime: "2024-03-01T00:00:00Z",
        xpReward: 40,
        neftReward: 30,
        description: "A fierce digital beast enhanced with cybernetic augmentations. The Cyberpunk Panther represents the perfect fusion of nature's grace and technological advancement.",
        owner: "0x1234...5678",
        totalSupply: 1000,
        levelRequirement: 5,
        rarity: "Legendary",
        category: "Gaming",
        subcategory: "RPG",
        taskStatus: "Not Started",
        usdValue: 150,
        network: "Ethereum",
        rarityDistribution: {
          legendary: 5,
          rare: 15,
          common: 80
        },
        tasks: [
          { id: "1", title: "Follow on Twitter", completed: false, type: "twitter" },
          { id: "2", title: "Join Discord", completed: false, type: "discord" }
        ]
      }
    ];

    const foundProject = featuredProjects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

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
            <NFTTaskList tasks={project.tasks} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
