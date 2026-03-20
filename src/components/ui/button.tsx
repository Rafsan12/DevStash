import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-white text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-zinc-100",
  outline:
    "border border-white/12 bg-white/5 text-white hover:bg-white/10",
  ghost: "bg-transparent text-zinc-300 hover:bg-white/8 hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 text-sm",
  icon: "h-10 w-10",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", type = "button", ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
