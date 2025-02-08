
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CircleDollarSign, ArrowRightLeft, Receipt, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Activity = () => {
  // Mock data for demonstration
  const activities = [
    {
      id: 1,
      type: "Purchase",
      item: "Cosmic Dreamer #123",
      price: "0.5 ETH",
      date: "2024-02-20",
      icon: <CircleDollarSign className="h-4 w-4 text-green-500" />,
    },
    {
      id: 2,
      type: "Transfer",
      item: "Space Voyager #45",
      price: "---",
      date: "2024-02-19",
      icon: <ArrowRightLeft className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 3,
      type: "Sale",
      item: "Digital Dreams #78",
      price: "0.8 ETH",
      date: "2024-02-18",
      icon: <Receipt className="h-4 w-4 text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/95 to-background">
      <StarryBackground />
      <MainNav />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
                          <p className="font-medium">{activity.type}</p>
                          <p className="text-sm text-white/60">{activity.item}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{activity.price}</p>
                        <p className="text-sm text-white/60">{activity.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Activity;
