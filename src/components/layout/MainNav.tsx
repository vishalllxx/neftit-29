
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
  const { isMobile } = useIsMobile();

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-3 backdrop-blur-lg bg-background/80 border-b border-border/5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 lg:gap-8">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-primary/90 via-purple-500/90 to-accent/90 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            style={{ 
              padding: '0.2em 0',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            NEFTIT
          </Link>
          
          {!isMobile && (
            <div className="flex items-center gap-6 animate-fade-in">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to="/discover" 
                    className="text-white/80 hover:text-white transition-colors hover:scale-105 transform duration-300"
                  >
                    Discover
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Explore NFT collections</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to="/streaks" 
                    className="text-white/80 hover:text-white transition-colors hover:scale-105 transform duration-300"
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
                  className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right"
                className="w-[280px] sm:w-[300px] bg-background/95 backdrop-blur-xl border-none"
              >
                <div className="flex flex-col space-y-4 py-4">
                  <Link 
                    to="/discover" 
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-foreground/10"
                  >
                    Discover
                  </Link>
                  <Link 
                    to="/streaks" 
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-foreground/10"
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
                <div className="scale-in">
                  <ProfileButton />
                </div>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] bg-background/95 backdrop-blur-xl border-none"
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
