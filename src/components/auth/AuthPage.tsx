
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { DynamicText } from "./DynamicText";
import { SocialLogins } from "./SocialLogins";
import { WalletConnections } from "./WalletConnections";
import StarryBackground from "@/components/layout/StarryBackground";

export function AuthPage() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const dynamicTexts = [
    "NFTs",
    "REWARDS",
    "FUTURE"
  ];

  const handleLogin = (method: string) => {
    localStorage.setItem("isAuthenticated", "true");
    toast({
      title: "Login Successful",
      description: `Logged in with ${method}`,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center relative overflow-hidden">
      <StarryBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 opacity-50"
        style={{
          maskImage: 'radial-gradient(circle at center, black, transparent)'
        }}
      />
      
      {/* Main content */}
      <div className="relative w-full max-w-md mx-auto p-6 space-y-8">
        {/* Logo and Title */}
        <div className="text-center space-y-2 animate-fade-in">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent">
            Welcome Back
          </h1>
          <div className="flex items-center justify-center gap-2 text-2xl font-medium">
            <span className="text-foreground/90">collect</span>
            <DynamicText texts={dynamicTexts} />
          </div>
        </div>

        {/* Login Form */}
        <div className="glass-card p-8 animate-scale-in backdrop-blur-xl bg-white/5 border border-white/10">
          {/* Social Logins */}
          <SocialLogins onLogin={handleLogin} />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-foreground/10"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background/60 px-2 text-foreground/60">OR</span>
            </div>
          </div>

          {/* Wallet Connections */}
          <WalletConnections onConnect={handleLogin} />

          {/* Terms */}
          <p className="text-center text-sm text-foreground/60 mt-6">
            By logging in, you agree to our{" "}
            <Button variant="link" className="text-primary hover:text-primary/80 p-0">
              Terms of Service
            </Button>
            {" & "}
            <Button variant="link" className="text-primary hover:text-primary/80 p-0">
              Privacy Policy
            </Button>
          </p>
        </div>

        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="absolute top-4 right-4 text-foreground/70 hover:text-foreground"
          onClick={() => navigate("/")}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
