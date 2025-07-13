import DashboardLayout from "@/components/layout/DashboardLayout";
import ProgressTracker from "@/components/dashboard/ProgressTracker";
import AdmitProbability from "@/components/dashboard/AdmitProbability";
import AchievementBadge from "@/components/gamification/AchievementBadge";
import StreakCounter from "@/components/gamification/StreakCounter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  CheckCircle,
  Clock,
  Plus,
  TrendingUp,
  Award,
  BookOpen,
} from "lucide-react";

const upcomingTasks = [
  {
    title: "Submit Research Proposal",
    category: "Research",
    deadline: "3 days",
    priority: "high",
  },
  {
    title: "Complete Data Analytics Course",
    category: "Academics",
    deadline: "1 week",
    priority: "medium",
  },
  {
    title: "Attend Networking Event",
    category: "Networking",
    deadline: "2 weeks",
    priority: "low",
  },
];

const weeklyCheckin = {
  completed: false,
  wins: 2,
  focusPoints: 1,
  weekNumber: 18,
};

export default function Index() {
  return (
    <DashboardLayout>
      <div className="p-4 space-y-5">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Welcome back, Alex! 👋
            </h1>
            <p className="text-muted-foreground text-sm mt-0.5">
              You're on track to achieve your goals. Keep up the great work!
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="gap-1.5">
              <Plus className="h-3.5 w-3.5" />
              Add Activity
            </Button>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Current GPA
                  </p>
                  <p className="text-xl font-bold text-success">3.7</p>
                </div>
                <div className="h-9 w-9 bg-success/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-xs">
                <span className="text-success font-medium">+0.2</span>
                <span className="text-muted-foreground ml-1">
                  from last semester
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Admit Probability
                  </p>
                  <p className="text-xl font-bold text-primary">78%</p>
                </div>
                <div className="h-9 w-9 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-xs">
                <span className="text-success font-medium">+10%</span>
                <span className="text-muted-foreground ml-1">
                  this semester
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Active Courses
                  </p>
                  <p className="text-xl font-bold">6</p>
                </div>
                <div className="h-9 w-9 bg-info/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-info" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-xs">
                <span className="text-muted-foreground">18 credits total</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Weekly Checkin
                  </p>
                  <p className="text-xl font-bold">
                    {weeklyCheckin.completed ? (
                      <CheckCircle className="h-6 w-6 text-success" />
                    ) : (
                      <Clock className="h-6 w-6 text-warning" />
                    )}
                  </p>
                </div>
                <div className="h-9 w-9 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-warning" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-xs">
                <span className="text-muted-foreground">
                  Week {weeklyCheckin.weekNumber}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {/* Left Column - Progress Tracker */}
          <div className="xl:col-span-2">
            <ProgressTracker />
          </div>

          {/* Right Column - Upcoming Tasks */}
          <div className="space-y-4">
            {/* Gamification Section */}
            <StreakCounter
              currentStreak={12}
              longestStreak={28}
              streakType="Study"
              lastActivity="Today"
            />

            <div className="space-y-2">
              <h3 className="font-medium text-xs text-muted-foreground uppercase tracking-wide">
                Recent Achievements
              </h3>
              <AchievementBadge
                title="Academic Excellence"
                description="Maintain 3.5+ GPA for 2 semesters"
                icon="trophy"
                variant="gold"
                unlocked={true}
              />
              <AchievementBadge
                title="Research Pioneer"
                description="Publish your first research paper"
                icon="star"
                variant="silver"
                unlocked={false}
                progress={3}
                maxProgress={5}
              />
            </div>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Clock className="h-4 w-4 text-warning" />
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                {upcomingTasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2.5 rounded-md border bg-card/50"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-xs">{task.title}</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Badge
                          variant="outline"
                          className="text-[10px] px-1.5 py-0.5"
                        >
                          {task.category}
                        </Badge>
                        <span className="text-[10px] text-muted-foreground">
                          Due in {task.deadline}
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        task.priority === "high"
                          ? "destructive"
                          : task.priority === "medium"
                            ? "secondary"
                            : "default"
                      }
                      className="text-[10px] px-1.5 py-0.5"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weekly Check-in Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Calendar className="h-4 w-4 text-primary" />
                  Weekly Check-in
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {weeklyCheckin.completed ? (
                  <div className="text-center py-3">
                    <CheckCircle className="h-10 w-10 text-success mx-auto mb-2" />
                    <p className="font-medium text-success text-sm">
                      Complete!
                    </p>
                    <p className="text-xs text-muted-foreground">
                      You logged {weeklyCheckin.wins} wins and{" "}
                      {weeklyCheckin.focusPoints} focus points this week.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-xs text-muted-foreground">
                      Log your weekly progress to maintain consistency
                    </p>
                    <Button size="sm" className="w-full">
                      Complete Week {weeklyCheckin.weekNumber} Check-in
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Admit Probability Section */}
        <div className="mt-6">
          <AdmitProbability />
        </div>
      </div>
    </DashboardLayout>
  );
}
