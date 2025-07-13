import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  Target,
  Award,
  BookOpen,
  Users,
  FileText,
  Zap,
} from "lucide-react";

const currentProbability = 78;
const targetProbability = 85;

const profileStrengths = [
  { domain: "Academics", score: 85, maxScore: 100 },
  { domain: "Research", score: 70, maxScore: 100 },
  { domain: "Leadership", score: 75, maxScore: 100 },
  { domain: "Networking", score: 45, maxScore: 100 },
  { domain: "Experience", score: 60, maxScore: 100 },
  { domain: "Standardized Tests", score: 90, maxScore: 100 },
];

const impactfulActions = [
  {
    action: "Complete Machine Learning Certification",
    impact: "+4%",
    difficulty: "Medium",
    timeframe: "2 months",
    category: "Academics",
  },
  {
    action: "Publish Research Paper",
    impact: "+8%",
    difficulty: "High",
    timeframe: "4 months",
    category: "Research",
  },
  {
    action: "Lead Campus Initiative",
    impact: "+3%",
    difficulty: "Medium",
    timeframe: "3 months",
    category: "Leadership",
  },
];

const admissionTrends = [
  { month: "Jan", probability: 68 },
  { month: "Feb", probability: 71 },
  { month: "Mar", probability: 74 },
  { month: "Apr", probability: 76 },
  { month: "May", probability: 78 },
];

export default function AdmitProbability() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Admit Probability Dashboard
          </h2>
          <p className="text-muted-foreground">
            Live probability estimator with strategic insights
          </p>
        </div>
        <Button className="gap-2">
          <Zap className="h-4 w-4" />
          Optimize Strategy
        </Button>
      </div>

      {/* Main Probability Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Admission Probability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Gauge */}
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--muted))"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--primary))"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${currentProbability * 2.51} 251.2`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {currentProbability}%
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Current Probability
                  </span>
                </div>
              </div>
            </div>

            {/* Target Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Target: {targetProbability}%
                </span>
                <span className="text-sm text-muted-foreground">
                  {targetProbability - currentProbability}% to go
                </span>
              </div>
              <Progress
                value={(currentProbability / targetProbability) * 100}
                className="h-2"
              />
            </div>

            {/* Trend */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="text-sm text-success font-medium">
                  +10% this semester
                </span>
              </div>
              <Badge variant="outline">Top 25% of peers</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Scholarship Probability */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Scholarship Odds
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Merit Scholarship</span>
                <span className="font-semibold text-accent">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Research Fellowship</span>
                <span className="font-semibold text-info">42%</span>
              </div>
              <Progress value={42} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Teaching Assistantship</span>
                <span className="font-semibold text-success">71%</span>
              </div>
              <Progress value={71} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Strengths Radar */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Strengths Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {profileStrengths.map((strength) => (
              <div key={strength.domain} className="text-center space-y-2">
                <div className="relative w-16 h-16 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--muted))"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${strength.score * 2.51} 251.2`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">{strength.score}</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-center">
                  {strength.domain}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-warning" />
            What Moves the Needle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {impactfulActions.map((action, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">
                    {action.action}
                  </h4>
                  <div className="flex items-center gap-4 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {action.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {action.timeframe}
                    </span>
                    <Badge
                      variant={
                        action.difficulty === "High"
                          ? "destructive"
                          : action.difficulty === "Medium"
                            ? "secondary"
                            : "default"
                      }
                      className="text-xs"
                    >
                      {action.difficulty}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-success">
                    {action.impact}
                  </span>
                  <div className="text-xs text-muted-foreground">impact</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
