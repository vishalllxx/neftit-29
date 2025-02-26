import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { BurnProgress } from "@/components/profile/BurnProgress";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy,
  LogOut, 
  Award,
  Sparkles,
  Wallet,
  Share2
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWallet } from "@/components/wallet/WalletProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const Profile = () => {
  const { disconnect } = useWallet();
  const navigate = useNavigate();
  
  const [profileData, setProfileData] = useState(() => ({
    username: sessionStorage.getItem("username") || localStorage.getItem("username") || "Username",
    totalXP: 380,
    neftPoints: 3,
    level: 5,
    rank: "Explorer",
    walletAddress: "0x1234...5678",
    avatar: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=1000",
    stats: {
      totalNFTs: 12,
      upgradableNFTs: 5,
      burnedNFTs: 3,
      questsCompleted: 8
    },
    burnProgress: {
      commonCount: 3,
      platinumCount: 2,
      silverCount: 1,
      goldCount: 0
    }
  }));

  useEffect(() => {
    const newUsername = sessionStorage.getItem("username") || localStorage.getItem("username") || "Username";
    if (newUsername !== profileData.username) {
      setProfileData(prev => ({ ...prev, username: newUsername }));
    }
  }, [profileData.username]);

  const handleLogout = useCallback(() => {
    disconnect();
    localStorage.setItem("isAuthenticated", "false");
    toast.success("Logged out successfully");
    navigate("/auth");
  }, [disconnect, navigate]);

  const handleEditProfile = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const handleShare = useCallback(() => {
    toast.success("Profile sharing coming soon!");
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="fixed inset-0 bg-[#111111] pointer-events-none" />
      <StarryBackground />
      <MainNav />
      
      <div className="container mx-auto px-4 pt-24 pb-12 space-y-8 relative">
        <motion.div {...fadeInUp}>
          <ProfileHeader 
            username={profileData.username}
            xp={profileData.totalXP}
            neftPoints={profileData.neftPoints}
            level={profileData.level}
            rank={profileData.rank}
            walletAddress={profileData.walletAddress}
            avatar={profileData.avatar}
            onEditProfile={handleEditProfile}
          />
        </motion.div>

        <motion.div {...fadeInUp}>
          <ProfileStats {...profileData.stats} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div {...fadeInUp}>
            <BurnProgress {...profileData.burnProgress} />
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="glass">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="w-full gap-2" variant="outline">
                    <Wallet className="w-4 h-4" />
                    View Collection
                  </Button>
                  <Button className="w-full gap-2" variant="outline">
                    <Trophy className="w-4 h-4" />
                    Start Quest
                  </Button>
                  <Button className="w-full gap-2" variant="outline">
                    <Award className="w-4 h-4" />
                    Upgrade NFTs
                  </Button>
                  <Button 
                    className="w-full gap-2" 
                    variant="outline"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4" />
                    Share Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div {...fadeInUp}>
          <Tabs defaultValue="nfts" className="w-full">
            <TabsList className="w-full glass grid grid-cols-3">
              <TabsTrigger value="nfts">
                <Award className="h-4 w-4 mr-2" />
                My NFTs
              </TabsTrigger>
              <TabsTrigger value="quests">
                <Trophy className="h-4 w-4 mr-2" />
                Quests
              </TabsTrigger>
              <TabsTrigger value="achievements">
                <Sparkles className="h-4 w-4 mr-2" />
                Achievements
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="nfts">
              <Card className="glass mt-6">
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Award className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Your NFT Collection
                    </h3>
                    <p className="text-white/60">
                      Coming soon - View and manage your NFTs here!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="quests">
              <Card className="glass mt-6">
                <CardContent className="pt-6 text-center">
                  <Trophy className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No Quests Completed Yet</h3>
                  <p className="text-white/60">Start your journey by completing quests and earning rewards!</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements">
              <Card className="glass mt-6">
                <CardContent className="pt-6 text-center">
                  <Sparkles className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No Achievements Yet</h3>
                  <p className="text-white/60">Complete quests and engage with the platform to unlock achievements!</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="flex justify-center"
        >
          <Button 
            variant="destructive" 
            onClick={handleLogout} 
            className="gap-2 hover:bg-destructive/90 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
