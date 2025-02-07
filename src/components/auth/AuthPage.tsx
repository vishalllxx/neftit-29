
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";

export function AuthPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const dynamicTexts = [
    "NFTs",
    "REWARDS",
    "FUTURE"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = dynamicTexts[currentTextIndex];
    
    const updateText = () => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          timeout = setTimeout(updateText, 150);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          timeout = setTimeout(updateText, 100);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
        }
      }
    };

    timeout = setTimeout(updateText, 100);
    return () => clearTimeout(timeout);
  }, [currentTextIndex, displayText, isDeleting]);

  const handleLogin = (method: string) => {
    localStorage.setItem("isAuthenticated", "true");
    toast({
      title: "Login Successful",
      description: `Logged in with ${method}`,
    });
    navigate("/");
  };

  const socialLogins = [
    {
      name: "Google",
      icon: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
      onClick: () => handleLogin("Google")
    },
    {
      name: "Discord",
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
      onClick: () => handleLogin("Discord")
    },
    {
      name: "Twitter",
      icon: "https://cdn-icons-png.flaticon.com/128/3670/3670151.png",
      onClick: () => handleLogin("Twitter")
    },
    {
      name: "Telegram",
      icon: "https://cdn-icons-png.flaticon.com/128/2111/2111646.png",
      onClick: () => handleLogin("Telegram")
    }
  ];

  const wallets = [
    {
      name: "Phantom",
      icon: "https://i.imgur.com/IFgaR1p.png",
      onClick: () => handleLogin("Phantom")
    },
    {
      name: "Metamask",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-metamask-2728406-2261817.png",
      onClick: () => handleLogin("Metamask")
    },
    {
      name: "Keplr",
      icon: "https://i.imgur.com/sNfJwAh.png",
      onClick: () => handleLogin("Keplr")
    },
    {
      name: "Trust Wallet",
      icon: "https://i.imgur.com/FZcJZpF.png",
      onClick: () => handleLogin("Trust Wallet")
    },
    {
      name: "All Wallets",
      icon: "https://cdn-icons-png.flaticon.com/128/9329/9329863.png",
      onClick: () => handleLogin("Other Wallet")
    }
  ];

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
            <span className="text-sky-400 min-w-[120px] animate-fade-in">
              {displayText}
            </span>
          </div>
        </div>

        {/* Login Form */}
        <div className="space-y-6 backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl animate-scale-in">
          {/* Social Logins */}
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all border-0 text-white h-12"
              onClick={() => handleLogin("Google")}
            >
              <img src={socialLogins[0].icon} alt="Google" className="w-6 h-6 mr-2" />
              Continue with Google
            </Button>
            
            <div className="grid grid-cols-3 gap-4">
              {socialLogins.slice(1).map((login) => (
                <Button
                  key={login.name}
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all border-0"
                  onClick={login.onClick}
                >
                  <img src={login.icon} alt={login.name} className="w-6 h-6" />
                </Button>
              ))}
            </div>
          </div>

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
          <div className="space-y-3">
            {wallets.map((wallet) => (
              <Button
                key={wallet.name}
                variant="outline"
                className="w-full bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all border-0 text-white justify-between h-12"
                onClick={wallet.onClick}
              >
                <div className="flex items-center gap-2">
                  <img src={wallet.icon} alt={wallet.name} className="w-6 h-6" />
                  {wallet.name}
                </div>
              </Button>
            ))}
          </div>

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
