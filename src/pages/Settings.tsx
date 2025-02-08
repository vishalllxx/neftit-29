
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { User, Mail, Twitter, Send, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");

  const handleSave = () => {
    if (username.trim()) {
      localStorage.setItem("username", username);
      toast.success("Settings saved successfully!");
      navigate("/profile");
    } else {
      toast.error("Username cannot be empty");
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  const handleConnect = (platform: string) => {
    toast.success(`Connected to ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/95 to-background">
      <StarryBackground />
      <MainNav />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Profile Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="username" 
                      placeholder="Your username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button onClick={handleSave}>
                      Change
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email"
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
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Social Connections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                    <div>
                      <Label>Twitter</Label>
                      <Input 
                        placeholder="Twitter username"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    onClick={() => handleConnect("Twitter")}
                  >
                    Connect
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Send className="h-5 w-5 text-[#0088cc]" />
                    <div>
                      <Label>Telegram</Label>
                      <Input 
                        placeholder="Telegram username"
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    onClick={() => handleConnect("Telegram")}
                  >
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-between">
            <Button onClick={handleLogout} variant="destructive" size="lg" className="px-8">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
            <Button onClick={handleSave} size="lg" className="px-8">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
