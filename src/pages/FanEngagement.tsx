import { Heart, Users, Trophy, MessageCircle, Smartphone, Share2, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";

const FanEngagement = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Fan Engagement Hub</h1>
        <p className="text-muted-foreground">
          Build stronger connections with your fans through personalized experiences and data-driven insights.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Fanbase"
          value="125.4K"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Engagement Rate"
          value="85%"
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 8, isPositive: true }}
        />
        <MetricCard
          title="Loyalty Points"
          value="2.4M"
          icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 15, isPositive: true }}
        />
        <MetricCard
          title="Active Campaigns"
          value="8"
          icon={<MessageCircle className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Fan Demographics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Demographics Chart Coming Soon
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Social Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Social Media Analytics Coming Soon
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Fan Meet & Greet", date: "Next Tuesday" },
                { title: "Virtual Stadium Tour", date: "This Friday" },
                { title: "Season Ticket Holder Event", date: "Next Month" }
              ].map((event, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Loyalty Program
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { tier: "Bronze", members: "45K", growth: "+5%" },
                { tier: "Silver", members: "28K", growth: "+8%" },
                { tier: "Gold", members: "12K", growth: "+12%" }
              ].map((tier, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{tier.tier}</p>
                    <p className="text-sm text-muted-foreground">{tier.members} members</p>
                  </div>
                  <span className="text-green-600 text-sm">{tier.growth}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Fan Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { topic: "Match Experience", score: "4.5/5" },
                { topic: "Mobile App", score: "4.2/5" },
                { topic: "Customer Service", score: "4.8/5" }
              ].map((feedback, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="font-medium">{feedback.topic}</p>
                  <span className="text-sm">{feedback.score}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Digital Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { platform: "Mobile App", users: "85K active users" },
                { platform: "Website", users: "120K monthly visits" },
                { platform: "Social Media", users: "250K followers" }
              ].map((digital, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="font-medium">{digital.platform}</p>
                  <span className="text-sm text-muted-foreground">{digital.users}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FanEngagement;