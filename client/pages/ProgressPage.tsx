import DashboardLayout from "@/components/layout/DashboardLayout";
import ProgressTracker from "@/components/dashboard/ProgressTracker";

export default function ProgressPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <ProgressTracker />
      </div>
    </DashboardLayout>
  );
}
