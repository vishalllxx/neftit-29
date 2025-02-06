import { MainNav } from "@/components/layout/MainNav";
import { StarryBackground } from "@/components/layout/StarryBackground";
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
  Medal
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWallet } from "@/components/wallet/WalletProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  const { address, walletType, disconnect } = useWallet();
  const navigate = useNavigate();

  const handleLogout = () => {
    disconnect();
    localStorage.setItem("isAuthenticated", "false");
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  return (
    <div className="min-h-screen">
      <StarryBackground />
      <MainNav />
      <div className="container mx-auto px-4 pt-24 flex gap-8 relative">
        {/* Left Sidebar */}
        <div className="w-80 fixed">
          <div className="glass rounded-lg p-8 space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <Avatar className="h-32 w-32 ring-2 ring-primary/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-white">Username</h2>
                <p className="text-white/60">Level 5</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 glass rounded-lg">
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span className="text-white">XP Points</span>
                </div>
                <span className="text-white font-bold">380</span>
              </div>

              <div className="flex items-center justify-between p-4 glass rounded-lg">
                <div className="flex items-center gap-3">
                  <Diamond className="h-5 w-5 text-primary" />
                  <span className="text-white">NEFT</span>
                </div>
                <span className="text-white font-bold">3</span>
              </div>

              {address && (
                <div className="p-4 glass rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Wallet className="h-5 w-5 text-primary" />
                    <span className="text-white">Wallet</span>
                  </div>
                  <p className="text-white/60 text-sm break-all">{address}</p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
              <Button variant="destructive" onClick={handleLogout} className="w-full gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-96 flex-1 space-y-8">
          <div className="glass rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl text-white">Progress</h3>
              <span className="text-white">380 / 499 XP</span>
            </div>
            <Progress value={76} className="h-3" />
          </div>

          <Tabs defaultValue="completed" className="w-full">
            <TabsList className="w-full bg-black/40">
              <TabsTrigger value="completed" className="flex-1 text-white">
                <Trophy className="h-4 w-4 mr-2" />
                Completed Quests
              </TabsTrigger>
              <TabsTrigger value="nfts" className="flex-1 text-white">
                <Package className="h-4 w-4 mr-2" />
                NFTs Minted
              </TabsTrigger>
            </TabsList>
            <TabsContent value="completed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card className="glass">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">No Quests Yet</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Complete your first quest to earn XP and rewards!</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="nfts">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card className="glass">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">No NFTs Yet</CardTitle>
                    <Medal className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Mint your first NFT to start your collection!</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Coming soon! Track your achievements and compare with others.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
