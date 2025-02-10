
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Clock, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

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
  neftReward,
  endTime = "1d left"
}: NFTCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error(`Failed to load image for ${name}`);
  };

  return (
    <Link to={`/project/${id}`} className="block">
      <div className="flex flex-col gap-0 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-200">
        <Card className="overflow-hidden rounded-t-lg bg-[#111111]">
          <div className="p-3">
            {imageError ? (
              <div className="aspect-square rounded-lg flex items-center justify-center bg-[#1A1F2C] text-white/50">
                <ImageIcon className="w-10 h-10" />
              </div>
            ) : (
              <img
                src={image}
                alt={name}
                className="aspect-square w-full h-full object-cover rounded-lg border-0"
                onError={handleImageError}
                loading="eager"
                style={{ border: 'none' }}
              />
            )}
          </div>
        </Card>

        <div className="rounded-b-lg bg-[#111111] p-4">
          <div className="mb-3">
            <h3 className="text-base font-semibold text-white/90 tracking-wide truncate">
              {name}
            </h3>
            <p className="text-sm text-white/60 font-medium truncate mt-1">
              {projectName}
            </p>
          </div>

          <div className="h-px bg-white/5 my-3 mx-1" />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-white/90 font-medium text-sm">
                {neftReward} NEFT
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-white/60">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{endTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
