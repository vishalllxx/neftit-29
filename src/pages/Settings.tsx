
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/auth");
      return;
    }

    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("userEmail");

    if (savedUsername) setUsername(savedUsername);
    if (savedEmail) setEmail(savedEmail);
  }, [navigate]);

  const handleSave = () => {
    try {
      localStorage.setItem("username", username);
      localStorage.setItem("userEmail", email);
      toast.success("Settings saved successfully!");
    } catch (error) {
      toast.error("Failed to save settings");
    }
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
      <div className="container mx-auto px-4 pt-24">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="flex justify-between pt-4">
              <Button onClick={handleLogout} variant="destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
              <Button onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
