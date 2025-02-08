
import { Award, Gift, Bookmark, LogOut, Clock, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function NavigationItems() {
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  
  const handleComingSoon = (feature: string) => {
    toast.info(`${feature} coming soon!`);
  };

  const menuItems = [
    { 
      name: "Activity", 
      icon: <Clock className="h-4 w-4" />,
      path: "/activity"
    },
    { 
      name: "Achievements", 
      icon: <Award className="h-4 w-4" />,
      badge: "New",
      onClick: () => handleComingSoon("Achievements")
    },
    { 
      name: "Refer and Earn", 
      icon: <Gift className="h-4 w-4" />,
      onClick: () => setIsReferralOpen(true)
    },
    { 
      name: "Saved", 
      icon: <Bookmark className="h-4 w-4" />,
      path: "/saved"
    },
    { 
      name: "Following", 
      icon: <UserCheck className="h-4 w-4" />,
      path: "/following"
    }
  ];

  return (
    <>
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          item.onClick ? (
            <button
              key={index}
              onClick={item.onClick}
              className="flex w-full items-center gap-3 px-4 py-2 text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto text-xs bg-primary px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ) : (
            <Link
              key={index}
              to={item.path || "#"}
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto text-xs bg-primary px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        ))}
      </div>

      <Dialog open={isReferralOpen} onOpenChange={setIsReferralOpen}>
        <DialogContent className="sm:max-w-[425px] bg-[#121212] text-white border-white/10">
          <DialogHeader>
            <DialogTitle>Refer & Earn</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-black/40">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-white/60">Total Referrals</span>
                <span className="text-lg font-medium">12</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-white/60">Your Referral Link</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value="https://neftit.com/ref/vishal5120"
                    readOnly
                    className="flex-1 bg-black/40 border border-white/10 rounded px-3 py-1 text-sm"
                  />
                  <Button 
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText("https://neftit.com/ref/vishal5120");
                      toast.success("Referral link copied!");
                    }}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
