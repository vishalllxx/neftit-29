import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy,
  LogOut, 
  Award,
  Twitter,
  MessageCircle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWallet } from "@/components/wallet/WalletProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

// Mock completed tasks data (this will later come from Supabase)
const completedTasks = [
  {
    id: "1",
    projectName: "Cosmic Dreamer",
    title: "Follow Twitter",
    completedAt: "2024-02-20",
    type: "twitter" as const,
    xpEarned: 50
  },
  {
    id: "2",
    projectName: "Space Voyager",
    title: "Join Discord",
    completedAt: "2024-02-19",
    type: "discord" as const,
    xpEarned: 30
  }
];

const Profile = () => {
  console.log("Profile component re-rendered!");
  
  const { disconnect } = useWallet();
  const navigate = useNavigate();
  
  // Use useState to prevent flickering from storage reads
  const [profileData, setProfileData] = useState(() => ({
    username: sessionStorage.getItem("username") || localStorage.getItem("username") || "Username",
    totalXP: 380,
    neftPoints: 3,
    level: 5,
    avatar: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=1000"
  }));

  // Update username if it changes in storage
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

  // Animation configuration
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/95 to-background">
      <StarryBackground />
      <MainNav />
      
      <div className="container mx-auto px-4 pt-24 space-y-8">
        <motion.div {...fadeInUp}>
          <ProfileHeader 
            username={profileData.username}
            xp={profileData.totalXP}
            neftPoints={profileData.neftPoints}
            level={profileData.level}
            avatar={profileData.avatar}
            onEditProfile={handleEditProfile}
          />
        </motion.div>

        <motion.div 
          layoutId="progress-section"
          {...fadeInUp}
        >
          <div className="glass rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Progress to Next Level
              </h3>
              <span className="text-white/80">{profileData.totalXP} / 500 XP</span>
            </div>
            <Progress value={(profileData.totalXP / 500) * 100} className="h-2" />
          </div>
        </motion.div>

        <motion.div
          layoutId="tabs-section"
          {...fadeInUp}
        >
          <Tabs defaultValue="completed" className="w-full">
            <TabsList className="w-full glass">
              <TabsTrigger value="completed" className="flex-1 data-[state=active]:bg-primary/20">
                <Trophy className="h-4 w-4 mr-2" />
                Completed Quests
              </TabsTrigger>
              <TabsTrigger value="nfts" className="flex-1 data-[state=active]:bg-primary/20">
                <Award className="h-4 w-4 mr-2" />
                NFTs Minted
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="completed">
              <div className="grid gap-4 mt-6">
                {completedTasks.map((task) => (
                  <Card key={task.id} className="glass hover:bg-white/5 transition-colors duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {task.type === 'twitter' ? (
                            <Twitter className="h-4 w-4 text-primary" />
                          ) : (
                            <MessageCircle className="h-4 w-4 text-primary" />
                          )}
                          <div>
                            <p className="font-medium text-white">{task.title}</p>
                            <p className="text-sm text-white/60">{task.projectName}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-primary">+{task.xpEarned} XP</p>
                          <p className="text-sm text-white/60">{task.completedAt}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="nfts">
              <Card className="glass mt-6">
                <CardContent className="pt-6">
                  <p className="text-center text-white/60">No NFTs minted yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          layoutId="achievements-section"
          {...fadeInUp}
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Award className="h-5 w-5 text-primary" />
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  Achievements
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/60">Coming soon! Track your achievements and compare with others.</p>
            </CardContent>
          </Card>
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
