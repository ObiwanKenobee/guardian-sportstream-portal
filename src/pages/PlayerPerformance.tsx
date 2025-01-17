import { Activity, Heart, Brain, Trophy, Target, Battery, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";

const PlayerPerformance = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Player Performance Hub</h1>
        <div className="space-x-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>All Players</option>
            <option>First Team</option>
            <option>Youth Academy</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Average Team Fitness"
          value="87%"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 5, isPositive: true }}
        />
        <MetricCard
          title="Injury Risk Level"
          value="Low"
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 2, isPositive: true }}
        />
        <MetricCard
          title="Team Performance"
          value="92%"
          icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 8, isPositive: true }}
        />
        <MetricCard
          title="Training Completion"
          value="95%"
          icon={<Target className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      {/* Main Sections */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Health & Wellness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Mental Wellness Score</span>
                <span className="font-semibold">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Physical Recovery</span>
                <span className="font-semibold">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sleep Quality</span>
                <span className="font-semibold">88%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Battery className="h-5 w-5" />
              Training Load
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Weekly Load</span>
                <span className="font-semibold">Optimal</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Intensity Level</span>
                <span className="font-semibold">Medium</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Recovery Needed</span>
                <span className="font-semibold">6 hours</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Performance Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Speed</span>
                <span className="font-semibold">↑ 3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Stamina</span>
                <span className="font-semibold">↑ 5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Strength</span>
                <span className="font-semibold">↑ 2%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Content Placeholder */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Training Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Training session data visualization coming soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Injury Prevention Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">AI-powered injury prevention recommendations coming soon</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlayerPerformance;