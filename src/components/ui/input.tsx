import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition placeholder:text-zinc-500 focus-visible:border-sky-400/50 focus-visible:ring-2 focus-visible:ring-sky-400/30",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
