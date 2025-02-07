
import { MainNav } from "@/components/layout/MainNav";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Calendar, Clock } from "lucide-react";
import { DailyCheckin } from "@/components/streaks/DailyCheckin";

const Streaks = () => {
  const achievements = [
    { title: "3 Day Streak", progress: 66, icon: Calendar },
    { title: "Weekly Goals", progress: 40, icon: Star },
    { title: "Monthly Rewards", progress: 75, icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/80 to-background">
      <MainNav />
      <VerticalNav />
      <main className="pl-20 pt-24 pr-4 container mx-auto">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold animate-text bg-gradient-to-r from-primary via-accent to-primary">
              Daily Streaks
            </h1>
            <p className="text-lg text-muted-foreground">
              Keep up your daily activity to earn rewards and climb the leaderboard
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="glass hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-1">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <achievement.icon className="w-5 h-5 text-primary animate-pulse" />
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={achievement.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">
                    {achievement.progress}% Complete
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <DailyCheckin />
        </div>
      </main>
    </div>
  );
}

export default Streaks;
