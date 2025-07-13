import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Construction } from "lucide-react";

export default function NetworkPage() {
  return (
    <DashboardLayout>
      <div className="p-4">
        <Card className="max-w-lg mx-auto mt-8">
          <CardHeader className="text-center pb-3">
            <div className="mx-auto h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center mb-3">
              <Construction className="h-6 w-6 text-warning" />
            </div>
            <CardTitle className="flex items-center gap-2 justify-center text-lg">
              <Users className="h-4 w-4" />
              Networking & Community
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-3 pt-0">
            <p className="text-muted-foreground text-sm">
              This module will include:
            </p>
            <ul className="text-left max-w-sm mx-auto space-y-1 text-xs">
              <li>• Professional networking connections tracking</li>
              <li>• Peer comparison and leaderboards</li>
              <li>• Mentorship opportunities</li>
              <li>• Industry event recommendations</li>
              <li>• Alumni network integration</li>
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
