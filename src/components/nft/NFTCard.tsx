
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  price?: string;
  creator: string;
  likes: number;
  isLiked?: boolean;
  endTime?: string;
}

export function NFTCard({ id, name, image, price, creator, likes: initialLikes, isLiked: initialIsLiked = false, endTime }: NFTCardProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likes, setLikes] = useState(initialLikes);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsLiked(!isLiked);
      setLikes(prev => !isLiked ? prev + 1 : prev - 1);
      
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
    <Card className="bg-[#1A1F2C] border-none rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/90 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="space-y-1">
            <p className="text-sm text-white/70">{creator}</p>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-sm text-white/70">Price</p>
            <p className="text-lg font-semibold text-white">{price || "0"} NEFT</p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full h-9 w-9 p-0 border-[#2A2F3C] bg-[#1A1F2C] hover:bg-[#2A2F3C]"
              onClick={handleLike}
              disabled={isLoading}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-[#9b87f5] text-[#9b87f5]' : 'text-white'}`} />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full h-9 w-9 p-0 border-[#2A2F3C] bg-[#1A1F2C] hover:bg-[#2A2F3C]"
            >
              <Share2 className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#2A2F3C]">
          <div className="flex items-center gap-2">
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-[#9b87f5] text-[#9b87f5]' : 'text-gray-400'}`} />
            <span className="text-sm text-gray-400">{likes}</span>
          </div>
          {endTime && (
            <span className="text-sm text-gray-400">{endTime}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
