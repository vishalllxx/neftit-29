
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Helmet } from "react-helmet";
import { Hero } from "@/components/home/Hero";
import { RotatingCube } from "@/components/home/RotatingCube";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Statistics } from "@/components/home/Statistics";
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

      <div className="min-h-screen font-['Inter'] overflow-hidden bg-[#111111] relative">
        <StarryBackground />
        
        <MainNav />
        
        <main className="container mx-auto px-4 relative">
          <div className="pt-32 pb-16 space-y-32">
            {/* Hero Section */}
            <div className="relative animate-fade-in">
              <Hero />
            </div>

            {/* Statistics Section */}
            <div className="relative">
              <Statistics />
            </div>

            {/* Rotating Cube */}
            <div className="relative z-10">
              <RotatingCube />
            </div>

            {/* Featured Projects */}
            <div className="relative">
              <FeaturedProjects />
            </div>

            {/* Testimonials Section */}
            <Testimonials />

            {/* What is Neftit section */}
            <div className="relative">
              <WhatIsNeftit />
            </div>

            {/* Task Types */}
            <div className="relative">
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
