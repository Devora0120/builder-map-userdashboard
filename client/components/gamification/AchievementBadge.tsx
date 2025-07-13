import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Trophy, Star, Target, Zap } from "lucide-react";

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon?: "trophy" | "star" | "target" | "zap";
  variant?: "gold" | "silver" | "bronze" | "default";
  unlocked?: boolean;
  progress?: number;
  maxProgress?: number;
}

const iconMap = {
  trophy: Trophy,
  star: Star,
  target: Target,
  zap: Zap,
};

const variantStyles = {
  gold: "bg-gradient-to-br from-yellow-400 to-yellow-600 text-yellow-50",
  silver: "bg-gradient-to-br from-gray-300 to-gray-500 text-gray-50",
  bronze: "bg-gradient-to-br from-orange-400 to-orange-600 text-orange-50",
  default: "bg-gradient-to-br from-primary/20 to-primary/40 text-primary",
};

export default function AchievementBadge({
  title,
  description,
  icon = "trophy",
  variant = "default",
  unlocked = false,
  progress = 0,
  maxProgress = 1,
}: AchievementBadgeProps) {
  const Icon = iconMap[icon];
  const progressPercentage =
    maxProgress > 0 ? (progress / maxProgress) * 100 : 0;

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:scale-105",
        unlocked ? "opacity-100" : "opacity-60",
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div
            className={cn(
              "p-3 rounded-full shrink-0",
              unlocked
                ? variantStyles[variant]
                : "bg-muted text-muted-foreground",
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>

            {!unlocked && maxProgress > 1 && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">
                    {progress}/{maxProgress}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            )}

            {unlocked && (
              <Badge variant="outline" className="mt-2 text-xs">
                Unlocked!
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
