
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { useWallet } from "@/components/wallet/WalletProvider";
import { Coins, Trophy, Timer, Activity, ChartBar, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Staking = () => {
  const { isConnected } = useWallet();
  const [selectedNFT, setSelectedNFT] = useState<string | null>(null);
  
  const mockNFTs = [
    { id: "1", name: "Cyber Punk #1", rarity: "Legendary", apr: "12%", image: "https://images.unsplash.com/photo-1614792221813-42eb6f781a6f" },
    { id: "2", name: "Space Explorer #4", rarity: "Rare", apr: "8%", image: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6" },
    { id: "3", name: "Digital Beast #7", rarity: "Common", apr: "5%", image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032" },
  ];

  const stats = [
    { title: "Total NFTs Staked", value: "1,234", icon: Coins },
    { title: "Total NEFT Distributed", value: "45,678", icon: Trophy },
    { title: "Average Staking Time", value: "45 days", icon: Timer },
    { title: "Current APY", value: "8.5%", icon: ChartBar },
  ];

  const handleStake = () => {
    if (!selectedNFT) {
      toast.error("Please select an NFT to stake");
      return;
    }
    toast.success("NFT staked successfully!");
  };

  const handleUnstake = () => {
    toast.success("NFT unstaked successfully!");
  };

  const handleClaimRewards = () => {
    toast.success("Rewards claimed successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <StarryBackground />
      <MainNav />
      
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-8 relative">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-text">
            NFT Staking
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stake your NFTs to earn NEFT tokens. Higher rarity = Higher rewards
          </p>
        </div>

        {!isConnected ? (
          <Card className="max-w-md mx-auto glass">
            <CardContent className="pt-6 text-center space-y-4">
              <p className="text-lg">Connect your wallet to start staking</p>
              <WalletConnect />
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="glass hover:scale-105 transition-all duration-300">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <stat.icon className="w-5 h-5 text-primary" />
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="stake" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="stake">Stake NFTs</TabsTrigger>
                <TabsTrigger value="mystakes">My Stakes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="stake" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mockNFTs.map((nft) => (
                    <Card 
                      key={nft.id}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedNFT === nft.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedNFT(nft.id)}
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={nft.image} 
                          alt={nft.name}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-1 rounded-full text-xs bg-black/50 backdrop-blur-sm flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {nft.rarity}
                          </span>
                        </div>
                      </div>
                      <CardContent className="pt-4">
                        <h3 className="font-semibold">{nft.name}</h3>
                        <p className="text-sm text-muted-foreground">APR: {nft.apr}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-center gap-4 pt-4">
                  <Button 
                    size="lg"
                    onClick={handleStake}
                    className="gap-2"
                  >
                    <Coins className="w-4 h-4" />
                    Stake Selected NFT
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="mystakes">
                <Card className="glass">
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-4">
                      {mockNFTs.slice(0, 1).map((nft) => (
                        <div key={nft.id} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                          <img 
                            src={nft.image} 
                            alt={nft.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">{nft.name}</h3>
                            <p className="text-sm text-muted-foreground">Staked for: 15 days</p>
                            <Progress value={45} className="h-2 mt-2" />
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Earned NEFT</p>
                            <p className="font-semibold">245.5</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-4">
                      <Button 
                        variant="outline"
                        onClick={handleUnstake}
                        className="gap-2"
                      >
                        <Activity className="w-4 h-4" />
                        Unstake
                      </Button>
                      <Button 
                        onClick={handleClaimRewards}
                        className="gap-2"
                      >
                        <Trophy className="w-4 h-4" />
                        Claim Rewards
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
    </div>
  );
};

export default Staking;
