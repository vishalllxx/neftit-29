
import { Award, Calendar } from "lucide-react";

interface NFTInfoProps {
  projectName: string;
  nftName: string;
  xpReward: number;
  neftReward: number;
  startTime?: string;
  endTime: string;
  description: string;
  rarityDistribution?: {
    legendary: number;
    rare: number;
    common: number;
  };
}

export const NFTInfo = ({ 
  projectName, 
  nftName, 
  xpReward, 
  neftReward, 
  startTime, 
  endTime,
  description,
  rarityDistribution 
}: NFTInfoProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-sm font-medium text-white/90">{projectName}</h2>
        <h1 className="text-xl font-bold text-white">{nftName}</h1>
      </div>
      
      <div className="h-px bg-white/10" />

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-white/80" />
          <span className="text-sm font-bold text-white">{xpReward} XP</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-white">{neftReward} NEFT</span>
        </div>
      </div>

      <div className="h-px bg-white/10" />

      <div className="space-y-2">
        {startTime && (
          <div className="flex items-center gap-2">
            <Calendar className="h-3 w-3 text-white/60" />
            <span className="text-xs text-white/60">
              Start Date: {formatDate(startTime)}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Calendar className="h-3 w-3 text-white/60" />
          <span className="text-xs text-white/60">
            End Date: {formatDate(endTime)}
          </span>
        </div>
      </div>

      <div className="h-px bg-white/10" />

      {rarityDistribution && (
        <>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">Rarities</h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-xs text-white/80">Legendary</span>
                <span className="text-xs text-white/60">{rarityDistribution.legendary}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-white/80">Rare</span>
                <span className="text-xs text-white/60">{rarityDistribution.rare}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-white/80">Common</span>
                <span className="text-xs text-white/60">{rarityDistribution.common}%</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />
        </>
      )}

      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-white">Description</h3>
        <p className="text-xs text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
