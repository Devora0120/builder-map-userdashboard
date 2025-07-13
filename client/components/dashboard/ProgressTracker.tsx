import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Users,
} from "lucide-react";

const progressData = [
  {
    domain: "Academics",
    progress: 85,
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
    milestones: 8,
    total: 10,
  },
  {
    domain: "Research",
    progress: 60,
    icon: Target,
    color: "text-info",
    bgColor: "bg-info/10",
    milestones: 3,
    total: 5,
  },
  {
    domain: "Leadership",
    progress: 75,
    icon: Award,
    color: "text-accent",
    bgColor: "bg-accent/10",
    milestones: 6,
    total: 8,
  },
  {
    domain: "Networking",
    progress: 45,
    icon: Users,
    color: "text-warning",
    bgColor: "bg-warning/10",
    milestones: 4,
    total: 9,
  },
];

const recentMilestones = [
  {
    title: "Completed Data Structures Course",
    domain: "Academics",
    date: "2 days ago",
    impact: "+5% admit probability",
  },
  {
    title: "Published Research Paper",
    domain: "Research",
    date: "1 week ago",
    impact: "+8% admit probability",
  },
  {
    title: "Led Programming Workshop",
    domain: "Leadership",
    date: "2 weeks ago",
    impact: "+3% admit probability",
  },
];

export default function ProgressTracker() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">
            Progress Tracker
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Track your development across all domains
          </p>
        </div>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" className="text-xs px-2">
            <Calendar className="h-3 w-3 mr-1" />
            <span className="hidden xs:inline">Quarter</span>
            <span className="xs:hidden">Q</span>
          </Button>
          <Button variant="outline" size="sm" className="text-xs px-2">
            <Clock className="h-3 w-3 mr-1" />
            <span className="hidden xs:inline">Timeline</span>
            <span className="xs:hidden">T</span>
          </Button>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {progressData.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.domain} className="relative overflow-hidden">
              <CardHeader className="pb-2 p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className={`p-1 sm:p-1.5 rounded-md ${item.bgColor}`}>
                    <Icon className={`h-3 w-3 sm:h-4 sm:w-4 ${item.color}`} />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5"
                  >
                    {item.milestones}/{item.total}
                  </Badge>
                </div>
                <CardTitle className="text-xs sm:text-sm font-semibold truncate">
                  {item.domain}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 p-3 sm:p-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-1 sm:h-1.5" />
                  <div className="flex items-center text-[9px] sm:text-[10px] text-muted-foreground">
                    <TrendingUp className="h-2 w-2 sm:h-2.5 sm:w-2.5 mr-1" />
                    <span className="truncate">
                      {item.milestones} milestones
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Milestones */}
      <Card>
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
            <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-success" />
            Recent Milestones
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            {recentMilestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2.5 sm:p-3 rounded-md border bg-card/50 hover:bg-card transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-xs sm:text-sm text-foreground truncate">
                    {milestone.title}
                  </h4>
                  <div className="flex items-center gap-2 sm:gap-3 mt-0.5">
                    <Badge
                      variant="outline"
                      className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5"
                    >
                      {milestone.domain}
                    </Badge>
                    <span className="text-[9px] sm:text-[10px] text-muted-foreground">
                      {milestone.date}
                    </span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-success">
                    {milestone.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
