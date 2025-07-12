import * as React from "react";
import { cn } from "./utils/utils";


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn("w-full rounded-md border border-input px-3 py-2 focus:ring-2 focus:ring-primary", className)}
      {...props}
    />
  )
);
Input.displayName = "Input";
