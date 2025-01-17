import { BarChart3, Users, Trophy, DollarSign } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { ActivityFeed } from "@/components/ActivityFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Guardian-IO Sports Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <MetricCard
            title="Total Revenue"
            value="$1.2M"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Fan Engagement"
            value="85%"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 8, isPositive: true }}
          />
          <MetricCard
            title="Match Performance"
            value="76%"
            icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 5, isPositive: true }}
          />
          <MetricCard
            title="Ticket Sales"
            value="2.4K"
            icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 3, isPositive: false }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Performance Overview</h2>
            <Card className="p-6">
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Performance Chart Coming Soon
              </div>
            </Card>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Latest Updates</h2>
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;