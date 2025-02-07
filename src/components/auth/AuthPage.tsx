
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { DynamicText } from "./DynamicText";
import { SocialLogins } from "./SocialLogins";
import { WalletConnections } from "./WalletConnections";

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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              backgroundColor: 'white',
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative w-full max-w-md mx-auto p-6 space-y-8">
        {/* Logo and Title */}
        <div className="text-center space-y-2 animate-fade-in">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Welcome Back
          </h1>
          <div className="flex items-center justify-center gap-2 text-2xl font-medium">
            <span className="text-white/90">collect</span>
            <DynamicText texts={dynamicTexts} />
          </div>
        </div>

        {/* Login Form */}
        <div className="space-y-6 backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl animate-scale-in">
          {/* Social Logins */}
          <SocialLogins onLogin={handleLogin} />

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-400">OR</span>
            </div>
          </div>

          {/* Wallet Connections */}
          <WalletConnections onConnect={handleLogin} />

          {/* Terms */}
          <p className="text-center text-sm text-gray-400">
            By logging in, you agree to our{" "}
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Terms of Service</a>
            {" & "}
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Privacy Policy</a>
          </p>
        </div>

        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="absolute top-4 right-4 text-white/70 hover:text-white"
          onClick={() => navigate("/")}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
