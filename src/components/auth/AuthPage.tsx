
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
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
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-phantom-3630219-3031259.png",
      onClick: () => handleLogin("Phantom")
    },
    {
      name: "Metamask",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-metamask-2728406-2261817.png",
      onClick: () => handleLogin("Metamask")
    },
    {
      name: "Keplr",
      icon: "https://raw.githubusercontent.com/chainapsis/keplr-wallet/master/docs/images/keplr-logo.png",
      onClick: () => handleLogin("Keplr")
    },
    {
      name: "Trust Wallet",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-trust-wallet-6927635-5666077.png",
      onClick: () => handleLogin("Trust Wallet")
    },
    {
      name: "All Wallets",
      icon: "https://cdn-icons-png.flaticon.com/128/9329/9329863.png",
      onClick: () => handleLogin("Other Wallet")
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <Dialog open={true}>
        <DialogContent className="sm:max-w-[425px] bg-[#1A1B1E]/80 backdrop-blur-xl text-white border-0 shadow-2xl">
          <DialogHeader className="relative">
            <DialogTitle className="text-xl font-semibold text-center">LOGIN OR SIGN UP</DialogTitle>
            <Button 
              variant="ghost" 
              className="absolute right-0 top-0 opacity-70 hover:opacity-100 p-0 h-auto"
              onClick={() => navigate("/")}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Dynamic Text */}
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-2xl font-medium inline-flex items-center gap-2">
                <span className="text-white/90">collect</span>
                <span className="text-sky-400 min-w-[120px] animate-fade-in">
                  {displayText}
                </span>
              </h2>
            </div>

            {/* Social Logins */}
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full bg-[#2A2B2F]/80 hover:bg-[#2A2B2F] hover:scale-[1.02] transition-all border-0 text-white h-12 shadow-lg"
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
                    className="bg-[#2A2B2F]/80 hover:bg-[#2A2B2F] hover:scale-[1.02] transition-all border-0 shadow-lg"
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
                <span className="w-full border-t border-gray-700"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#1A1B1E] px-2 text-gray-400">OR</span>
              </div>
            </div>

            {/* Wallets */}
            <div className="space-y-3">
              {wallets.map((wallet) => (
                <Button
                  key={wallet.name}
                  variant="outline"
                  className="w-full bg-[#2A2B2F]/80 hover:bg-[#2A2B2F] hover:scale-[1.02] transition-all border-0 text-white justify-between h-12 shadow-lg"
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
