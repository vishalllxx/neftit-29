
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { Sun, Moon, Rocket } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { ProfileButton } from "@/components/profile/ProfileButton";
import { ProfileBox } from "@/components/profile/ProfileBox";
import { NavigationItems } from "@/components/navigation/NavigationItems";

export function MainNav() {
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 glass px-4 py-3 fade-in">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 lg:gap-8">
          <Link to="/" className="text-3xl font-bold" style={{ background: 'linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', padding: '0.2em 0' }}>
            NEFTIT
          </Link>
          
          {!isMobile && (
            <Link to="/discover" className="text-white/80 hover:text-white transition-colors">
              Discover
            </Link>
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

          <Button
            variant="outline"
            className="gap-2 hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/streaks')}
          >
            <Rocket className="h-4 w-4 animate-pulse" />
            <span className="hidden sm:inline">Streaks</span>
          </Button>

          <Sheet>
            <SheetTrigger>
              <ProfileButton />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#121212] border-l border-white/10">
              <ProfileBox />
              <NavigationItems />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
