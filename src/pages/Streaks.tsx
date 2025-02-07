
import { MainNav } from "@/components/layout/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Calendar } from "lucide-react";
import { DailyCheckin } from "@/components/streaks/DailyCheckin";
import StarryBackground from "@/components/layout/StarryBackground";

const Streaks = () => {
  const achievements = [
    { title: "3 Day Streak", progress: 66, icon: Calendar },
    { title: "Weekly Goals", progress: 40, icon: Star },
    { title: "Monthly Rewards", progress: 75, icon: Trophy },
  ];

  return (
    <div className="min-h-screen">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 relative">
        <div className="pt-32 pb-16 max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold" style={{ background: 'linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', padding: '0.2em 0' }}>
              Daily Streaks
            </h1>
            <p className="text-lg text-white/60">
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
};

export default Streaks;
