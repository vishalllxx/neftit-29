
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

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
  };

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      <StarryBackground />
      <MainNav />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input 
                    id="username" 
                    placeholder="Enter your username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Social Connections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter Username</Label>
                  <div className="flex items-center gap-4">
                    <Input 
                      id="twitter"
                      placeholder="Your Twitter username"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value.replace('@', ''))}
                    />
                    <Button 
                      variant="outline"
                      onClick={() => handleConnect('Twitter')}
                      disabled={!twitter}
                    >
                      Connect
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telegram">Telegram Username</Label>
                  <div className="flex items-center gap-4">
                    <Input 
                      id="telegram"
                      placeholder="Your Telegram username"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value.replace('@', ''))}
                    />
                    <Button 
                      variant="outline"
                      onClick={() => handleConnect('Telegram')}
                      disabled={!telegram}
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

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
