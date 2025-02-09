
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "@/data/nftProjects";

export const Hero = () => {
  return (
    <div className="relative space-y-8 max-w-6xl mx-auto pt-20">
      {/* Main title */}
      <div className="text-center mb-24">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white animate-fade-in">
          The Future of
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"> Digital Assets</span>
        </h1>
      </div>

      {/* Earn and Grow Section */}
      <div className="relative pt-20">
        <h2 className="text-5xl font-medium text-center mb-16 bg-gradient-to-r from-pink-200 to-purple-200 text-transparent bg-clip-text">
          Earn and grow
        </h2>

        {/* Oval Container */}
        <div className="relative mx-auto max-w-5xl h-[300px] rounded-full bg-gradient-to-r from-pink-100/20 via-purple-100/20 to-blue-100/20 backdrop-blur-3xl p-8">
          {/* NFT Grid on the left */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-3 max-w-[300px]">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <div 
                key={project.id}
                className="w-20 h-20 rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={project.image} 
                  alt={project.nftName}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* User Icons on the right */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-black"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-sm text-white">
                +1K
              </div>
            </div>
          </div>
        </div>

        {/* Text Sections */}
        <div className="grid grid-cols-2 gap-24 max-w-4xl mx-auto mt-12 text-gray-400">
          <p className="text-lg leading-relaxed">
            Neftit strives to be the most rewarding NFT platform. We provide exciting opportunities for users to earn XP, NEFT, and exclusive rewards by completing tasks.
          </p>
          <p className="text-lg leading-relaxed">
            From participating in NFT projects to engaging with web3 communities, users can grow their earnings while contributing to the ecosystem.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link to="/discover">
            <Button 
              size="lg" 
              className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Start Exploring
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
