
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, MessageSquare, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const featuredProjects = [
  {
    id: "1",
    title: "DeFi Protocol",
    description: "Next-gen decentralized exchange platform",
    progress: 75,
    participants: 1234,
    followers: 892,
    comments: 156,
    volume: "12.5 ETH",
    growth: "+25%",
    image: "https://images.unsplash.com/photo-1639152201720-5e536d254d81?auto=format&fit=crop&w=800&q=80" // Modern crypto trading dashboard
  },
  {
    id: "2",
    title: "NFT Marketplace",
    description: "Trade unique digital collectibles",
    progress: 60,
    participants: 892,
    followers: 567,
    comments: 89,
    volume: "8.2 ETH",
    growth: "+15%",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80" // Digital art gallery
  },
  {
    id: "3",
    title: "GameFi Project",
    description: "Play-to-earn blockchain gaming",
    progress: 45,
    participants: 567,
    followers: 345,
    comments: 67,
    volume: "5.7 ETH",
    growth: "+10%",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" // Gaming setup with neon lights
  }
];

export const FeaturedProjects = () => {
  const [followedProjects, setFollowedProjects] = useState<string[]>([]);

  const handleFollow = (projectId: string) => {
    setFollowedProjects(prev => {
      const isFollowing = prev.includes(projectId);
      if (isFollowing) {
        toast.success("Unfollowed project");
        return prev.filter(id => id !== projectId);
      } else {
        toast.success("Following project");
        return [...prev, projectId];
      }
    });
  };

  const handleShare = (projectTitle: string) => {
    navigator.clipboard.writeText(`Check out ${projectTitle} on NEFTIT!`);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="pt-20 relative">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/20 via-transparent to-transparent blur-3xl opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl opacity-30" />
      
      <h2 className="text-3xl font-bold mb-12 text-[#D1D5DB] relative z-10">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id}
            className="group backdrop-blur-xl bg-white/5 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-[#8B5CF6]/5"
            style={{ 
              animationDelay: `${index * 100}ms`,
              transform: "translateZ(0)" // Forces GPU acceleration
            }}
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">{project.growth}</span>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#D1D5DB] group-hover:text-white transition-colors duration-300">{project.title}</h3>
                <p className="text-[#9CA3AF] group-hover:text-[#D1D5DB] transition-colors duration-300">{project.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#9CA3AF]">Volume</span>
                  <span className="text-[#D1D5DB] font-medium">{project.volume}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#9CA3AF]">Progress</span>
                  <span className="text-[#D1D5DB] font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-[#475569]/20 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-sm text-[#9CA3AF] group-hover:text-[#D1D5DB] transition-colors duration-300">
                    <Users className="h-4 w-4" />
                    <span>{project.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#9CA3AF] group-hover:text-[#D1D5DB] transition-colors duration-300">
                    <MessageSquare className="h-4 w-4" />
                    <span>{project.comments}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-white/10 transition-colors duration-300"
                    onClick={() => handleFollow(project.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 transition-colors duration-300 ${
                        followedProjects.includes(project.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-[#9CA3AF] group-hover:text-[#D1D5DB]'
                      }`} 
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-white/10 transition-colors duration-300"
                    onClick={() => handleShare(project.title)}
                  >
                    <Share2 className="h-4 w-4 text-[#9CA3AF] group-hover:text-[#D1D5DB] transition-colors duration-300" />
                  </Button>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C3AED] hover:to-[#C026D3] text-white font-medium transition-all duration-300 shadow-lg shadow-[#8B5CF6]/10 hover:shadow-[#8B5CF6]/20"
              >
                Join Project
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
