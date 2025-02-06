
import { MainNav } from "@/components/layout/MainNav";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NEFTIT - Discover, Collect, and Trade NFTs</title>
        <meta name="description" content="Join the future of digital collectibles with our curated marketplace. Discover unique NFTs, connect your wallet, and start collecting today." />
      </Helmet>

      <div className="min-h-screen">
        <MainNav />
        <main className="container mx-auto px-4">
          <div className="pt-32 pb-16 text-center space-y-8">
            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient">
                Collectibles every week from your favorite creators
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the future of digital collectibles with our curated marketplace
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Link to="/discover">
                  <Button size="lg" className="rounded-full text-lg px-8 py-6">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Collecting
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-16">
              <img
                src="https://images.unsplash.com/photo-1634973357973-f2ed2657db3c"
                alt="Featured NFT 1"
                className="w-full aspect-square object-cover rounded-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
                alt="Featured NFT 2"
                className="w-full aspect-square object-cover rounded-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1577720580479-7d839d829c73"
                alt="Featured NFT 3"
                className="w-full aspect-square object-cover rounded-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032"
                alt="Featured NFT 4"
                className="w-full aspect-square object-cover rounded-xl"
              />
            </div>
          </div>
        </main>

        <footer className="glass mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gradient">NEFTIT</h2>
                <p className="text-sm text-muted-foreground">
                  © 2024 NEFTIT Labs. All rights reserved
                </p>
                <div className="flex gap-4">
                  <img src="/placeholder.svg" alt="MetaMask" className="h-8 w-8" />
                  <img src="/placeholder.svg" alt="WalletConnect" className="h-8 w-8" />
                  <img src="/placeholder.svg" alt="Coinbase" className="h-8 w-8" />
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Legal</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Twitter</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Discord</Link></li>
                  <li><Link to="#" className="text-muted-foreground hover:text-foreground">Instagram</Link></li>
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
