
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ProfileButton } from "@/components/profile/ProfileButton";
import { ProfileBox } from "@/components/profile/ProfileBox";
import { NavigationItems } from "@/components/navigation/NavigationItems";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function MainNav() {
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-light tracking-wider text-white hover:text-white/90 transition-colors"
          >
            NEFTIT
          </Link>
          
          {!isMobile && (
            <div className="flex items-center gap-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to="/discover" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Discover
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Explore NFT collections</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to="/staking" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Staking
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Stake your NFTs</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to="/streaks" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Streaks
                  </Link>
                </TooltipTrigger>
                <TooltipContent>View your daily streaks</TooltipContent>
              </Tooltip>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right"
                className="w-[280px] sm:w-[300px] bg-[#111111]"
              >
                <div className="flex flex-col space-y-4 py-4">
                  <Link 
                    to="/discover" 
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                  >
                    Discover
                  </Link>
                  <Link 
                    to="/staking" 
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                  >
                    Staking
                  </Link>
                  <Link 
                    to="/streaks" 
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
                  >
                    Streaks
                  </Link>
                </div>
                <div className="mt-8">
                  <ProfileBox />
                  <NavigationItems />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <div className="animate-scale-in">
                  <ProfileButton />
                </div>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] bg-[#111111]"
              >
                <ProfileBox />
                <NavigationItems />
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
}
