
import { Trophy, Star, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileHeaderProps {
  username: string;
  xp: number;
  neftPoints: number;
  level: number;
  avatar?: string;
  onEditProfile: () => void;
}

export function ProfileHeader({ 
  username, 
  xp, 
  neftPoints, 
  level,
  avatar,
  onEditProfile 
}: ProfileHeaderProps) {
  return (
    <div className="glass rounded-lg p-6 relative">
      <Button 
        onClick={onEditProfile}
        className="absolute top-4 right-4 gap-2"
        variant="outline"
      >
        <Edit className="h-4 w-4" />
        Edit Profile
      </Button>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <Avatar className="h-24 w-24 ring-4 ring-primary/20 group-hover:ring-primary/30 transition-all duration-300">
            <AvatarImage 
              src={avatar || "/placeholder.svg"} 
              alt={username} 
              className="object-cover"
            />
            <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 right-0 bg-primary text-white text-xs px-2 py-1 rounded-full">
            Lvl {level}
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            {username}
          </h1>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-white/90">{xp} XP</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-white/90">{neftPoints} NEFT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
