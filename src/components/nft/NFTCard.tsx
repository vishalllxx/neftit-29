
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
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link to={`/project/${id}`} className="block">
      <div className="flex flex-col gap-0 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-200">
        <Card 
          className="group relative aspect-square overflow-hidden rounded-t-lg bg-[#111111] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-full w-full">
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
                src={image}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
            )}
            
            <div 
              className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
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
