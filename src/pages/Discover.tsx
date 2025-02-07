
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
      projectName: "CryptoArtist Collection",
      nftName: "Cosmic Dreamer #001",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
      endTime: "2024-04-01T00:00:00Z",
      xpReward: 10,
      neftReward: 10,
      description: "Join the Cosmic Dreamers collection and earn your first NFT by completing community tasks.",
      tasks: [
        { id: "1", title: "Join Discord Server", completed: false },
        { id: "2", title: "Follow on Twitter", completed: false },
        { id: "3", title: "Share announcement post", completed: false }
      ]
    },
    {
      id: "2",
      projectName: "Digital Genesis",
      nftName: "Meta Explorer",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      endTime: "2024-03-28T00:00:00Z",
      xpReward: 15,
      neftReward: 12,
      description: "Explore the metaverse and claim your unique Meta Explorer NFT.",
      tasks: [
        { id: "1", title: "Complete tutorial", completed: false },
        { id: "2", title: "Visit 3 virtual spaces", completed: false }
      ]
    },
    {
      id: "3",
      projectName: "Neon Horizons",
      nftName: "Digital Pioneer",
      image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
      endTime: "2024-03-25T00:00:00Z",
      xpReward: 20,
      neftReward: 15,
      description: "Be among the first pioneers in our digital universe.",
      tasks: [
        { id: "1", title: "Create profile", completed: false },
        { id: "2", title: "Complete first mission", completed: false }
      ]
    },
    {
      id: "4",
      projectName: "Meta Landscapes",
      nftName: "Virtual Architect",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032",
      endTime: "2024-03-30T00:00:00Z",
      xpReward: 25,
      neftReward: 20,
      description: "Design and build in the metaverse to earn your Architect NFT.",
      tasks: [
        { id: "1", title: "Design first space", completed: false },
        { id: "2", title: "Get 5 visitors", completed: false }
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
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-8 relative">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Discover & Earn NFTs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete tasks, earn rewards, and collect unique NFTs
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass p-2 flex gap-2 rounded-full">
              <Input
                placeholder="Search projects and NFTs..."
                className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button size="icon" className="rounded-full">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading ? (
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="aspect-square animate-pulse rounded-xl bg-primary/5" />
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
