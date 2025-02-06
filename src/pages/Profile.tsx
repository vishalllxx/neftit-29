
import { MainNav } from "@/components/layout/MainNav";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Diamond, Trophy, Wallet, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWallet } from "@/components/wallet/WalletProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
    <div className="min-h-screen bg-black">
      <MainNav />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">User Profile</h1>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full">
                <Trophy className="h-4 w-4 text-primary" />
                <span className="text-white">380 XPs</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full">
                <Diamond className="h-4 w-4 text-primary" />
                <span className="text-white">3 NEFT</span>
              </div>
              {address && (
                <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full">
                  <Wallet className="h-4 w-4 text-primary" />
                  <span className="text-white">{address}</span>
                </div>
              )}
            </div>
          </div>

          <div className="w-full max-w-md space-y-2">
            <div className="flex justify-between text-white">
              <span>Level 5</span>
              <span>380 XPs</span>
            </div>
            <Progress value={66} className="h-2" />
            <div className="flex justify-between text-sm text-white/60">
              <span>300</span>
              <span>499</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="gap-2">
              Edit Profile
            </Button>
            <Button variant="destructive" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>

          <Tabs defaultValue="completed" className="w-full max-w-2xl">
            <TabsList className="w-full bg-black/40">
              <TabsTrigger value="completed" className="flex-1 text-white">
                Completed Quests
              </TabsTrigger>
              <TabsTrigger value="nfts" className="flex-1 text-white">
                NFTs Minted
              </TabsTrigger>
            </TabsList>
            <TabsContent value="completed">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="glass p-4 rounded-lg text-center">
                  <p className="text-white">No completed quests yet</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="nfts">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="glass p-4 rounded-lg text-center">
                  <p className="text-white">No NFTs minted yet</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
