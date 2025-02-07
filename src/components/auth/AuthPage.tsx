
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

  const dynamicTexts = [
    "your decentralized app",
    "your NFT marketplace",
    "your blockchain project",
    "your smart contract",
    "your Web3 platform",
    "your AI-powered tool",
    "your future",
    "your next big thing"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2hyb21lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIgc3Ryb2tlPSIjRkYwMDAwIj48L2NpcmNsZT48bGluZSB4MT0iMjEuMTciIHkxPSI4IiB4Mj0iMTIiIHkyPSI4IiBzdHJva2U9IiMwMEZGMDAiPjwvbGluZT48bGluZSB4MT0iMy45NSIgeTE9IjYuMDYiIHgyPSI4LjU0IiB5Mj0iMTQuMTQiIHN0cm9rZT0iI0ZGRkYwMCI+PC9saW5lPjxsaW5lIHgxPSIxMC44OCIgeTE9IjIxLjk0IiB4Mj0iMTUuNDYiIHkyPSIxMy44NiIgc3Ryb2tlPSIjMDAwMEZGIj48L2xpbmU+PC9zdmc+",
      onClick: () => handleLogin("Google")
    },
    {
      name: "Discord",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbWVzc2FnZS1jaXJjbGUiPjxwYXRoIGQ9Ik0yMSAxMS41YTguMzggOC4zOCAwIDAgMS0uOSAzLjggOC41IDguNSAwIDAgMS03LjYgNC43IDguMzggOC4zOCAwIDAgMS0zLjgtLjlMMyAyMWwxLjktNS43YTguMzggOC4zOCAwIDAgMS0uOS0zLjggOC41IDguNSAwIDAgMSA0LjctNy42IDguMzggOC4zOCAwIDAgMSAzLjgtLjloLjVhOC40OCA4LjQ4IDAgMCAxIDggOHYuNXoiPjwvcGF0aD48L3N2Zz4=",
      onClick: () => handleLogin("Discord")
    },
    {
      name: "Twitter",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdHdpdHRlciI+PHBhdGggZD0iTTIzIDNhMTAuOSAxMC45IDAgMCAxLTMuMTQgMS41MyA0LjQ4IDQuNDggMCAwIDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwIDEgMyA0cy00IDkgNSAxM2ExMS42NCAxMS42NCAwIDAgMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMCAwLS4wOC0uODNBNy43MiA3LjcyIDAgMCAwIDIzIDN6Ij48L3BhdGg+PC9zdmc+",
      onClick: () => handleLogin("Twitter")
    },
    {
      name: "Telegram",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItc2VuZCI+PGxpbmUgeDE9IjIyIiB5MT0iMiIgeDI9IjExIiB5Mj0iMTMiPjwvbGluZT48cG9seWdvbiBwb2ludHM9IjIyIDIgMTUgMjIgMTEgMTMgMiA5IDIyIDIiPjwvcG9seWdvbj48L3N2Zz4=",
      onClick: () => handleLogin("Telegram")
    }
  ];

  const wallets = [
    {
      name: "Phantom",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZ2hvc3QiPjxwb2x5Z29uIHBvaW50cz0iOSAxOSAyIDkgOSAyIDIwIDIgMjAgMTYgMTQgMTYgOSAxOSI+PC9wb2x5Z29uPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iMiI+PC9jaXJjbGU+PC9zdmc+",
      status: "Multi Chain",
      onClick: () => handleLogin("Phantom")
    },
    {
      name: "Metamask",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZm94Ij48cGF0aCBkPSJNMTQuNyAyLjNBMS4wMDUgMS4wMDUgMCAwIDEgMTYgMyAyIDIgMCAwIDAgMTkgOGgtLjFhNSA1IDAgMCAwLTkuOCAwSDlhMiAyIDAgMCAwIDMtNSAxLjAwNSAxLjAwNSAwIDAgMSAxLjMtLjdaIj48L3BhdGg+PHBhdGggZD0iTTE4IDE5YTYgNiAwIDAgMC02IDZjMCAzIC41IDNaIj48L3BhdGg+PHBhdGggZD0iTTYgMTlhNiA2IDAgMCAxIDYgNmMwIDMtLjUgM1oiPjwvcGF0aD48cGF0aCBkPSJNMTIgMTlhNyA3IDAgMCAwIDctN1Y0aDJsLTQtNEwxMyA0aDJ2OGE3IDcgMCAwIDAgNyA3Ij48L3BhdGg+PC9zdmc+",
      status: "Installed",
      onClick: () => handleLogin("Metamask")
    },
    {
      name: "Keplr",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIta2V5Ij48cGF0aCBkPSJNMjEgMmwtMiAybS03LjYxIDcuNjFhNS41IDUuNSAwIDEgMS03Ljc3OCAwIDUuNSA1LjUgMCAwIDEgNy43NzcgMFoiPjwvcGF0aD48cGF0aCBkPSJNMTUuNSAxNS41TDE5IDE5bC0yIDJsLTIuNS0yLjUiPjwvcGF0aD48L3N2Zz4=",
      status: "Installed",
      onClick: () => handleLogin("Keplr")
    },
    {
      name: "Trust Wallet",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItc2hpZWxkIj48cGF0aCBkPSJNMTIgMjJzOC04IDgtMTJWNWwtOC0zLTggM3Y1YzAgNCA4IDEyIDggMTJ6Ij48L3BhdGg+PC9zdmc+",
      status: "Multi Chain",
      onClick: () => handleLogin("Trust Wallet")
    },
    {
      name: "All Wallets",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItd2FsbGV0Ij48cGF0aCBkPSJNMjEgNHYxNmEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoMTRhMiAyIDAgMCAxIDIgMnoiPjwvcGF0aD48cGF0aCBkPSJNMjEgNEg1YTIgMiAwIDAgMC0yIDJ2Mmg4YTIgMiAwIDAgMSAyIDJoNmEyIDIgMCAwIDEgMiAydjIiPjwvcGF0aD48L3N2Zz4=",
      status: "9+",
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
            <div className="text-center space-y-1 mb-6">
              <h2 className="text-xl font-medium text-white/90">You ask, we build</h2>
              <p className="text-lg font-medium bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
                {dynamicTexts[currentTextIndex]}
              </p>
            </div>

            {/* Social Logins */}
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full bg-[#2A2B2F]/80 hover:bg-[#2A2B2F] hover:scale-[1.02] transition-all border-0 text-white h-12 shadow-lg"
                onClick={() => handleLogin("Google")}
              >
                <img src={socialLogins[0].icon} alt="Google" className="w-5 h-5 mr-2" />
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
                    <img src={login.icon} alt={login.name} className="w-5 h-5" />
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
                    <img src={wallet.icon} alt={wallet.name} className="w-5 h-5" />
                    {wallet.name}
                  </div>
                  <span className={`text-sm ${
                    wallet.status === "Installed" ? "text-purple-400" :
                    wallet.status === "Multi Chain" ? "text-yellow-400" :
                    "text-gray-400"
                  }`}>
                    {wallet.status}
                  </span>
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
