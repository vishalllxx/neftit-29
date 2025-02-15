
import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, Wallet, Check } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  type?: 'twitter' | 'discord' | 'wallet' | 'other';
}

interface NFTTaskListProps {
  tasks: Task[];
}

export const NFTTaskList = ({ tasks: initialTasks }: NFTTaskListProps) => {
  const [tasks, setTasks] = useState(initialTasks);
  
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  
  const handleTaskComplete = (taskId: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    toast.success("Task status updated!");
  };

  const getTaskIcon = (type?: string) => {
    switch (type) {
      case 'twitter':
        return <Twitter className="h-5 w-5 text-white" />;
      case 'discord':
        return <MessageCircle className="h-5 w-5 text-white" />;
      case 'wallet':
        return <Wallet className="h-5 w-5 text-white" />;
      default:
        return <MessageCircle className="h-5 w-5 text-white" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Tasks</h3>
        
        <div className="space-y-4">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className={cn(
                "bg-[#1A1A1A] rounded-xl p-6 border border-white/10",
                "transition-all duration-200 hover:border-white/20",
                "flex items-center justify-between gap-4",
                task.completed && "opacity-70"
              )}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="bg-[#2A2A2A] p-2.5 rounded-lg">
                  {getTaskIcon(task.type)}
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                  {task.completed && (
                    <span className="inline-block bg-emerald-500/20 text-emerald-500 text-sm px-3 py-0.5 rounded-full font-medium">
                      Completed
                    </span>
                  )}
                </div>
              </div>
              
              <Button 
                variant={task.completed ? "ghost" : "secondary"}
                size="sm"
                className={cn(
                  "min-w-[100px]",
                  task.completed ? "bg-white/5 hover:bg-white/10" : "hover:bg-white/90"
                )}
                onClick={() => handleTaskComplete(task.id)}
              >
                {task.completed ? (
                  <Check className="h-4 w-4 mr-2" />
                ) : null}
                {task.completed ? "Completed" : "Verify"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1F1F1F] rounded-xl p-6 border border-white/10">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Rewards</h3>
            <div className="space-y-1">
              <p className="text-white/90">10 XP</p>
              <p className="text-white/90">10 NEFT</p>
            </div>
          </div>
          
          <div className="text-lg font-medium">
            {completedTasks === totalTasks ? (
              <span className="text-emerald-500">
                All tasks completed! 🎉
              </span>
            ) : (
              <span className="text-amber-500">
                {completedTasks}/{totalTasks} tasks completed
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
