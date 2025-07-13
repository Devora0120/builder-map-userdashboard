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
      <CardHeader className="pb-2 p-3 sm:p-4">
        <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
          <Flame
            className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${getStreakColor(currentStreak)}`}
          />
          {streakType} Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 sm:space-y-3 pt-0 p-3 sm:p-4">
        <div className="text-center">
          <div
            className={`text-2xl sm:text-3xl font-bold ${getStreakColor(currentStreak)}`}
          >
            {currentStreak}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground">
            days
          </div>
          <Badge
            variant="outline"
            className="mt-1 sm:mt-1.5 text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5"
          >
            {getStreakLevel(currentStreak)}
          </Badge>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-xs border-t pt-2 sm:pt-3">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Personal Best</span>
          </div>
          <span className="font-semibold">{longestStreak} days</span>
        </div>

        {lastActivity && (
          <div className="flex items-center justify-between text-[10px] sm:text-xs">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-muted-foreground" />
              <span className="text-muted-foreground">Last Activity</span>
            </div>
            <span className="font-medium">{lastActivity}</span>
          </div>
        )}

        {/* Streak visualization */}
        <div className="grid grid-cols-7 gap-0.5 mt-2 sm:mt-3">
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={i}
              className={`h-1.5 sm:h-2 w-full rounded-sm ${
                i < currentStreak % 7
                  ? "bg-primary"
                  : currentStreak >= 7 && i === 6
                    ? "bg-primary"
                    : "bg-muted"
              }`}
            />
          ))}
        </div>
        <div className="text-[9px] sm:text-[10px] text-center text-muted-foreground">
          This week's progress
        </div>
      </CardContent>
    </Card>
  );
}
