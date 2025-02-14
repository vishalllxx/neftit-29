
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { useState, useEffect } from "react";
import { SearchSection } from "@/components/discover/SearchSection";
import { NFTGrid } from "@/components/discover/NFTGrid";
import { DiscoverHeader } from "@/components/discover/DiscoverHeader";
import { featuredProjects } from "@/data/nftProjects";

const Discover = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-[#111111]">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-12 relative">
        <div className="space-y-12">
          <DiscoverHeader 
            title="Discover & Earn NFTs"
            subtitle="Complete tasks, earn rewards, and collect unique NFTs"
          />
          <SearchSection onSearch={handleSearch} />
          <NFTGrid projects={featuredProjects} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
};

export default Discover;
