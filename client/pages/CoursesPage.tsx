import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Construction } from "lucide-react";

export default function CoursesPage() {
  return (
    <DashboardLayout>
      <div className="p-4">
        <Card className="max-w-lg mx-auto mt-8">
          <CardHeader className="text-center pb-3">
            <div className="mx-auto h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Construction className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="flex items-center gap-2 justify-center text-lg">
              <BookOpen className="h-4 w-4" />
              Semester-Wise Course Display
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-3 pt-0">
            <p className="text-muted-foreground text-sm">
              This module will include:
            </p>
            <ul className="text-left max-w-sm mx-auto space-y-1 text-xs">
              <li>• Subjects, credits, and course types</li>
              <li>• GPA-maximizing potential analysis</li>
              <li>• Exploration links (case studies, internships)</li>
              <li>• Credit pie charts and GPA impact meters</li>
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
