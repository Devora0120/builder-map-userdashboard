import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Construction } from "lucide-react";

export default function NetworkPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader className="text-center">
            <div className="mx-auto h-16 w-16 bg-warning/10 rounded-full flex items-center justify-center mb-4">
              <Construction className="h-8 w-8 text-warning" />
            </div>
            <CardTitle className="flex items-center gap-2 justify-center">
              <Users className="h-5 w-5" />
              Networking & Community
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">This module will include:</p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-sm">
              <li>• Professional networking connections tracking</li>
              <li>• Peer comparison and leaderboards</li>
              <li>• Mentorship opportunities</li>
              <li>• Industry event recommendations</li>
              <li>• Alumni network integration</li>
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
