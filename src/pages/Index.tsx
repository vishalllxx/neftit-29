
import { MainNav } from "@/components/layout/MainNav";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Twitter, Discord, Gift, Trophy, Users } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Index = () => {
  const taskTypes = [
    {
      icon: <Twitter className="h-6 w-6 text-primary" />,
      title: "Social Engagement",
      description: "Follow and engage with projects on Twitter",
      reward: "50 XP"
    },
    {
      icon: <Discord className="h-6 w-6 text-primary" />,
      title: "Community Building",
      description: "Join and participate in Discord communities",
      reward: "75 XP"
    },
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: "Daily Rewards",
      description: "Complete daily tasks to earn rewards",
      reward: "100 XP"
    }
  ];

  const featuredProjects = [
    {
      title: "DeFi Protocol",
      description: "Next-gen decentralized exchange platform",
      progress: 75,
      participants: 1234
    },
    {
      title: "NFT Marketplace",
      description: "Trade unique digital collectibles",
      progress: 60,
      participants: 892
    },
    {
      title: "GameFi Project",
      description: "Play-to-earn blockchain gaming",
      progress: 45,
      participants: 567
    }
  ];

  return (
    <>
      <Helmet>
        <title>NEFTIT - Discover, Collect, and Trade NFTs</title>
        <meta 
          name="description" 
          content="Join the future of digital collectibles with our curated marketplace. Discover unique NFTs, connect your wallet, and start collecting today." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
        <MainNav />
        
        {/* Hero Section */}
        <main className="container mx-auto px-4">
          <div className="pt-32 pb-16 text-center space-y-8">
            <div className="space-y-6 max-w-4xl mx-auto fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient animate-fade-in">
                Discover & Engage with the Best Web3 Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
                Join the future of digital engagement. Complete tasks, earn rewards, and build your Web3 portfolio.
              </p>
              <div className="flex justify-center gap-4 pt-4 animate-fade-in delay-200">
                <Link to="/discover">
                  <Button size="lg" className="rounded-full text-lg px-8 py-6 hover:scale-105 transition-transform">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Exploring
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Featured Projects Section */}
            <div className="pt-20">
              <h2 className="text-3xl font-bold mb-12 text-gradient">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {featuredProjects.map((project, index) => (
                  <div 
                    key={project.title}
                    className="glass p-6 rounded-xl card-hover space-y-4 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="text-primary">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-primary/10 rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2 transition-all duration-500" 
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{project.participants.toLocaleString()} participants</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Task & Rewards Section */}
            <div className="pt-20">
              <h2 className="text-3xl font-bold mb-12 text-gradient">Complete Tasks, Earn Rewards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {taskTypes.map((task, index) => (
                  <div 
                    key={task.title}
                    className="glass p-6 rounded-xl hover:scale-105 transition-transform space-y-4 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {task.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                    <p className="text-muted-foreground">{task.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="font-medium">{task.reward}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="glass mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gradient">NEFTIT</h2>
                <p className="text-sm text-muted-foreground">
                  © 2024 NEFTIT Labs. All rights reserved
                </p>
                <div className="flex gap-4">
                  <img src="/placeholder.svg" alt="MetaMask" className="h-8 w-8" />
                  <img src="/placeholder.svg" alt="WalletConnect" className="h-8 w-8" />
                  <img src="/placeholder.svg" alt="Coinbase" className="h-8 w-8" />
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Legal</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Twitter</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Discord</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Instagram</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
