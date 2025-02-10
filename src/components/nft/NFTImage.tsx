
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface NFTImageProps {
  image: string;
  name: string;
}

export const NFTImage = ({ image, name }: NFTImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="overflow-hidden rounded-xl border border-white/10 glass-morphism">
      <div className="aspect-square">
        {imageError ? (
          <div className="h-full w-full flex items-center justify-center bg-[#1A1F2C] text-white/50">
            Image not available
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
          />
        )}
      </div>
    </Card>
  );
};
