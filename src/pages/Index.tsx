
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Helmet } from "react-helmet";
import { Hero } from "@/components/home/Hero";
import { RotatingCube } from "@/components/home/RotatingCube";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhatIsNeftit } from "@/components/home/WhatIsNeftit";
import { TaskTypes } from "@/components/home/TaskTypes";
import { Footer } from "@/components/home/Footer";
import { Testimonials } from "@/components/home/Testimonials";

const Index = () => {
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

      <div className="min-h-screen font-['Inter'] overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background pointer-events-none" />
        <StarryBackground />
        
        <div className="fixed inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />
        
        <MainNav />
        
        <main className="container mx-auto px-4 relative">
          <div className="pt-32 pb-16 space-y-32">
            {/* Hero Section with enhanced animations */}
            <div className="relative animate-fade-in">
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-75" />
              <Hero />
            </div>

            {/* Rotating Cube with enhanced effects */}
            <div className="animate-float relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl -z-10" />
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                <RotatingCube />
              </div>
            </div>

            {/* Featured Projects with enhanced visuals */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl" />
              <FeaturedProjects />
            </div>

            {/* Testimonials Section */}
            <Testimonials />

            {/* What is Neftit section with improved styling */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl" />
              <WhatIsNeftit />
            </div>

            {/* Task Types with enhanced visual effects */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent blur-3xl" />
              <TaskTypes />
            </div>
          </div>
        </main>

        {/* Footer with gradient overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
