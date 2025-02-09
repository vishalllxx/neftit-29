
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Clock } from "lucide-react";

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
  name, 
  image, 
  projectName,
  neftReward,
  endTime = "1d left"
}: NFTCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-0">
      {/* Image Card */}
      <Card 
        className="group relative aspect-square overflow-hidden rounded-t-lg bg-[#111111] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
          
          {/* Hover Overlay */}
          <div 
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </Card>

      {/* Info Box */}
      <div className="rounded-b-lg bg-[#111111] p-4">
        <div className="mb-3">
          <h3 className="text-base font-semibold text-white/90 tracking-wide truncate">
            {name}
          </h3>
          <p className="text-sm text-white/60 font-medium truncate mt-1">
            {projectName}
          </p>
        </div>

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
  );
}
