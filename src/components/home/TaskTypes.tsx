
import { MessageSquare, Twitter, Gift, Trophy } from "lucide-react";

const taskTypes = [
  {
    icon: <Twitter className="h-6 w-6 text-[#D1D5DB]" />,
    title: "Social Engagement",
    description: "Follow and engage with projects on Twitter",
    reward: "50 XP"
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-[#D1D5DB]" />,
    title: "Community Building",
    description: "Join and participate in Discord communities",
    reward: "75 XP"
  },
  {
    icon: <Gift className="h-6 w-6 text-[#D1D5DB]" />,
    title: "Daily Rewards",
    description: "Complete daily tasks to earn rewards",
    reward: "100 XP"
  }
];

export const TaskTypes = () => {
  return (
    <div className="pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl" />
      <h2 className="text-3xl font-bold mb-12 text-[#D1D5DB]">Complete Tasks, Earn Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {taskTypes.map((task, index) => (
          <div 
            key={task.title}
            className="backdrop-blur-xl bg-white/5 p-6 rounded-xl hover:scale-105 transition-all duration-300 space-y-4 animate-fade-in border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-[#8B5CF6]/5"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#475569] to-[#475569]/50 flex items-center justify-center">
              {task.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#D1D5DB]">{task.title}</h3>
            <p className="text-[#9CA3AF]">{task.description}</p>
            <div className="flex items-center gap-2 text-sm">
              <Trophy className="h-4 w-4 text-[#D1D5DB]" />
              <span className="font-medium text-[#D1D5DB]">{task.reward}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
