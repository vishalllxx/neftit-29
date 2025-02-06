
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { Search, Sun, Moon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { ProfileButton } from "@/components/profile/ProfileButton";
import { ProfileBox } from "@/components/profile/ProfileBox";
import { NavigationItems } from "@/components/navigation/NavigationItems";

export function MainNav() {
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  return (
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
              <ProfileButton />
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-[#121212] border-l border-white/10">
              <ProfileBox />
              <NavigationItems />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
