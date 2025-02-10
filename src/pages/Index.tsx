
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Helmet } from "react-helmet";
import { Hero } from "@/components/home/Hero";
import { RotatingCube } from "@/components/home/RotatingCube";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhatIsNeftit } from "@/components/home/WhatIsNeftit";
import { TaskTypes } from "@/components/home/TaskTypes";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NEFTIT - Discover, Collect, and Trade NFTs</title>
        <meta 
          name="description" 
          content="Join the future of digital collectibles with our curated marketplace. Discover unique NFTs, connect your wallet, and start collecting today." 
        />
      </Helmet>

      <div className="min-h-screen font-['Inter'] overflow-hidden bg-[#0A0A0B] relative">
        {/* Background gradients */}
        <div className="fixed inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none opacity-20" />
        
        <StarryBackground />
        <MainNav />
        
        <main className="container mx-auto px-4 relative">
          <div className="pt-24 pb-16 space-y-40">
            {/* Hero Section */}
            <div className="relative animate-fade-in">
              <Hero />
            </div>

            {/* Featured Projects with enhanced styling */}
            <div className="relative">
              <div className="absolute -inset-x-4 top-0 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl opacity-30" />
              <FeaturedProjects />
            </div>

            {/* What is Neftit section */}
            <div className="relative">
              <WhatIsNeftit />
            </div>

            {/* Task Types with gradient background */}
            <div className="relative">
              <div className="absolute -inset-x-4 top-0 h-96 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-3xl opacity-30" />
              <TaskTypes />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
