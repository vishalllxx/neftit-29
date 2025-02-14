
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { useWallet } from "@/components/wallet/WalletProvider";
import { 
  Wallet, 
  ImageIcon, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight, 
  Ban,
  Coins,
  AlertTriangle,
  Check,
  Timer
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface NFT {
  id: string;
  image: string;
  stakedAt?: string;
  earnedCoins?: number;
}

const Staking = () => {
  const { address } = useWallet();
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [isApproving, setIsApproving] = useState(false);
  const [isStaking, setIsStaking] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);
  const [isCollecting, setIsCollecting] = useState(false);

  // Mock data
  const stats = {
    totalNFTs: 10,
    stakedNFTs: 5,
    earnedCoins: 1234.56,
    availableToClaim: 567.89
  };

  const unstakedNFTs: NFT[] = [
    { id: "NFT #1", image: "https://picsum.photos/200/200?1" },
    { id: "NFT #2", image: "https://picsum.photos/200/200?2" },
    { id: "NFT #3", image: "https://picsum.photos/200/200?3" },
  ];

  const stakedNFTs: NFT[] = [
    { id: "NFT #4", image: "https://picsum.photos/200/200?4", stakedAt: "2024-03-15", earnedCoins: 123.45 },
    { id: "NFT #5", image: "https://picsum.photos/200/200?5", stakedAt: "2024-03-14", earnedCoins: 98.76 },
  ];

  const handleApprove = (nft: NFT) => {
    setIsApproving(true);
    setTimeout(() => {
      toast.success(`${nft.id} approved for staking!`);
      setIsApproving(false);
    }, 2000);
  };

  const handleStake = (nft: NFT) => {
    setIsStaking(true);
    setTimeout(() => {
      toast.success(`Successfully staked ${nft.id}!`);
      setIsStaking(false);
    }, 2000);
  };

  const handleUnstake = (nft: NFT) => {
    setIsUnstaking(true);
    setTimeout(() => {
      toast.success(`Successfully unstaked ${nft.id}!`);
      setIsUnstaking(false);
    }, 2000);
  };

  const handleCollect = (nft: NFT) => {
    setIsCollecting(true);
    setTimeout(() => {
      toast.success(`Rewards collected for ${nft.id}!`);
      setIsCollecting(false);
    }, 2000);
  };

  const handleEmergencyUnstake = () => {
    toast.warning("Emergency unstake initiated!");
  };

  const handleClaimAll = () => {
    toast.success("All rewards claimed successfully!");
  };

  return (
    <div className="min-h-screen bg-[#111111]">
      <StarryBackground />
      <MainNav />
      
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-8 relative">
        {/* Header & Stats */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            NFT Staking
          </h1>
          <div className="flex items-center gap-3 glass backdrop-blur-xl bg-white/5 border-white/10 px-4 py-2 rounded-lg">
            <Wallet className="w-4 h-4 text-purple-400" />
            <span className="text-white/80">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-4">
            <div className="space-y-1">
              <p className="text-sm text-white/60">Total NFTs</p>
              <p className="text-2xl font-bold text-white">{stats.totalNFTs}</p>
            </div>
          </Card>
          <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-4">
            <div className="space-y-1">
              <p className="text-sm text-white/60">Staked NFTs</p>
              <p className="text-2xl font-bold text-white">{stats.stakedNFTs}</p>
            </div>
          </Card>
          <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-4">
            <div className="space-y-1">
              <p className="text-sm text-white/60">Earned Coins</p>
              <p className="text-2xl font-bold text-white">{stats.earnedCoins}</p>
            </div>
          </Card>
          <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-4">
            <div className="space-y-1">
              <p className="text-sm text-white/60">Available to Claim</p>
              <p className="text-2xl font-bold text-white">{stats.availableToClaim}</p>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleClaimAll}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-green-500/25 transition-all duration-300"
          >
            <Coins className="w-4 h-4 mr-2" />
            Claim All
          </Button>
          <Button
            onClick={handleEmergencyUnstake}
            variant="destructive"
            className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-lg hover:shadow-red-500/25 transition-all duration-300"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Emergency Unstake
          </Button>
        </div>

        {/* Unstaked NFTs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Available to Stake</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {unstakedNFTs.map((nft) => (
              <Card key={nft.id} className="glass backdrop-blur-xl bg-white/5 border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300">
                <img src={nft.image} alt={nft.id} className="w-full aspect-square object-cover" />
                <div className="p-4 space-y-4">
                  <h3 className="text-lg font-medium text-white">{nft.id}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={() => handleApprove(nft)}
                      variant="outline"
                      className="w-full border-white/10 text-white hover:bg-white/10"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleStake(nft)}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Stake
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Staked NFTs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Currently Staked</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stakedNFTs.map((nft) => (
              <Card key={nft.id} className="glass backdrop-blur-xl bg-white/5 border-white/10 overflow-hidden">
                <img src={nft.image} alt={nft.id} className="w-full aspect-square object-cover" />
                <div className="p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white">{nft.id}</h3>
                    <div className="flex items-center gap-2 text-white/60">
                      <Timer className="w-4 h-4" />
                      <span>{nft.stakedAt}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Coins className="w-4 h-4 text-yellow-500" />
                    <span>{nft.earnedCoins} Coins Earned</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={() => handleUnstake(nft)}
                      variant="outline"
                      className="w-full border-white/10 text-white hover:bg-white/10"
                    >
                      <ArrowDownRight className="w-4 h-4 mr-2" />
                      Unstake
                    </Button>
                    <Button
                      onClick={() => handleCollect(nft)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    >
                      <Coins className="w-4 h-4 mr-2" />
                      Collect
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Staking;
