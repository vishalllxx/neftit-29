
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
}

export function NFTCard({ id, name, image, price, creator, likes: initialLikes, isLiked: initialIsLiked = false }: NFTCardProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likes, setLikes] = useState(initialLikes);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    setIsLoading(true);
    const newLikedState = !isLiked;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setIsLiked(newLikedState);
      setLikes(prev => newLikedState ? prev + 1 : prev - 1);
      
      // Save to local storage
      const savedNFTs = JSON.parse(localStorage.getItem("savedNFTs") || "[]");
      if (newLikedState) {
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
    <Card className="glass card-hover overflow-hidden fade-in transition-all duration-300 hover:scale-105">
      <div className="aspect-square relative overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-transform hover:scale-110"
                onClick={handleLike}
                disabled={isLoading}
              >
                <Heart className={`h-4 w-4 transition-all duration-300 ${isLiked ? 'fill-red-500 text-red-500 scale-110' : ''} ${isLoading ? 'animate-pulse' : ''}`} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isLiked ? 'Unlike' : 'Like'} this NFT</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-transform hover:scale-110"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share this NFT</TooltipContent>
          </Tooltip>
        </div>
        {price && (
          <Badge className="absolute bottom-2 left-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm">
            {price} ETH
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-lg line-clamp-1">{name}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-1">by {creator}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{likes} likes</span>
          <Button 
            variant="secondary" 
            size="sm"
            className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
