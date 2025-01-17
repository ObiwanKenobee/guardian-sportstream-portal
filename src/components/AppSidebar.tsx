import {
  BarChart3,
  Users,
  Trophy,
  DollarSign,
  Home,
  Heart,
  Ticket,
  Leaf,
  PiggyBank,
  Shield,
  BarChart2,
  Users2,
  HelpCircle,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard Home", icon: Home, link: "/" },
  { title: "Fan Engagement Hub", icon: Heart, link: "/fan-engagement" },
  { title: "Player Performance", icon: Trophy, link: "/player-performance" },
  { title: "Ticketing", icon: Ticket, link: "/ticketing" },
  { title: "Sustainability", icon: Leaf, link: "/sustainability" },
  { title: "Financial", icon: PiggyBank, link: "/financial" },
  { title: "Security", icon: Shield, link: "/security" },
  { title: "Analytics", icon: BarChart2, link: "/analytics" },
  { title: "Collaboration", icon: Users2, link: "/collaboration" },
  { title: "Help & Support", icon: HelpCircle, link: "/help" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-bold">Guardian-IO Sports Mode</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.link} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 space-y-2">
        <Button className="w-full" variant="outline">Request a Demo</Button>
        <Button className="w-full">Talk to Our Team</Button>
      </SidebarFooter>
    </Sidebar>
  );
}