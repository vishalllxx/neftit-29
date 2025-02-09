
import { featuredProjects } from "@/data/nftProjects";
import { NFTImage } from "@/components/nft/NFTImage";

export const EarnAndGrow = () => {
  return (
    <div className="relative py-32">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl" />
      
      <div className="text-center mb-16 relative">
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-200">
          Earn and grow
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Oval container with gradient */}
        <div className="relative rounded-full overflow-hidden bg-gradient-to-r from-pink-100/20 via-purple-300/20 to-blue-200/20 backdrop-blur-3xl p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-4">
                {featuredProjects.slice(0, 6).map((project) => (
                  <div key={project.id} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.nftName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Neftit strives to be the most rewarding NFT platform. We provide exciting opportunities for users to earn XP, NEFT, and exclusive rewards by completing tasks.
              </p>
            </div>

            {/* Right side */}
            <div className="space-y-8">
              <div className="flex items-center justify-end gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white"
                  >
                    <span className="text-sm">+{i}</span>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-gray-700/50 backdrop-blur-sm flex items-center justify-center text-white">
                  <span className="text-sm">+1K</span>
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                From participating in NFT projects to engaging with web3 communities, users can grow their earnings while contributing to the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
