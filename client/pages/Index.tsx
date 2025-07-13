import DashboardLayout from "@/components/layout/DashboardLayout";
import ProgressTracker from "@/components/dashboard/ProgressTracker";
import AdmitProbability from "@/components/dashboard/AdmitProbability";
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
      <div className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, Alex! 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              You're on track to achieve your goals. Keep up the great work!
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Activity
            </Button>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Current GPA
                  </p>
                  <p className="text-2xl font-bold text-success">3.7</p>
                </div>
                <div className="h-12 w-12 bg-success/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-xs">
                <span className="text-success">+0.2</span>
                <span className="text-muted-foreground ml-1">
                  from last semester
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Admit Probability
                  </p>
                  <p className="text-2xl font-bold text-primary">78%</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-xs">
                <span className="text-success">+10%</span>
                <span className="text-muted-foreground ml-1">
                  this semester
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Active Courses
                  </p>
                  <p className="text-2xl font-bold">6</p>
                </div>
                <div className="h-12 w-12 bg-info/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-info" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-xs">
                <span className="text-muted-foreground">18 credits total</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Weekly Checkin
                  </p>
                  <p className="text-2xl font-bold">
                    {weeklyCheckin.completed ? (
                      <CheckCircle className="h-8 w-8 text-success" />
                    ) : (
                      <Clock className="h-8 w-8 text-warning" />
                    )}
                  </p>
                </div>
                <div className="h-12 w-12 bg-warning/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-warning" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-xs">
                <span className="text-muted-foreground">
                  Week {weeklyCheckin.weekNumber}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Progress Tracker */}
          <div className="xl:col-span-2">
            <ProgressTracker />
          </div>

          {/* Right Column - Upcoming Tasks */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-warning" />
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border bg-card/50"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{task.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {task.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
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
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weekly Check-in Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Weekly Check-in
                </CardTitle>
              </CardHeader>
              <CardContent>
                {weeklyCheckin.completed ? (
                  <div className="text-center py-4">
                    <CheckCircle className="h-12 w-12 text-success mx-auto mb-2" />
                    <p className="font-medium text-success">Complete!</p>
                    <p className="text-sm text-muted-foreground">
                      You logged {weeklyCheckin.wins} wins and{" "}
                      {weeklyCheckin.focusPoints} focus points this week.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Log your weekly progress to maintain consistency
                    </p>
                    <Button className="w-full">
                      Complete Week {weeklyCheckin.weekNumber} Check-in
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Admit Probability Section */}
        <div className="mt-8">
          <AdmitProbability />
        </div>
      </div>
    </DashboardLayout>
  );
}
