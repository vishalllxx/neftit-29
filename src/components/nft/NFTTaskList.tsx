
import { Button } from "@/components/ui/button";
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
  const totalTasks = tasks.length;
  const status = completedTasks === totalTasks ? "Completed" : "Not Completed";

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <span>📌</span> Tasks
        </h3>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className="flex items-center justify-between"
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
                className="text-white/60 hover:text-white hover:bg-white/10"
                onClick={() => toast.success("Task verified!")}
              >
                Verify
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <span>📌</span> Status
        </h3>
        <p className="text-white/80 font-medium">{status}</p>
      </div>
    </div>
  );
};
