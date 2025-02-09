import { useParams, useNavigate } from "react-router-dom";
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { NFTProject } from "@/types/nft";
import { ArrowLeft, Award, Calendar, Check, Twitter, MessageCircle } from "lucide-react";
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
          <Card className="overflow-hidden rounded-xl border-0 bg-[#111111]">
            <div className="aspect-square">
              <img
                src={project.image}
                alt={project.nftName}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          <div className="space-y-6 bg-[#111111] p-8 rounded-xl">
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
                <span className="text-sm text-white/60">Start Date: March 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-white/60" />
                <span className="text-sm text-white/60">End Date: April 15, 2024</span>
              </div>
            </div>

            <Separator className="bg-white/[0.08]" />

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Rarities</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/80">Legendary</span>
                  <span className="text-white/60">5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Rare</span>
                  <span className="text-white/60">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Common</span>
                  <span className="text-white/60">80%</span>
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
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-white/60" />
                    <span className="text-white/80">Follow on Twitter</span>
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
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-white/60" />
                    <span className="text-white/80">Join Discord</span>
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
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-white/60" />
                    <span className="text-white/80">Complete Profile</span>
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
