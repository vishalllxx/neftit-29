
import { MessageSquare, Twitter, Gift } from "lucide-react";

const taskTypes = [
  {
    number: "01",
    icon: <Twitter className="h-6 w-6 text-[#D1D5DB]" />,
    title: "Social Engagement",
    description: "Connect with our vibrant community on Twitter and stay updated with the latest NFT drops"
  },
  {
    number: "02",
    icon: <MessageSquare className="h-6 w-6 text-[#D1D5DB]" />,
    title: "Community Building",
    description: "Join our Discord community to participate in exclusive events and discussions"
  },
  {
    number: "03",
    icon: <Gift className="h-6 w-6 text-[#D1D5DB]" />,
    title: "Daily Rewards",
    description: "Complete daily tasks to earn XP and NEFT tokens while growing your collection"
  }
];

export const TaskTypes = () => {
  return (
    <div className="pt-20 relative">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl" />
      
      {/* Main content */}
      <div className="relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-light text-white">
            Complete Tasks and Earn
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
            Join our growing community and earn rewards by completing exciting tasks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {taskTypes.map((task, index) => (
            <div 
              key={task.title}
              className="relative group"
            >
              {/* Card content with corner lines */}
              <div className="relative bg-[#111111] p-8 rounded-xl h-full flex flex-col space-y-4 overflow-visible">
                {/* Top-left to bottom-right line */}
                <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-white to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
                
                {/* Bottom-right to top-left line */}
                <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-white to-transparent" />
                <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-white to-transparent" />

                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
                  {task.icon}
                </div>
                
                <h3 className="text-xl font-light text-white">
                  {task.title}
                </h3>
                
                <p className="text-white/70 text-sm flex-grow font-light">
                  {task.description}
                </p>

                {/* Large number positioned half outside */}
                <div className="absolute -bottom-8 right-6 text-8xl font-bold text-white/10">
                  {task.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
