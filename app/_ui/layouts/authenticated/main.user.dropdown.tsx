"use client";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import { Button } from "@/components/shadcn/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/popover";
import { Separator } from "@/components/shadcn/separator";
import { Settings, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const UserDropdown = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await signOut();

    router.refresh();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full hover:bg-accent transition-colors">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2"
              alt="User avatar"
            />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0" align="end">
        <div className="flex items-center space-x-3 p-4 border-b">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2"
              alt="User avatar"
            />
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
          </div>
        </div>
        <div className="p-2">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Separator className="my-2" />
          <Button
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className="w-full justify-start text-destructive hover:text-destructive"
          >
            Sign out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserDropdown;
