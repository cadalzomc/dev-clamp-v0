"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { Separator } from "@/components/shadcn/separator";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import { CInput } from "@/components/custom";
import { FormValues } from "@/lib/common";
import { IPayloadLogin } from "@/lib/models";
import { IconFacebook, IconGoogle } from "@/components/icons";
import { toast } from "sonner";

export const SignInDialog = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const values = FormValues<IPayloadLogin>(e);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (!res?.ok) {
      setLoading(false);
      toast.error("Invalid Username or Password");
      return;
    }

    console.log(res);
    toast.success("Authenticaton", {
      description: "👍 Logging in is successful",
    });

    setLoading(false);
    setOpen(false);

    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!loading) {
          setOpen(nextOpen);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="ghost" className="font-medium">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-3">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <LogIn className="h-5 w-5" />
            Welcome Back
          </DialogTitle>
          <DialogDescription>
            Sign in to your account to continue
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <CInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            startIcon={<Mail className="h-4 w-4" />}
            required
          />

          <CInput
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your email"
            startIcon={<Lock className="h-4 w-4" />}
            endIcon={
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-muted-foreground" />
                ) : (
                  <Eye className="size-5 text-muted-foreground" />
                )}
              </Button>
            }
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Remember me</span>
            </label>
            <Button variant="link" className="p-0 h-auto text-sm">
              Forgot password?
            </Button>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" type="button" disabled={loading}>
              <IconGoogle className="mr-2 h-4 w-4" />
              Google
            </Button>
            <Button variant="outline" type="button" disabled={loading}>
              <IconFacebook className="mr-2 h-4 w-4 fill-current" />
              Facebook
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
