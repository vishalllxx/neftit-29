
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, User, Package } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  price?: string;
  creator: string;
  likes: number;
  isLiked?: boolean;
  endTime?: string;
  projectName: string;
  taskStatus?: 'Not Started' | 'In Progress' | 'Completed';
  owner: string;
  supply: number;
  xpReward: number;
  neftReward: number;
  category: string;
  subcategory: string;
}

export function NFTCard({ 
  id, 
  name, 
  image, 
  projectName,
  taskStatus = 'Not Started',
  owner,
  supply,
  xpReward,
  neftReward,
  category,
  subcategory,
  isLiked: initialIsLiked = false,
}: NFTCardProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsLiked(!isLiked);
      
      const savedNFTs = JSON.parse(localStorage.getItem("savedNFTs") || "[]");
      if (!isLiked) {
        if (!savedNFTs.includes(id)) {
          localStorage.setItem("savedNFTs", JSON.stringify([...savedNFTs, id]));
          toast.success("NFT saved to your collection");
        }
      } else {
        localStorage.setItem("savedNFTs", JSON.stringify(savedNFTs.filter((nftId: string) => nftId !== id)));
        toast.success("NFT removed from your collection");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden bg-[#1A1F2C] border-none rounded-xl hover:scale-[1.02] transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white">
            {category} → {subcategory}
          </span>
        </div>
      </div>
      
      <CardContent className="p-5 space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">{projectName}</p>
            <span className={`text-xs px-2 py-1 rounded-full ${
              taskStatus === 'In Progress' 
                ? 'bg-yellow-500/20 text-yellow-500' 
                : 'bg-gray-500/20 text-gray-400'
            }`}>
              {taskStatus}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <div className="flex items-center space-x-2 bg-black/20 rounded-lg px-3 py-2">
            <User className="h-4 w-4 text-gray-400" />
            <div className="space-y-0.5">
              <p className="text-xs text-gray-400">Owner</p>
              <p className="text-sm text-white font-medium">{owner}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-black/20 rounded-lg px-3 py-2">
            <Package className="h-4 w-4 text-gray-400" />
            <div className="space-y-0.5">
              <p className="text-xs text-gray-400">Supply</p>
              <p className="text-sm text-white font-medium">{supply}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">Complete tasks to earn:</p>
          <div className="flex space-x-2">
            <div className="flex items-center space-x-1 bg-black/20 rounded-lg px-3 py-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.35001 9.65002V11.35C4.35001 15.57 7.78001 19 12 19C16.22 19 19.65 15.57 19.65 11.35V9.65002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.61 6.43C11.51 6.1 12.49 6.1 13.39 6.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.2 8.55C11.73 8.41 12.28 8.41 12.81 8.55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white font-medium">{xpReward} XP</span>
            </div>
            
            <div className="flex items-center space-x-1 bg-black/20 rounded-lg px-3 py-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white font-medium">{neftReward} NEFT</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
