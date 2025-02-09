
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  type?: 'twitter' | 'discord' | 'other';
}

interface NFTTaskListProps {
  tasks: Task[];
}

export const NFTTaskList = ({ tasks }: NFTTaskListProps) => {
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="mt-8 space-y-6">
      <Separator className="bg-white/[0.08] my-8" />
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Tasks</h3>
          <span className="text-sm text-white/60">
            {completedTasks} of {tasks.length} completed
          </span>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-[#1A1F2C]"
            >
              <div className="flex items-center gap-2">
                {task.type === 'twitter' ? (
                  <Twitter className="h-4 w-4 text-white/60" />
                ) : (
                  <MessageCircle className="h-4 w-4 text-white/60" />
                )}
                <span className="text-white/80">{task.title}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className={`${
                  task.completed 
                    ? 'text-green-400 hover:text-green-400 hover:bg-green-400/10' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => {
                  if (!task.completed) {
                    toast.success("Task verified successfully!");
                  }
                }}
              >
                {task.completed ? "Completed" : "Verify"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg border border-white/10 bg-[#1A1F2C]">
        <div className="flex items-center justify-between">
          <span className="text-white/80">Status</span>
          <span className="text-white/60">
            {completedTasks === tasks.length ? "Completed" : "Not Completed"}
          </span>
        </div>
      </div>
    </div>
  );
};
