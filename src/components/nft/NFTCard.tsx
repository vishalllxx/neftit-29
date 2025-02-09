
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
    <Card className="overflow-hidden bg-[#111111] border border-[#2A2A2A] rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-3 right-3 flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors"
                onClick={handleLike}
                disabled={isLoading}
              >
                <Heart className={`h-4 w-4 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'} ${isLoading ? 'animate-pulse' : ''}`} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isLiked ? 'Unlike' : 'Like'} this NFT</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors"
              >
                <Share2 className="h-4 w-4 text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share this NFT</TooltipContent>
          </Tooltip>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
          <div className="bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <p className="text-xs text-white/70">{creator}</p>
            <p className="text-sm font-medium text-white">{name}</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <p className="text-xs text-white/70">Price</p>
            <p className="text-sm font-medium text-white">{price || "0"} NEFT</p>
          </div>
        </div>
      </div>
      
      <CardContent className="p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          <span className="text-sm text-gray-400">{likes}</span>
        </div>
        {endTime && (
          <span className="text-sm text-gray-400">{endTime}</span>
        )}
      </CardContent>
    </Card>
  );
}
