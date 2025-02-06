
import { MainNav } from "@/components/layout/MainNav";
import { NFTCard } from "@/components/nft/NFTCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const featuredNFTs = [
    {
      id: "1",
      name: "Cosmic Dreamer #001",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
      price: "0.85",
      creator: "CryptoArtist",
      likes: 142,
      isLiked: false,
    },
    {
      id: "2",
      name: "Digital Genesis",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      price: "1.2",
      creator: "PixelMaster",
      likes: 89,
      isLiked: true,
    },
    {
      id: "3",
      name: "Neon Horizons",
      image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
      price: "2.4",
      creator: "Web3Creator",
      likes: 234,
      isLiked: false,
    },
    {
      id: "4",
      name: "Meta Landscapes",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032",
      price: "1.8",
      creator: "ArtBlock",
      likes: 167,
      isLiked: false,
    },
  ];

  useEffect(() => {
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>NEFTIT - Discover, Collect, and Trade NFTs</title>
        <meta name="description" content="Join the future of digital collectibles with our curated marketplace. Discover unique NFTs, connect your wallet, and start collecting today." />
        <meta name="keywords" content="NFT, marketplace, digital art, blockchain, web3, cryptocurrency" />
        <meta property="og:title" content="NEFTIT - NFT Marketplace" />
        <meta property="og:description" content="Discover and collect unique NFTs on our curated marketplace." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen">
        <MainNav />
        <main className="pt-24 px-4 container mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
                Discover, Collect, and Trade NFTs
              </h1>
              <p className="text-lg text-white max-w-2xl mx-auto">
                Join the future of digital collectibles with our curated marketplace
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="glass p-2 flex gap-2 rounded-full">
                <Input
                  placeholder="Search collections and creators..."
                  className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
                />
                <Button size="icon" className="rounded-full">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="nft-grid">
              {isLoading ? (
                // Skeleton loading state
                Array(4).fill(0).map((_, index) => (
                  <div key={index} className="glass animate-pulse h-[400px] rounded-lg"></div>
                ))
              ) : (
                featuredNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
