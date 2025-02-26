
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksNew } from "@/components/home/HowItWorksNew";
import { NFTSystem } from "@/components/home/NFTSystem";
import { UserBenefits } from "@/components/home/UserBenefits";
import { UserDashboard } from "@/components/home/UserDashboard";
import { JoinSection } from "@/components/home/JoinSection";
import { NewFooter } from "@/components/home/NewFooter";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NEFTIT - Complete Quests, Earn & Upgrade NFTs</title>
        <meta 
          name="description" 
          content="Join NEFTIT to complete exciting quests, earn unique NFTs, and upgrade them to unlock rarer assets. Start your NFT collection journey today!" 
        />
        <meta name="keywords" content="NFT quests, NFT rewards, NFT upgrades, Web3 engagement, NFT collection" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NEFTIT - Complete Quests, Earn & Upgrade NFTs" />
        <meta property="og:description" content="Join NEFTIT to complete exciting quests, earn unique NFTs, and upgrade them to unlock rarer assets." />
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
            <HowItWorksNew />
            <NFTSystem />
            <UserBenefits />
            <UserDashboard />
            <JoinSection />
          </motion.div>
        </main>

        <NewFooter />
      </div>
    </>
  );
};

export default Index;
