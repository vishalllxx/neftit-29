
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface NFTImageProps {
  image: string;
  name: string;
}

export const NFTImage = ({ image, name }: NFTImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
    console.error(`Failed to load image for ${name}`);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card className="overflow-hidden rounded-xl border border-white/10 glass-morphism">
      <div className="aspect-square relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1A1F2C]">
            <div className="animate-pulse flex items-center justify-center">
              <ImageIcon className="w-10 h-10 text-white/20" />
            </div>
          </div>
        )}
        {imageError ? (
          <div className="h-full w-full flex items-center justify-center bg-[#1A1F2C] text-white/50">
            <ImageIcon className="w-10 h-10" />
          </div>
        ) : (
          <img
            src={`${image}?w=800&fit=crop&auto=format`}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        )}
      </div>
    </Card>
  );
};
