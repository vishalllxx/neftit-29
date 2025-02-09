
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
  category,
  subcategory,
  neftReward,
  endTime = "1d left"
}: NFTCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden bg-[#1A1F2C] border-none rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white/90">
              {category} → {subcategory}
            </span>
          </div>
        </div>

        {/* Overlay on Hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Title and Project Name */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white/90">{name}</h3>
          <p className="text-sm text-gray-400">{projectName}</p>
        </div>

        {/* Price and Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-white font-semibold">{neftReward} NEFT</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{endTime}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
