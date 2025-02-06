
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  price?: string;
  creator: string;
  likes: number;
  isLiked?: boolean;
}

export function NFTCard({ id, name, image, price, creator, likes, isLiked }: NFTCardProps) {
  return (
    <Card className="glass card-hover overflow-hidden fade-in transition-all duration-300">
      <div className="aspect-square relative overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm"
          >
            <Heart className={`h-4 w-4 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm"
          >
            <Share2 className="h-4 w-4" />
          </Button>
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
            className="transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
