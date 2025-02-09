
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
    <Card 
      className="group relative overflow-hidden rounded-lg border-none bg-black/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
        
        {/* Permanent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="space-y-1.5">
          <h3 className="text-base font-semibold text-white tracking-wide truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-400 font-medium truncate">
            {projectName}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-1">
            <span className="text-white font-semibold">
              {neftReward} NEFT
            </span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{endTime}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
