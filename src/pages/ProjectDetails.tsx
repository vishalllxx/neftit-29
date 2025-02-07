import { useParams, useNavigate } from "react-router-dom";
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { NFTProject } from "@/types/nft";
import { ArrowLeft, Calendar, Award, Coins, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<NFTProject | null>(null);
  const [timeLeft, setTimeLeft] = useState("");

  // This is a mock implementation. In a real app, you'd fetch from an API
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

  const handleStartTasks = () => {
    toast.success("Tasks started! Complete them to earn your NFT.");
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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <Button
          variant="ghost"
          className="absolute top-28 left-4 md:left-8"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-5xl mx-auto mt-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
              <img
                src={project.image}
                alt={project.nftName}
                className="w-full h-full object-cover"
              />
            </Card>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gradient animate-text mb-2">
                  {project.nftName}
                </h1>
                <p className="text-lg text-white/70">
                  {project.projectName}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">{timeLeft} remaining</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Complete tasks to earn:</h3>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary/20">
                    <Award className="h-5 w-5 text-primary" />
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-primary">{project.xpReward}</span>
                      <span className="text-sm font-medium text-white/70">XP</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-accent/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-accent/20">
                    <Coins className="h-5 w-5 text-accent" />
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-accent">{project.neftReward}</span>
                      <span className="text-sm font-medium text-white/70">NEFT</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto"
                onClick={handleStartTasks}
              >
                <Play className="mr-2 h-4 w-4" />
                Start Tasks
              </Button>
            </div>
          </div>

          <Card className="p-6 border border-white/10 bg-black/20 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4">Required Tasks</h2>
            <div className="space-y-4">
              {project.tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                      task.completed ? "bg-primary/20" : "bg-white/10"
                    }`}>
                      <Check className={`h-4 w-4 ${
                        task.completed ? "text-primary" : "text-white/30"
                      }`} />
                    </div>
                    <span className="font-medium">{task.title}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-white/10"
                    disabled={task.completed}
                  >
                    {task.completed ? "Completed" : "Complete"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
