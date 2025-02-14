
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { useWallet } from "@/components/wallet/WalletProvider";
import { ChevronRight, Coins, ArrowUpRight, ArrowDownRight, Timer, Trophy, Activity, BarChart3, History } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Staking = () => {
  const { isConnected } = useWallet();
  const [stakeAmount, setStakeAmount] = useState("");
  const [isStaking, setIsStaking] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  // Mock data
  const stakedAmount = "1,234.56";
  const totalRewards = "45.67";
  const apy = "12.5";
  const totalStaked = "789,012.34";
  const totalStakers = "1,234";
  const pendingRewards = "23.45";

  const transactions = [
    { id: 1, date: "2024-03-15", amount: "100.00", type: "Stake", status: "Completed" },
    { id: 2, date: "2024-03-14", amount: "50.00", type: "Unstake", status: "Completed" },
    { id: 3, date: "2024-03-13", amount: "25.00", type: "Claim", status: "Pending" },
  ];

  const handleStake = () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    setIsStaking(true);
    setTimeout(() => {
      toast.success("Successfully staked!");
      setIsStaking(false);
      setStakeAmount("");
    }, 2000);
  };

  const handleUnstake = () => {
    setIsUnstaking(true);
    setTimeout(() => {
      toast.success("Successfully unstaked!");
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
            Stake & Earn
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Stake your tokens to earn rewards and participate in platform governance
          </p>
        </div>

        {!isConnected ? (
          <Card className="max-w-md mx-auto glass backdrop-blur-xl bg-white/5 border-white/10">
            <div className="p-6 text-center space-y-4">
              <p className="text-lg text-white">Connect your wallet to start staking</p>
              <WalletConnect />
            </div>
          </Card>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Staking Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <Coins className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-medium text-white">Your Staked Amount</h3>
                </div>
                <p className="text-2xl font-bold text-white mt-2">{stakedAmount} NEFT</p>
              </Card>

              <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-medium text-white">Total Rewards Earned</h3>
                </div>
                <p className="text-2xl font-bold text-white mt-2">{totalRewards} NEFT</p>
              </Card>

              <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-pink-400" />
                  <h3 className="text-lg font-medium text-white">Current APY</h3>
                </div>
                <p className="text-2xl font-bold text-white mt-2">{apy}%</p>
              </Card>
            </div>

            {/* Stake & Unstake Section */}
            <Card className="glass backdrop-blur-xl bg-white/5 border-white/10">
              <div className="p-6 space-y-6">
                <h3 className="text-xl font-semibold text-white">Stake Tokens</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="number"
                    placeholder="Enter amount to stake"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={handleStake}
                      disabled={isStaking}
                      className="flex-1 sm:flex-none bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      {isStaking ? "Staking..." : "Stake Now"}
                    </Button>
                    <Button
                      onClick={handleUnstake}
                      disabled={isUnstaking}
                      variant="outline"
                      className="flex-1 sm:flex-none border-white/10 text-white hover:bg-white/10"
                    >
                      <ArrowDownRight className="w-4 h-4 mr-2" />
                      {isUnstaking ? "Unstaking..." : "Unstake"}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Live Staking Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-6">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-medium text-white">Total Staked on Platform</h3>
                </div>
                <p className="text-2xl font-bold text-white mt-2">{totalStaked} NEFT</p>
              </Card>

              <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-6">
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-medium text-white">Number of Stakers</h3>
                </div>
                <p className="text-2xl font-bold text-white mt-2">{totalStakers}</p>
              </Card>
            </div>

            {/* Rewards Section */}
            <Card className="glass backdrop-blur-xl bg-white/5 border-white/10">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-lg font-medium text-white">Your Pending Rewards</h3>
                  </div>
                  <p className="text-xl font-bold text-white">{pendingRewards} NEFT</p>
                </div>
                <Button
                  onClick={handleClaim}
                  disabled={isClaiming}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  {isClaiming ? "Claiming..." : "Claim Rewards"}
                </Button>
              </div>
            </Card>

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
                        <th className="pb-4">Date</th>
                        <th className="pb-4">Amount</th>
                        <th className="pb-4">Type</th>
                        <th className="pb-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="border-t border-white/5">
                          <td className="py-4 text-white">{tx.date}</td>
                          <td className="py-4 text-white">{tx.amount} NEFT</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              tx.type === 'Stake' ? 'bg-green-500/20 text-green-400' :
                              tx.type === 'Unstake' ? 'bg-red-500/20 text-red-400' :
                              'bg-blue-500/20 text-blue-400'
                            }`}>
                              {tx.type}
                            </span>
                          </td>
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
