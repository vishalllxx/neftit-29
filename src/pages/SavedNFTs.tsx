
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { NFTCard } from "@/components/nft/NFTCard";
import { useState, useEffect } from "react";

const SavedNFTs = () => {
  const [savedNFTs, setSavedNFTs] = useState<any[]>([]);

  useEffect(() => {
    const savedNFTIds = JSON.parse(localStorage.getItem("savedNFTs") || "[]");
    // For demo purposes, we'll create mock data for saved NFTs
    const mockNFTs = savedNFTIds.map((id: string) => ({
      id,
      name: `Saved NFT ${id}`,
      image: "https://images.unsplash.com/photo-1592492152545-9695d3f473f4?auto=format&fit=crop&q=80",
      creator: "Creator Name",
      likes: 10,
      isLiked: true
    }));
    setSavedNFTs(mockNFTs);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-12 relative">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-text">
              Saved NFTs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your favorite NFT collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 fade-in">
            {savedNFTs.map((nft) => (
              <NFTCard key={nft.id} {...nft} />
            ))}
          </div>

          {savedNFTs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No saved NFTs yet</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SavedNFTs;
