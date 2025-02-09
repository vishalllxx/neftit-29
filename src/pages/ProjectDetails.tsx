
import { useParams, useNavigate } from "react-router-dom";
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { NFTProject } from "@/types/nft";
import { ArrowLeft, Award, Calendar, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

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
      <div className="min-h-screen bg-black">
        <StarryBackground />
        <MainNav />
        <main className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center text-white/80">Project not found</div>
        </main>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Button
          variant="ghost"
          className="mb-8 text-white/80 hover:text-white"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
            <div className="aspect-square">
              <img
                src={project.image}
                alt={project.nftName}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          <div className="space-y-6 bg-[#111111] p-8 rounded-xl border border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium text-white/90">{project.projectName}</h2>
                <span className="text-blue-500">✓</span>
              </div>
              <h1 className="text-3xl font-bold text-white">{project.nftName}</h1>
            </div>
            
            <Separator className="bg-white/[0.08]" />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-white/80" />
                <span className="text-xl font-bold text-white">{project.xpReward} XP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">{project.neftReward} NEFT</span>
              </div>
            </div>

            <Separator className="bg-white/[0.08]" />

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-white/60" />
                <span className="text-sm text-white/60">
                  Start Date: {formatDate(project.startTime || '')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-white/60" />
                <span className="text-sm text-white/60">
                  End Date: {formatDate(project.endTime)}
                </span>
              </div>
            </div>

            <Separator className="bg-white/[0.08]" />

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Rarities</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/80">Legendary</span>
                  <span className="text-white/60">{project.rarityDistribution?.legendary}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Rare</span>
                  <span className="text-white/60">{project.rarityDistribution?.rare}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Common</span>
                  <span className="text-white/60">{project.rarityDistribution?.common}%</span>
                </div>
              </div>
            </div>

            <Separator className="bg-white/[0.08]" />

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Description</h3>
              <p className="text-white/70 leading-relaxed">{project.description}</p>
            </div>

            <Separator className="bg-white/[0.08]" />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Tasks</h3>
              <div className="space-y-3">
                {project.tasks.map((task) => (
                  <div 
                    key={task.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-2">
                      {task.type === 'twitter' ? (
                        <Twitter className="h-4 w-4 text-white/60" />
                      ) : (
                        <MessageCircle className="h-4 w-4 text-white/60" />
                      )}
                      <span className="text-white/80">{task.title}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-white/60 hover:text-white hover:bg-white/10"
                      onClick={() => toast.success("Task verified!")}
                    >
                      Verify
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
