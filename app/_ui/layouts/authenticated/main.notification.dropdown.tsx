import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/popover";
import { ScrollArea } from "@/components/shadcn/scroll-area";
import { Separator } from "@/components/shadcn/separator";
import { Bell, Clock } from "lucide-react";

const NotificationDropdown = () => {
  const notifications = [
    {
      id: 1,
      title: "New project assigned",
      description: "You've been assigned to the Mobile App redesign project",
      time: "2 minutes ago",
      unread: true,
    },
    {
      id: 2,
      title: "Meeting reminder",
      description: "Team standup meeting starts in 15 minutes",
      time: "10 minutes ago",
      unread: true,
    },
    {
      id: 3,
      title: "Task completed",
      description: "Sarah completed the wireframe review task",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 4,
      title: "System update",
      description: "Platform maintenance scheduled for tonight",
      time: "3 hours ago",
      unread: false,
    },
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="relative hover:bg-accent transition-colors">
          <Bell className="h-5 w-5" />
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-pulse"
          >
            3
          </Badge>
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-foreground">Notifications</h3>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
            Mark all read
          </Button>
        </div>
        <ScrollArea className="h-80">
          <div className="p-2">
            {notifications.map((notification, index) => (
              <div key={notification.id}>
                <div
                  className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer ${
                    notification.unread ? "bg-accent/20" : ""
                  }`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-2 h-2 rounded-full ${notification.unread ? "bg-primary" : "bg-muted"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{notification.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{notification.description}</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                </div>
                {index < notifications.length - 1 && <Separator className="my-1" />}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-3 border-t">
          <Button variant="outline" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationDropdown;
