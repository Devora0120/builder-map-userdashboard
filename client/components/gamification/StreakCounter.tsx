import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Calendar, TrendingUp } from "lucide-react";

interface StreakCounterProps {
  currentStreak: number;
  longestStreak: number;
  streakType: string;
  lastActivity?: string;
}

export default function StreakCounter({
  currentStreak,
  longestStreak,
  streakType,
  lastActivity,
}: StreakCounterProps) {
  const getStreakColor = (streak: number) => {
    if (streak >= 30) return "text-orange-500";
    if (streak >= 14) return "text-blue-500";
    if (streak >= 7) return "text-green-500";
    return "text-yellow-500";
  };

  const getStreakLevel = (streak: number) => {
    if (streak >= 30) return "Legendary";
    if (streak >= 14) return "Epic";
    if (streak >= 7) return "Great";
    return "Building";
  };

  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Flame className={`h-5 w-5 ${getStreakColor(currentStreak)}`} />
          {streakType} Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div
            className={`text-4xl font-bold ${getStreakColor(currentStreak)}`}
          >
            {currentStreak}
          </div>
          <div className="text-sm text-muted-foreground">days</div>
          <Badge variant="outline" className="mt-2">
            {getStreakLevel(currentStreak)}
          </Badge>
        </div>

        <div className="flex items-center justify-between text-sm border-t pt-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Personal Best</span>
          </div>
          <span className="font-semibold">{longestStreak} days</span>
        </div>

        {lastActivity && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Last Activity</span>
            </div>
            <span className="font-medium">{lastActivity}</span>
          </div>
        )}

        {/* Streak visualization */}
        <div className="grid grid-cols-7 gap-1 mt-4">
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={i}
              className={`h-3 w-full rounded-sm ${
                i < currentStreak % 7
                  ? "bg-primary"
                  : currentStreak >= 7 && i === 6
                    ? "bg-primary"
                    : "bg-muted"
              }`}
            />
          ))}
        </div>
        <div className="text-xs text-center text-muted-foreground">
          This week's progress
        </div>
      </CardContent>
    </Card>
  );
}
