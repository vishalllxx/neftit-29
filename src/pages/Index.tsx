import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Twitter, MessageSquare, Gift, Trophy, Users, UserPlus, MessageCircle, Share2, PlusCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { toast } from "react-toastify";

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(240, 240);
    
    const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2, 6, 6, 6);
    const material = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color('#475569'),
      opacity: 0.9,
      transparent: true,
      shininess: 100,
      specular: new THREE.Color('#8B5CF6'),
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const mainLight = new THREE.DirectionalLight(0x8B5CF6, 1);
    mainLight.position.set(1, 1, 1);
    scene.add(mainLight);
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8B5CF6, 0.5);
    pointLight.position.set(-2, 1, -1);
    scene.add(pointLight);

    camera.position.z = 2.5;

    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.position.x = mouseX * 0.1;
      cube.position.y = mouseY * 0.1;
      
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
      icon: <Twitter className="h-6 w-6 text-[#D1D5DB]" />,
      title: "Social Engagement",
      description: "Follow and engage with projects on Twitter",
      reward: "50 XP"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#D1D5DB]" />,
      title: "Community Building",
      description: "Join and participate in Discord communities",
      reward: "75 XP"
    },
    {
      icon: <Gift className="h-6 w-6 text-[#D1D5DB]" />,
      title: "Daily Rewards",
      description: "Complete daily tasks to earn rewards",
      reward: "100 XP"
    }
  ];

  const featuredProjects = [
    {
      id: "1",
      title: "DeFi Protocol",
      description: "Next-gen decentralized exchange platform",
      progress: 75,
      participants: 1234,
      growthRate: "+12.5%",
      volumeChange: "+8.2%",
      isFollowed: false,
      comments: [
        { id: "1", user: "Alex", text: "Great project!" },
        { id: "2", user: "Sarah", text: "Looking forward to the launch" }
      ],
      reactions: {
        likes: 156,
        shares: 42
      }
    },
    {
      id: "2",
      title: "NFT Marketplace",
      description: "Trade unique digital collectibles",
      progress: 60,
      participants: 892,
      growthRate: "+15.3%",
      volumeChange: "+10.1%",
      isFollowed: false,
      comments: [
        { id: "1", user: "Mike", text: "Revolutionary concept!" }
      ],
      reactions: {
        likes: 98,
        shares: 28
      }
    },
    {
      id: "3",
      title: "GameFi Project",
      description: "Play-to-earn blockchain gaming",
      progress: 45,
      participants: 567,
      growthRate: "+9.7%",
      volumeChange: "+5.4%",
      isFollowed: false,
      comments: [
        { id: "1", user: "Jane", text: "Can't wait to try this!" }
      ],
      reactions: {
        likes: 75,
        shares: 19
      }
    }
  ];

  const handleFollow = (projectId: string) => {
    toast.success("Successfully followed the project");
  };

  const handleShare = (projectId: string) => {
    toast.success("Project link copied to clipboard");
  };

  const handleQuickJoin = (projectId: string) => {
    toast.success("Successfully joined the project");
  };

  const handleComment = (projectId: string, comment: string) => {
    if (comment.trim()) {
      toast.success("Comment added successfully");
      setShowComments(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>NEFTIT - Discover, Collect, and Trade NFTs</title>
        <meta 
          name="description" 
          content="Join the future of digital collectibles with our curated marketplace. Discover unique NFTs, connect your wallet, and start collecting today." 
        />
        <link href="https://fonts.googleapis.com/css2?family=Audrey:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen font-['Inter']">
        <StarryBackground />
        <MainNav />
        
        <main className="container mx-auto px-4 relative">
          <div className="pt-32 pb-16 text-center space-y-8">
            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D1D5DB] via-white to-[#D1D5DB] animate-fade-in relative z-10 font-['Audrey']">
                Discover & Engage with the Best Web3 Projects
              </h1>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto animate-fade-in delay-100">
                Join the future of digital engagement. Complete tasks, earn rewards, and build your Web3 portfolio.
              </p>
              <div className="flex justify-center gap-4 pt-4 animate-fade-in delay-200">
                <Link to="/discover">
                  <Button 
                    size="lg" 
                    className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-[#475569] to-[#475569]/80 hover:from-[#475569]/90 hover:to-[#475569]/70 text-[#D1D5DB] transition-all duration-300 shadow-lg hover:shadow-[#475569]/20 group hover:scale-105"
                  >
                    <Sparkles className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Start Exploring
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="pt-20 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl" />
              <h2 className="text-3xl font-bold mb-12 text-[#D1D5DB]">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {featuredProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="backdrop-blur-xl bg-white/5 p-6 rounded-xl hover:scale-105 transition-all duration-300 space-y-4 animate-fade-in border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-[#8B5CF6]/5"
                  >
                    <div className="flex justify-between items-start">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#475569] to-[#475569]/50 flex items-center justify-center mb-4">
                        <Trophy className="h-6 w-6 text-[#D1D5DB]" />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#D1D5DB] hover:text-white"
                        onClick={() => handleFollow(project.id)}
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        Follow
                      </Button>
                    </div>

                    <h3 className="text-xl font-semibold text-[#D1D5DB]">{project.title}</h3>
                    <p className="text-[#9CA3AF]">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 my-4">
                      <div className="space-y-1">
                        <p className="text-sm text-[#9CA3AF]">Growth</p>
                        <p className="text-lg font-semibold text-green-400">{project.growthRate}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-[#9CA3AF]">Volume</p>
                        <p className="text-lg font-semibold text-green-400">{project.volumeChange}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#9CA3AF]">Progress</span>
                        <span className="text-[#D1D5DB]">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-[#475569]/10 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-[#475569] to-[#8B5CF6] rounded-full h-2.5 transition-all duration-500" 
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                        <Users className="h-4 w-4" />
                        <span>{project.participants.toLocaleString()} participants</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                      <div className="flex gap-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#9CA3AF] hover:text-white"
                          onClick={() => setShowComments(!showComments)}
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {project.comments.length}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#9CA3AF] hover:text-white"
                          onClick={() => handleShare(project.id)}
                        >
                          <Share2 className="h-4 w-4 mr-1" />
                          {project.reactions.shares}
                        </Button>
                      </div>
                      <Button
                        onClick={() => handleQuickJoin(project.id)}
                        className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
                        size="sm"
                      >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Join Project
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-20 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl" />
              <h2 className="text-3xl font-bold mb-12 text-[#D1D5DB]">Complete Tasks, Earn Rewards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {taskTypes.map((task) => (
                  <div 
                    key={task.title}
                    className="backdrop-blur-xl bg-white/5 p-6 rounded-xl hover:scale-105 transition-all duration-300 space-y-4 animate-fade-in border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-[#8B5CF6]/5"
                  >
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#475569] to-[#475569]/50 flex items-center justify-center">
                      {task.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#D1D5DB]">{task.title}</h3>
                    <p className="text-[#9CA3AF]">{task.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="h-4 w-4 text-[#D1D5DB]" />
                      <span className="font-medium text-[#D1D5DB]">{task.reward}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-20 border-t border-white/5 backdrop-blur-xl bg-white/5">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#D1D5DB]">NEFTIT</h2>
                <p className="text-sm text-[#9CA3AF]">
                  © 2024 NEFTIT Labs. All rights reserved
                </p>
                <div className="flex gap-4">
                  <img src="/lovable-uploads/metamask.svg" alt="MetaMask" className="h-8 w-8 hover:scale-110 transition-transform" />
                  <img src="/lovable-uploads/wallet-connect.svg" alt="WalletConnect" className="h-8 w-8 hover:scale-110 transition-transform" />
                  <img src="/lovable-uploads/coinbase.svg" alt="Coinbase" className="h-8 w-8 hover:scale-110 transition-transform" />
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-[#D1D5DB]">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">About</Link></li>
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Careers</Link></li>
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-[#D1D5DB]">Support</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Help Center</Link></li>
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Terms of Service</Link></li>
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Legal</Link></li>
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-[#D1D5DB]">Follow Us</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Twitter</Link></li>
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Discord</Link></li>
                  <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Instagram</Link></li>
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
