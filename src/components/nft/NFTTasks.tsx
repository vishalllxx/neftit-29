
import { NFTProject } from "@/types/nft";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface NFTTasksProps {
  project: NFTProject;
  onTaskComplete: (taskId: string) => void;
}

export const NFTTasks = ({ project, onTaskComplete }: NFTTasksProps) => {
  return (
    <Card className="p-6 border-0 bg-gradient-to-br from-[#222222]/50 via-background/20 to-background/10 backdrop-blur-sm">
      <h2 className="text-xl font-semibold text-white mb-4">Required Tasks</h2>
      <div className="space-y-4">
        {project.tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-4 rounded-lg border border-[#333333] bg-[#222222]/50 backdrop-blur-sm"
          >
            <span className="font-medium text-white/80">{task.title}</span>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-white/10"
              disabled={task.completed}
              onClick={() => onTaskComplete(task.id)}
            >
              {task.completed ? "Completed" : "Complete"}
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
