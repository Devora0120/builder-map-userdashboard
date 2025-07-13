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
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Admit Probability Dashboard
          </h2>
          <p className="text-muted-foreground text-sm">
            Live probability estimator with strategic insights
          </p>
        </div>
        <Button size="sm" className="gap-1.5">
          <Zap className="h-3.5 w-3.5" />
          Optimize
        </Button>
      </div>

      {/* Main Probability Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Target className="h-4 w-4 text-primary" />
              Admission Probability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            {/* Main Gauge */}
            <div className="flex items-center justify-center">
              <div className="relative w-36 h-36">
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
                  <span className="text-3xl font-bold text-primary">
                    {currentProbability}%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Current Probability
                  </span>
                </div>
              </div>
            </div>

            {/* Target Progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">
                  Target: {targetProbability}%
                </span>
                <span className="text-xs text-muted-foreground">
                  {targetProbability - currentProbability}% to go
                </span>
              </div>
              <Progress
                value={(currentProbability / targetProbability) * 100}
                className="h-1.5"
              />
            </div>

            {/* Trend */}
            <div className="flex items-center justify-between pt-3 border-t">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-3 w-3 text-success" />
                <span className="text-xs text-success font-medium">
                  +10% this semester
                </span>
              </div>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0.5">
                Top 25% of peers
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Scholarship Probability */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Award className="h-4 w-4 text-accent" />
              Scholarship Odds
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">Merit Scholarship</span>
                <span className="font-semibold text-accent text-sm">65%</span>
              </div>
              <Progress value={65} className="h-1.5" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">Research Fellowship</span>
                <span className="font-semibold text-info text-sm">42%</span>
              </div>
              <Progress value={42} className="h-1.5" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">Teaching Assistantship</span>
                <span className="font-semibold text-success text-sm">71%</span>
              </div>
              <Progress value={71} className="h-1.5" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Strengths Radar */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">
            Profile Strengths Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {profileStrengths.map((strength) => (
              <div key={strength.domain} className="text-center space-y-1">
                <div className="relative w-12 h-12 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--muted))"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--primary))"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${strength.score * 2.51} 251.2`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">{strength.score}</span>
                  </div>
                </div>
                <div className="text-[10px] font-medium text-center">
                  {strength.domain}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Zap className="h-4 w-4 text-warning" />
            What Moves the Needle
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            {impactfulActions.map((action, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-md border bg-card/50 hover:bg-card transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-foreground">
                    {action.action}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Badge
                      variant="outline"
                      className="text-[10px] px-1.5 py-0.5"
                    >
                      {action.category}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground">
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
                      className="text-[10px] px-1.5 py-0.5"
                    >
                      {action.difficulty}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-success">
                    {action.impact}
                  </span>
                  <div className="text-[10px] text-muted-foreground">
                    impact
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
