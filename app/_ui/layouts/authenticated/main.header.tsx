"use client";

import UserDropdown from "./main.user.dropdown";
import MessageDropdown from "./main.message.dropdown";
import NotificationDropdown from "./main.notification.dropdown";

const AuthHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
        </div>

        <nav className="flex items-center gap-3 space-x-2">
          <NotificationDropdown />
          <MessageDropdown />
          <UserDropdown />
        </nav>
      </div>
    </header>
  );
};

export default AuthHeader;
