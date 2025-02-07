
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { ProfileButton } from "@/components/profile/ProfileButton";
import { ProfileBox } from "@/components/profile/ProfileBox";
import { NavigationItems } from "@/components/navigation/NavigationItems";

export function MainNav() {
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl px-4 py-3 fade-in">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 lg:gap-8">
          <Link 
            to="/" 
            className="text-3xl font-bold bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-purple-500/90 bg-clip-text text-transparent" 
            style={{ 
              padding: '0.2em 0',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            NEFTIT
          </Link>
          
          {!isMobile && (
            <>
              <Link to="/discover" className="text-white/80 hover:text-white transition-colors">
                Discover
              </Link>
              <Link to="/streaks" className="text-white/80 hover:text-white transition-colors">
                Streaks
              </Link>
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

          <Sheet>
            <SheetTrigger>
              <ProfileButton />
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-xl border-l border-white/10"
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
