import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Construction } from "lucide-react";

export default function ResearchPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader className="text-center">
            <div className="mx-auto h-16 w-16 bg-info/10 rounded-full flex items-center justify-center mb-4">
              <Construction className="h-8 w-8 text-info" />
            </div>
            <CardTitle className="flex items-center gap-2 justify-center">
              <FileText className="h-5 w-5" />
              Research Paper Archive
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">This module will include:</p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-sm">
              <li>• Research paper title, status, and co-author tracking</li>
              <li>• Timeline tracker with milestone visualization</li>
              <li>• Gantt view for overlapping projects</li>
              <li>• Discipline-based color coding</li>
              <li>• Attachment and notes management</li>
            </ul>
            <p className="text-sm text-muted-foreground pt-4">
              Coming soon! This feature is currently in development.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
