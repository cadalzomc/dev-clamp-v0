import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/popover";
import { ScrollArea } from "@/components/shadcn/scroll-area";
import { Separator } from "@/components/shadcn/separator";
import { Clock, Mail, MessageCircle } from "lucide-react";

const MessageDropdown = () => {
  const messages = [
    {
      id: 1,
      sender: "Alex Johnson",
      message: "Hey, can we discuss the new feature requirements?",
      time: "5 minutes ago",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
      unread: true,
    },
    {
      id: 2,
      sender: "Sarah Chen",
      message: "The design mockups are ready for review",
      time: "1 hour ago",
      avatar:
        "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
      unread: true,
    },
    {
      id: 3,
      sender: "Mike Wilson",
      message: "Great work on the presentation today!",
      time: "2 hours ago",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
      unread: false,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="relative hover:bg-accent transition-colors">
          <MessageCircle className="h-5 w-5" />
          <Badge
            variant="secondary"
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            2
          </Badge>
          <span className="sr-only">Messages</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-foreground">Messages</h3>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
            <Mail className="w-3 h-3 mr-1" />
            Compose
          </Button>
        </div>
        <ScrollArea className="h-80">
          <div className="p-2">
            {messages.map((message, index) => (
              <div key={message.id}>
                <div
                  className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer ${
                    message.unread ? "bg-accent/20" : ""
                  }`}
                >
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarImage src={message.avatar} alt={message.sender} />
                    <AvatarFallback className="text-xs">
                      {message.sender
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground truncate">{message.sender}</p>
                      {message.unread && <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{message.message}</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {message.time}
                    </div>
                  </div>
                </div>
                {index < messages.length - 1 && <Separator className="my-1" />}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-3 border-t">
          <Button variant="outline" size="sm" className="w-full">
            View all messages
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MessageDropdown;
