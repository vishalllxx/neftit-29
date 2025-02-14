
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { useWallet } from "@/components/wallet/WalletProvider";
import { 
  Wallet, 
  Image as ImageIcon, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight, 
  Trophy, 
  Users, 
  History,
  Timer
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface NFT {
  id: string;
  image: string;
  stakedAt?: string;
}

const Staking = () => {
  const { isConnected, address } = useWallet();
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [isStaking, setIsStaking] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  // Mock data
  const walletNFTs: NFT[] = [
    { id: "NFT #1", image: "https://picsum.photos/200/200?1" },
    { id: "NFT #2", image: "https://picsum.photos/200/200?2" },
    { id: "NFT #3", image: "https://picsum.photos/200/200?3" },
  ];

  const stakedNFTs: NFT[] = [
    { id: "NFT #4", image: "https://picsum.photos/200/200?4", stakedAt: "2024-03-15" },
    { id: "NFT #5", image: "https://picsum.photos/200/200?5", stakedAt: "2024-03-14" },
  ];

  const transactions = [
    { id: 1, nftId: "NFT #1", type: "Stake", date: "2024-03-15", status: "Completed" },
    { id: 2, nftId: "NFT #2", type: "Unstake", date: "2024-03-14", status: "Completed" },
    { id: 3, nftId: "NFT #3", type: "Stake", date: "2024-03-13", status: "Pending" },
  ];

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

  const handleClaim = () => {
    setIsClaiming(true);
    setTimeout(() => {
      toast.success("Rewards claimed successfully!");
      setIsClaiming(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#111111]">
      <StarryBackground />
      <MainNav />
      
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-8 relative">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            Stake Your NFTs
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Stake your NFTs to earn rewards and participate in the ecosystem
          </p>
        </div>

        {!isConnected ? (
          <Card className="max-w-md mx-auto glass backdrop-blur-xl bg-white/5 border-white/10">
            <div className="p-6 text-center space-y-4">
              <p className="text-lg text-white">Connect your wallet to start staking NFTs</p>
              <WalletConnect />
            </div>
          </Card>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Wallet Info */}
            <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <Wallet className="w-5 h-5 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Connected Wallet</h3>
                    <p className="text-white/60">{address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-5 h-5 text-blue-400" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Your NFTs</h3>
                    <p className="text-white/60">{walletNFTs.length} Available</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Available NFTs */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Available to Stake</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {walletNFTs.map((nft) => (
                  <Card key={nft.id} className="glass backdrop-blur-xl bg-white/5 border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300">
                    <img src={nft.image} alt={nft.id} className="w-full aspect-square object-cover" />
                    <div className="p-4 space-y-4">
                      <h3 className="text-lg font-medium text-white">{nft.id}</h3>
                      <Button
                        onClick={() => handleStake(nft)}
                        disabled={isStaking}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                      >
                        <ArrowUpRight className="w-4 h-4 mr-2" />
                        {isStaking ? "Staking..." : "Stake Now"}
                      </Button>
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
                          <Clock className="w-4 h-4" />
                          <span>Staked: {nft.stakedAt}</span>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleUnstake(nft)}
                        disabled={isUnstaking}
                        variant="outline"
                        className="w-full border-white/10 text-white hover:bg-white/10"
                      >
                        <ArrowDownRight className="w-4 h-4 mr-2" />
                        {isUnstaking ? "Unstaking..." : "Unstake"}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats & Rewards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-6">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Total Rewards</h3>
                    <p className="text-2xl font-bold text-white">245.67 NEFT</p>
                  </div>
                </div>
                <Button
                  onClick={handleClaim}
                  disabled={isClaiming}
                  className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                >
                  {isClaiming ? "Claiming..." : "Claim Rewards"}
                </Button>
              </Card>

              <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Total Stakers</h3>
                    <p className="text-2xl font-bold text-white">1,234</p>
                  </div>
                </div>
              </Card>

              <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-6">
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-blue-400" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Total NFTs Staked</h3>
                    <p className="text-2xl font-bold text-white">3,456</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Transaction History */}
            <Card className="glass backdrop-blur-xl bg-white/5 border-white/10">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <History className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-medium text-white">Transaction History</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-white/60">
                        <th className="pb-4">NFT ID</th>
                        <th className="pb-4">Type</th>
                        <th className="pb-4">Date</th>
                        <th className="pb-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="border-t border-white/5">
                          <td className="py-4 text-white">{tx.nftId}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              tx.type === 'Stake' ? 'bg-green-500/20 text-green-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {tx.type}
                            </span>
                          </td>
                          <td className="py-4 text-white">{tx.date}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              tx.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {tx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Staking;
