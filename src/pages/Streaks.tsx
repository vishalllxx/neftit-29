
import { MainNav } from "@/components/layout/MainNav";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Calendar, Check } from "lucide-react";
import StarryBackground from "@/components/layout/StarryBackground";
import { LeaderboardCard } from "@/components/streaks/LeaderboardCard";
import { RewardCard } from "@/components/streaks/RewardCard";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Streaks = () => {
  const [currentStreak, setCurrentStreak] = useState(() => {
    const saved = localStorage.getItem("currentStreak");
    return saved ? JSON.parse(saved) : { count: 0, lastClaim: null };
  });
  
  const [canClaim, setCanClaim] = useState(true);

  useEffect(() => {
    if (currentStreak.lastClaim) {
      const lastClaimDate = new Date(currentStreak.lastClaim).setHours(0, 0, 0, 0);
      const today = new Date().setHours(0, 0, 0, 0);
      setCanClaim(lastClaimDate < today);
    }
  }, [currentStreak.lastClaim]);

  const handleClaim = () => {
    const now = new Date();
    setCurrentStreak(prev => {
      const newStreak = {
        count: prev.count + 1,
        lastClaim: now.toISOString()
      };
      localStorage.setItem("currentStreak", JSON.stringify(newStreak));
      return newStreak;
    });
    setCanClaim(false);
    toast.success("🎉 Daily streak claimed!");
  };

  const rewards = [
    {
      days: 7,
      description: "Earn 500 XP and exclusive profile badge",
      isLocked: currentStreak.count < 7,
      progress: Math.min((currentStreak.count / 7) * 100, 100)
    },
    {
      days: 15,
      description: "Unlock rare NFT and 1000 XP",
      isLocked: currentStreak.count < 15,
      progress: Math.min((currentStreak.count / 15) * 100, 100)
    },
    {
      days: 30,
      description: "Legendary NFT and 2500 XP",
      isLocked: currentStreak.count < 30,
      progress: Math.min((currentStreak.count / 30) * 100, 100)
    }
  ];

  const leaders = [
    { username: "CryptoKing", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1", streakCount: 45, position: 1 },
    { username: "NFTMaster", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2", streakCount: 42, position: 2 },
    { username: "BlockchainPro", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3", streakCount: 38, position: 3 },
    { username: "TokenWizard", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4", streakCount: 35, position: 4 },
    { username: "Web3Expert", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5", streakCount: 33, position: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#111111]">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 relative">
        <div className="pt-32 pb-16 max-w-6xl mx-auto space-y-12">
          {/* Current Streak Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Daily Streaks
            </h1>
            <div className="glass backdrop-blur-xl bg-white/5 border-white/10 p-8 rounded-xl space-y-6">
              <div className="flex items-center justify-center gap-2 text-2xl font-semibold text-white">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <span>You're on a {currentStreak.count}-day streak! 🔥</span>
              </div>
              
              <Progress value={((currentStreak.count % 7) / 7) * 100} className="h-2" />
              
              <Button
                className="w-full sm:w-auto px-8 py-6 text-lg font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
                onClick={handleClaim}
                disabled={!canClaim}
              >
                {canClaim ? (
                  "Claim Today's Streak"
                ) : (
                  <span className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Streak Claimed for Today
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Streak Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <RewardCard key={reward.days} reward={reward} />
              ))}
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Top Streakers</h2>
            <LeaderboardCard leaders={leaders} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Streaks;
