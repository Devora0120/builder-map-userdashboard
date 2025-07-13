import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Construction } from "lucide-react";

export default function GPABoosterPage() {
  return (
    <DashboardLayout>
      <div className="p-4">
        <Card className="max-w-lg mx-auto mt-8">
          <CardHeader className="text-center pb-3">
            <div className="mx-auto h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
              <Construction className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="flex items-center gap-2 justify-center text-lg">
              <Target className="h-4 w-4" />
              Personalized GPA Booster Tool
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-3 pt-0">
            <p className="text-muted-foreground text-sm">
              This module will include:
            </p>
            <ul className="text-left max-w-sm mx-auto space-y-1 text-xs">
              <li>• "What-If" GPA scenarios based on course strategies</li>
              <li>• Prioritization prompts (high weight, low difficulty)</li>
              <li>• Optimized study roadmap generation</li>
              <li>• Strategic course selection recommendations</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-3">
              Coming soon! This feature is currently in development.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
