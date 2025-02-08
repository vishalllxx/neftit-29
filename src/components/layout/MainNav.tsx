
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { ProfileButton } from "@/components/profile/ProfileButton";
import { ProfileBox } from "@/components/profile/ProfileBox";
import { NavigationItems } from "@/components/navigation/NavigationItems";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function MainNav() {
  const { isMobile } = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-3 backdrop-blur-lg bg-background/80 border-b border-border/5 transition-all duration-300 ease-in-out fade-in">
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
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 animate-fade-in" />
                ) : (
                  <Moon className="h-5 w-5 animate-fade-in" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle theme</TooltipContent>
          </Tooltip>

          <Sheet>
            <SheetTrigger asChild>
              <div className="scale-in">
                <ProfileButton />
              </div>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] bg-black/5 backdrop-blur-xl border-none transition-transform duration-300"
            >
              <ProfileBox />
              <NavigationItems />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

