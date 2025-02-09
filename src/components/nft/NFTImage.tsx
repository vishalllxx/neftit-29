
import { Card } from "@/components/ui/card";

interface NFTImageProps {
  image: string;
  name: string;
}

export const NFTImage = ({ image, name }: NFTImageProps) => {
  return (
    <Card className="overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </Card>
  );
};
