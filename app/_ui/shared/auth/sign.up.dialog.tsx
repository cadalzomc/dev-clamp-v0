"use client";

import React, { FormEvent, useState } from "react";
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
import { Eye, EyeOff, Lock, Mail, User, UserPlus } from "lucide-react";
import { CInput } from "@/components/custom";
import { ECode, IPayloadRegister, IPayloadUser } from "@/lib/models";
import { FormValues } from "@/lib/common";
import { toast } from "sonner";
import { TRPC } from "@/lib/utils";
import { IconFacebook, IconGoogle } from "@/components/icons";

export const SignUpDialog = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate: create, isPending } = TRPC.user.create.useMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = FormValues<IPayloadRegister>(e);

    if (value.password !== value.confirmPassword) {
      toast.error("Register", { description: "Passwords does not match" });
      return;
    }

    const payload: IPayloadUser = {
      name: value.name,
      email: value.email,
      password: value.password,
    };

    create(payload, {
      onSuccess: (res) => {
        if (res?.code !== ECode.Success) {
          toast.error("Register", { description: res?.message });
          return;
        }
        toast.success("Register", { description: res.message });
        setOpen(false);
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="font-medium">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-3">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <UserPlus className="h-5 w-5" />
            Create Account
          </DialogTitle>
          <DialogDescription>Sign up for a new account to get started</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <CInput
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your Fullname"
            startIcon={<User className="h-4 w-4" />}
            required
          />

          <CInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            startIcon={<Mail className="h-4 w-4" />}
            required
          />

          <CInput
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password"
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

          <CInput
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your Password"
            startIcon={<Lock className="h-4 w-4" />}
            endIcon={
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="px-3 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="size-5 text-muted-foreground" />
                ) : (
                  <Eye className="size-5 text-muted-foreground" />
                )}
              </Button>
            }
            required
          />

          <div className="text-xs text-muted-foreground">
            <label className="flex items-start space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 mt-0.5" required />
              <span>
                I agree to the{" "}
                <Button variant="link" className="p-0 h-auto text-xs">
                  Terms of Service
                </Button>{" "}
                and{" "}
                <Button variant="link" className="p-0 h-auto text-xs">
                  Privacy Policy
                </Button>
              </span>
            </label>
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating account..." : "Create Account"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" type="button" disabled={isPending}>
              <IconGoogle className="mr-2 h-4 w-4" />
              Google
            </Button>
            <Button variant="outline" type="button" disabled={isPending}>
              <IconFacebook className="mr-2 h-4 w-4 fill-current" />
              Facebook
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
