
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Users, Award, Gift, Bookmark, LogOut, Search, Menu, Sun, Moon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

export function MainNav() {
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  
  const handleComingSoon = (feature: string) => {
    toast.info(`${feature} coming soon!`);
  };

  const menuItems = [
    { 
      name: "Leaderboard", 
      icon: <Users className="h-4 w-4" />,
      onClick: () => handleComingSoon("Leaderboard")
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
      icon: <Users className="h-4 w-4" />,
      path: "/following"
    },
    { 
      name: "Logout", 
      icon: <LogOut className="h-4 w-4" />,
      path: "/logout"
    }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass px-4 py-3 fade-in">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link to="/" className="text-2xl font-bold text-gradient">
              NEFTIT
            </Link>
            
            {!isMobile && (
              <>
                <Link to="/discover" className="text-white/80 hover:text-white transition-colors">
                  Discover
                </Link>
                
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search Creators"
                    className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 w-[280px]"
                  />
                </div>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full transition-colors hover:bg-white/10"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <WalletConnect />

            <Sheet>
              <SheetTrigger asChild>
                {isMobile ? (
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                ) : (
                  <Link to="/profile">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full p-0 h-10 w-10 ring-1 ring-white/20 hover:ring-white/40 transition-all"
                    >
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>VS</AvatarFallback>
                      </Avatar>
                    </Button>
                  </Link>
                )}
              </SheetTrigger>
              <SheetContent className="w-[300px] bg-[#121212] border-l border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Avatar className="h-10 w-10 ring-1 ring-white/20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>VS</AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <h4 className="font-medium">vishal5120</h4>
                  </div>
                </div>
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

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
