
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
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-base font-medium text-white/90">{projectName}</h2>
        <h1 className="text-2xl font-bold text-white">{nftName}</h1>
      </div>
      
      <div className="h-px bg-white/10" />

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-white/80" />
          <span className="text-base font-bold text-white">{xpReward} XP</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-white">{neftReward} NEFT</span>
        </div>
      </div>

      <div className="h-px bg-white/10" />

      <div className="space-y-3">
        {startTime && (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-white/60" />
            <span className="text-sm text-white/60">
              Start Date: {formatDate(startTime)}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-white/60" />
          <span className="text-sm text-white/60">
            End Date: {formatDate(endTime)}
          </span>
        </div>
      </div>

      <div className="h-px bg-white/10" />

      {rarityDistribution && (
        <>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">Rarities</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/80">Legendary</span>
                <span className="text-sm text-white/60 ml-4">{rarityDistribution.legendary}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/80">Rare</span>
                <span className="text-sm text-white/60 ml-4">{rarityDistribution.rare}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/80">Common</span>
                <span className="text-sm text-white/60 ml-4">{rarityDistribution.common}%</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />
        </>
      )}

      <div className="space-y-3">
        <h3 className="text-base font-semibold text-white">Description</h3>
        <p className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">
          {description}
        </p>
      </div>
    </div>
  );
};
