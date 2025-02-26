
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { UniqueFeatures } from "@/components/home/UniqueFeatures";
import { CommunityGrowth } from "@/components/home/CommunityGrowth";
import { CallToAction } from "@/components/home/CallToAction";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NEFTIT - The Ultimate Web3 Community Hub</title>
        <meta 
          name="description" 
          content="Complete quests, collect exclusive NFTs, and upgrade them through our revolutionary burn-to-upgrade system. Join NEFTIT and be part of Web3's future." 
        />
        <meta name="keywords" content="NFT, Web3, crypto, blockchain, community, rewards, quests" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NEFTIT - The Ultimate Web3 Community Hub" />
        <meta property="og:description" content="Complete quests, collect exclusive NFTs, and upgrade them through our revolutionary burn-to-upgrade system." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen font-sans bg-[#0A0A0B] text-white overflow-x-hidden">
        <StarryBackground />
        <MainNav />
        
        <main className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-24 md:space-y-32 pb-20"
          >
            <HeroSection />
            <BenefitsSection />
            <HowItWorks />
            <UniqueFeatures />
            <CommunityGrowth />
            <CallToAction />
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
