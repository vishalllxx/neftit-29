
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleDollarSign, ArrowRightLeft, Receipt, Clock, Filter, Search, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Activity = () => {
  const [filter, setFilter] = useState<'all' | 'personal' | 'global'>('all');
  
  // Mock data for demonstration
  const activities = [
    {
      id: 1,
      type: "burn",
      username: "CryptoWhale",
      item: "5 Common NFTs → 1 Platinum NFT",
      price: "---",
      date: "2024-02-20",
      icon: <ArrowRightLeft className="h-4 w-4 text-orange-500" />,
    },
    {
      id: 2,
      type: "upgrade",
      username: "NFTMaster",
      item: "Platinum NFT → Silver NFT",
      price: "---",
      date: "2024-02-19",
      icon: <ArrowRightLeft className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 3,
      type: "quest",
      username: "Web3Explorer",
      item: "Completed 'Social Media Quest'",
      price: "Rare NFT",
      date: "2024-02-18",
      icon: <Trophy className="h-4 w-4 text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/95 to-background">
      <StarryBackground />
      <MainNav />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white">Activity Center</h1>
            <p className="text-lg text-gray-400">Track your journey in the NEFTIT ecosystem</p>
          </motion.div>

          {/* Filter Section */}
          <Card className="glass border-white/10">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  <div className="flex gap-2">
                    <Button 
                      variant={filter === 'all' ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setFilter('all')}
                      className="text-sm"
                    >
                      All Activity
                    </Button>
                    <Button 
                      variant={filter === 'personal' ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setFilter('personal')}
                      className="text-sm"
                    >
                      My Activity
                    </Button>
                    <Button 
                      variant={filter === 'global' ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setFilter('global')}
                      className="text-sm"
                    >
                      Global
                    </Button>
                  </div>
                </div>
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search activities..." 
                    className="pl-10 w-full sm:w-[250px] bg-white/5"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Clock className="h-5 w-5 text-primary" />
                  Activity History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] w-full rounded-md">
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between p-4 rounded-lg glass hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-full bg-white/5">
                            {activity.icon}
                          </div>
                          <div>
                            <p className="font-medium text-primary-foreground">
                              {activity.username}
                            </p>
                            <p className="text-sm text-white/60">{activity.item}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-white/80">{activity.price}</p>
                          <p className="text-sm text-white/60">{activity.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              variant="outline" 
              className="bg-white/5 border-white/10 hover:bg-white/10"
            >
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              Burn & Upgrade NFTs
            </Button>
            <Button 
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-white/10"
            >
              <Trophy className="mr-2 h-4 w-4" />
              Start New Quest
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
