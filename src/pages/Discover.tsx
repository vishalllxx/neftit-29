
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { ProjectCard } from "@/components/nft/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { NFTProject } from "@/types/nft";

const Discover = () => {
  const [isLoading, setIsLoading] = useState(true);
  
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
      owner: "0x9876...4321",
      totalSupply: 500,
      levelRequirement: 10,
      rarity: "Epic",
      category: "Gaming",
      subcategory: "Action",
      taskStatus: "In Progress",
      usdValue: 200,
      network: "Polygon",
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
      owner: "0x5432...8765",
      totalSupply: 750,
      levelRequirement: 8,
      rarity: "Rare",
      category: "Exploration",
      subcategory: "Space",
      taskStatus: "Not Started",
      usdValue: 175,
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
      owner: "0x3456...7890",
      totalSupply: 250,
      levelRequirement: 15,
      rarity: "Epic",
      category: "Creatures",
      subcategory: "Cyberpunk",
      taskStatus: "Not Started",
      usdValue: 300,
      network: "BSC",
      tasks: [
        { id: "1", title: "Join beast hunters", completed: false },
        { id: "2", title: "Complete hunting challenge", completed: false }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-12 relative">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">
              Discover & Earn NFTs
            </h1>
            <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
              Complete tasks, earn rewards, and collect unique NFTs
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass p-2 flex gap-2 rounded-full border border-[#333333] bg-[#222222]/50 backdrop-blur-sm">
              <Input
                placeholder="Search projects and NFTs..."
                className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-[#F5F5F5]"
              />
              <Button size="icon" className="rounded-full bg-[#333333] hover:bg-[#444444]">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 fade-in">
            {isLoading ? (
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="aspect-square animate-pulse rounded-xl bg-[#222222]" />
              ))
            ) : (
              featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Discover;
