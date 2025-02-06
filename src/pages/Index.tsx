
import { MainNav } from "@/components/layout/MainNav";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Twitter, MessageSquare, Gift, Trophy, Users } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(200, 200);
    
    // Create cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ 
      color: 'hsl(var(--primary))',
      opacity: 0.9,
      transparent: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 2;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  const taskTypes = [
    {
      icon: <Twitter className="h-6 w-6 text-primary" />,
      title: "Social Engagement",
      description: "Follow and engage with projects on Twitter",
      reward: "50 XP"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
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

      <div className="min-h-screen bg-[#121212] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900/95 to-gray-900/90">
        <MainNav />
        
        {/* Hero Section */}
        <main className="container mx-auto px-4">
          <div className="pt-32 pb-16 text-center space-y-8">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="relative">
                <canvas 
                  ref={canvasRef} 
                  className="absolute left-1/2 -translate-x-1/2 -top-20 opacity-50"
                />
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient animate-fade-in relative z-10">
                  Discover & Engage with the Best Web3 Projects
                </h1>
              </div>
              <p className="text-xl text-[#C8C8C9] max-w-2xl mx-auto animate-fade-in delay-100">
                Join the future of digital engagement. Complete tasks, earn rewards, and build your Web3 portfolio.
              </p>
              <div className="flex justify-center gap-4 pt-4 animate-fade-in delay-200">
                <Link to="/discover">
                  <Button 
                    size="lg" 
                    className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:bg-primary/90"
                  >
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
                    className="glass p-6 rounded-xl card-hover space-y-4 animate-fade-in backdrop-blur-xl bg-white/5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#F1F1F1]">{project.title}</h3>
                    <p className="text-[#C8C8C9]">{project.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#C8C8C9]">Progress</span>
                        <span className="text-primary">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-primary/10 rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2 transition-all duration-500" 
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#C8C8C9]">
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
                    className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 space-y-4 animate-fade-in backdrop-blur-xl bg-white/5 hover:shadow-xl hover:shadow-primary/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {task.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#F1F1F1]">{task.title}</h3>
                    <p className="text-[#C8C8C9]">{task.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="font-medium text-[#F1F1F1]">{task.reward}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="glass mt-20 border-t border-white/5">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gradient">NEFTIT</h2>
                <p className="text-sm text-[#C8C8C9]">
                  © 2024 NEFTIT Labs. All rights reserved
                </p>
                <div className="flex gap-4">
                  <img src="/lovable-uploads/metamask.svg" alt="MetaMask" className="h-8 w-8" />
                  <img src="/lovable-uploads/wallet-connect.svg" alt="WalletConnect" className="h-8 w-8" />
                  <img src="/lovable-uploads/coinbase.svg" alt="Coinbase" className="h-8 w-8" />
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-[#F1F1F1]">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">About</Link></li>
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">Careers</Link></li>
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-[#F1F1F1]">Support</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">Help Center</Link></li>
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">Terms of Service</Link></li>
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">Legal</Link></li>
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-[#F1F1F1]">Follow Us</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">Twitter</Link></li>
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">Discord</Link></li>
                  <li><Link to="#" className="text-[#C8C8C9] hover:text-[#F1F1F1] transition-colors">Instagram</Link></li>
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
