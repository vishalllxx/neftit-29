
import { Card } from "@/components/ui/card";

interface NFTImageProps {
  image: string;
  name: string;
}

export const NFTImage = ({ image, name }: NFTImageProps) => {
  return (
    <Card className="overflow-hidden rounded-xl border border-white/10 bg-[#1A1F2C]">
      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = "https://placehold.co/600x600/1A1F2C/ffffff?text=NFT+Image";
          }}
        />
      </div>
    </Card>
  );
};
