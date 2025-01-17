import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

const activities = [
  { id: 1, text: "New season tickets released", time: "2 hours ago" },
  { id: 2, text: "Match report uploaded", time: "5 hours ago" },
  { id: 3, text: "Fan engagement up by 15%", time: "1 day ago" },
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
              <div className="space-y-1">
                <p className="text-sm">{activity.text}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}