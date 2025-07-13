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
        "relative overflow-hidden transition-all duration-300 hover:scale-[1.02]",
        unlocked ? "opacity-100" : "opacity-60",
      )}
    >
      <CardContent className="p-2.5 sm:p-3">
        <div className="flex items-start gap-1.5 sm:gap-2">
          <div
            className={cn(
              "p-1.5 sm:p-2 rounded-full shrink-0",
              unlocked
                ? variantStyles[variant]
                : "bg-muted text-muted-foreground",
            )}
          >
            <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-xs sm:text-sm text-foreground truncate">
              {title}
            </h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
              {description}
            </p>

            {!unlocked && maxProgress > 1 && (
              <div className="mt-1.5 sm:mt-2">
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">
                    {progress}/{maxProgress}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-0.5 sm:h-1">
                  <div
                    className="bg-primary h-0.5 sm:h-1 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            )}

            {unlocked && (
              <Badge
                variant="outline"
                className="mt-1 sm:mt-1.5 text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5"
              >
                Unlocked!
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
