
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileSection } from "@/components/settings/ProfileSection";
import { SocialSection } from "@/components/settings/SocialSection";

const Settings = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/auth");
      return;
    }

    // Load saved user data from localStorage
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("userEmail");
    const savedTwitter = localStorage.getItem("userTwitter");
    const savedTelegram = localStorage.getItem("userTelegram");

    if (savedUsername) setUsername(savedUsername);
    if (savedEmail) setEmail(savedEmail);
    if (savedTwitter) setTwitter(savedTwitter);
    if (savedTelegram) setTelegram(savedTelegram);
  }, [navigate]);

  const handleSave = () => {
    setIsLoading(true);
    
    try {
      if (!username.trim()) {
        toast.error("Username cannot be empty");
        return;
      }

      // Validate email format
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      // Save all user data
      localStorage.setItem("username", username);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userTwitter", twitter);
      localStorage.setItem("userTelegram", telegram);

      toast.success("Settings saved successfully!");
      navigate("/profile");
    } catch (error) {
      toast.error("Failed to save settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnect = (platform: string) => {
    const username = platform === 'Twitter' ? twitter : telegram;
    
    if (!username) {
      toast.error(`Please enter your ${platform} username first`);
      return;
    }

    toast.success(`Connected to ${platform} as @${username}`);
    localStorage.setItem(platform === 'Twitter' ? 'userTwitter' : 'userTelegram', username);
  };

  const handleLogout = () => {
    try {
      localStorage.setItem("isAuthenticated", "false");
      toast.success("Logged out successfully");
      navigate("/auth");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <StarryBackground />
      <MainNav />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <ProfileSection 
            username={username}
            email={email}
            onUsernameChange={setUsername}
            onEmailChange={setEmail}
          />

          <SocialSection 
            twitter={twitter}
            telegram={telegram}
            onTwitterChange={setTwitter}
            onTelegramChange={setTelegram}
            onConnect={handleConnect}
          />

          <div className="flex justify-between">
            <Button 
              onClick={handleLogout} 
              variant="destructive" 
              size="lg" 
              className="px-8"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
            <Button 
              onClick={handleSave} 
              size="lg" 
              className="px-8"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
