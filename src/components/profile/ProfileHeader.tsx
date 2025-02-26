
import { Trophy, Star, Edit, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { memo } from "react";

interface ProfileHeaderProps {
  username: string;
  xp: number;
  neftPoints: number;
  level: number;
  rank: string;
  walletAddress: string;
  avatar?: string;
  onEditProfile: () => void;
}

const ProfileHeaderComponent = ({ 
  username, 
  xp, 
  neftPoints, 
  level,
  rank,
  walletAddress,
  avatar,
  onEditProfile 
}: ProfileHeaderProps) => {
  return (
    <div className="glass rounded-lg p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-30" />
      
      <Button 
        onClick={onEditProfile}
        className="absolute top-4 right-4 gap-2"
        variant="outline"
      >
        <Edit className="h-4 w-4" />
        Edit Profile
      </Button>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Avatar className="h-24 w-24 ring-4 ring-primary/20 group-hover:ring-primary/30 transition-all duration-300">
              <AvatarImage 
                src={avatar || "/placeholder.svg"} 
                alt={username} 
                className="object-cover"
              />
              <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </motion.div>
          <div className="absolute -bottom-1 right-0 bg-primary text-white text-xs px-2 py-1 rounded-full">
            Lvl {level}
          </div>
        </div>

        <div className="space-y-3 flex-1">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              {username}
            </h1>
            <div className="flex items-center gap-2 text-white/60">
              <Wallet className="w-4 h-4" />
              <span className="text-sm font-mono">{walletAddress}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-white/90">{xp} XP</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-white/90">{neftPoints} NEFT</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 rounded-full bg-white/10 text-xs font-medium text-white/80">
                {rank}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfileHeader = memo(ProfileHeaderComponent, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
