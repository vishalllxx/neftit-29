import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Diamond, 
  Wallet, 
  LogOut, 
  Edit, 
  Award,
  Package,
  Medal,
  Sparkles
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWallet } from "@/components/wallet/WalletProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Profile = () => {
  const { address, walletType, disconnect } = useWallet();
  const navigate = useNavigate();
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "Username");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogout = () => {
    disconnect();
    localStorage.setItem("isAuthenticated", "false");
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  const handleEditProfile = () => {
    navigate("/settings");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/95 to-background">
      <StarryBackground />
      <MainNav />
      
      <div className="container mx-auto px-4 pt-24 flex gap-8 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-80 fixed"
        >
          <div className="glass rounded-xl p-8 space-y-8 shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative group">
                <Avatar className="h-32 w-32 ring-4 ring-primary/20 group-hover:ring-primary/30 transition-all duration-300">
                  <AvatarImage src="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=1000" alt="Bored Ape" />
                  <AvatarFallback>BA</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">{username}</h2>
                <p className="text-white/60">Level 5</p>
              </div>
            </div>

            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 glass rounded-lg hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-primary animate-pulse" />
                  <span className="text-white">XP Points</span>
                </div>
                <span className="text-white font-bold">380</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 glass rounded-lg hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <Diamond className="h-5 w-5 text-primary animate-pulse" />
                  <span className="text-white">NEFT</span>
                </div>
                <span className="text-white font-bold">3</span>
              </motion.div>

              {address && (
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-4 glass rounded-lg hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Wallet className="h-5 w-5 text-primary" />
                    <span className="text-white">Wallet</span>
                  </div>
                  <p className="text-white/60 text-sm break-all font-mono">{address}</p>
                </motion.div>
              )}
            </div>

            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full gap-2 hover:bg-primary/10 transition-colors"
                onClick={handleEditProfile}
              >
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleLogout} 
                className="w-full gap-2 hover:bg-destructive/90 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="ml-96 flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-xl p-6 space-y-4 shadow-2xl shadow-primary/5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-bold">Progress</h3>
                <span className="text-white/80">380 / 499 XP</span>
              </div>
              <Progress value={76} className="h-3" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Tabs defaultValue="completed" className="w-full">
              <TabsList className="w-full bg-black/40 rounded-xl">
                <TabsTrigger value="completed" className="flex-1 text-white data-[state=active]:bg-primary/20 rounded-xl transition-colors">
                  <Trophy className="h-4 w-4 mr-2" />
                  Completed Quests
                </TabsTrigger>
                <TabsTrigger value="nfts" className="flex-1 text-white data-[state=active]:bg-primary/20 rounded-xl transition-colors">
                  <Package className="h-4 w-4 mr-2" />
                  NFTs Minted
                </TabsTrigger>
              </TabsList>
              <TabsContent value="completed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="glass hover:bg-white/5 transition-colors duration-300">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">No Quests Yet</CardTitle>
                        <Award className="h-4 w-4 text-primary" />
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-white/60">Complete your first quest to earn XP and rewards!</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>
              <TabsContent value="nfts">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="glass hover:bg-white/5 transition-colors duration-300">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">No NFTs Yet</CardTitle>
                        <Medal className="h-4 w-4 text-primary" />
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-white/60">Mint your first NFT to start your collection!</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="glass hover:bg-white/5 transition-all duration-300 shadow-2xl shadow-primary/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                    Achievements
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/60">Coming soon! Track your achievements and compare with others.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
