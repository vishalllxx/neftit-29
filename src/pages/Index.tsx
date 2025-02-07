
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
        <link href="https://fonts.googleapis.com/css2?family=Audrey:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen font-['Inter']">
        <StarryBackground />
        <MainNav />
        
        <main className="container mx-auto px-4 relative">
          <div className="pt-32 pb-16 text-center space-y-8">
            <Hero />
            <RotatingCube />
            <FeaturedProjects />
            <WhatIsNeftit />
            <TaskTypes />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
