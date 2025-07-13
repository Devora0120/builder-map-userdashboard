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
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Progress Tracker
          </h2>
          <p className="text-muted-foreground text-sm">
            Track your development across all domains
          </p>
        </div>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" className="text-xs px-2">
            <Calendar className="h-3 w-3 mr-1" />
            Quarter
          </Button>
          <Button variant="outline" size="sm" className="text-xs px-2">
            <Clock className="h-3 w-3 mr-1" />
            Timeline
          </Button>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {progressData.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.domain} className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-1.5 rounded-md ${item.bgColor}`}>
                    <Icon className={`h-4 w-4 ${item.color}`} />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0.5"
                  >
                    {item.milestones}/{item.total}
                  </Badge>
                </div>
                <CardTitle className="text-sm font-semibold">
                  {item.domain}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-1.5" />
                  <div className="flex items-center text-[10px] text-muted-foreground">
                    <TrendingUp className="h-2.5 w-2.5 mr-1" />
                    {item.milestones} milestones completed
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Milestones */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <CheckCircle className="h-4 w-4 text-success" />
            Recent Milestones
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            {recentMilestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-md border bg-card/50 hover:bg-card transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-foreground">
                    {milestone.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-0.5">
                    <Badge
                      variant="outline"
                      className="text-[10px] px-1.5 py-0.5"
                    >
                      {milestone.domain}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground">
                      {milestone.date}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-success">
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
