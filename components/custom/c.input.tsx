"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../shadcn/label";

export interface ICustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: string;
}

const CInput = React.forwardRef<HTMLInputElement, ICustomInputProps>(
  (
    { className, type, label, startIcon, endIcon, error, id, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div>
            {label && (
              <Label
                htmlFor={inputId}
                className={cn(
                  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  error && "text-destructive"
                )}
              >
                {label}
              </Label>
            )}
          </div>

          {error && <p className="text-xs text-destructive">{error}</p>}
        </div>

        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {startIcon}
            </div>
          )}
          <input
            type={type}
            id={inputId}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              startIcon && "pl-10",
              endIcon && "pr-10",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            ref={ref}
            {...props}
          />
          {endIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {endIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);
CInput.displayName = "CInput";

export { CInput };
