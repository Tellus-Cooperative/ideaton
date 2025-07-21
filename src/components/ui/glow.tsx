"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "top" | "above" | "bottom" | "below" | "center"
}

const Glow = React.forwardRef<HTMLDivElement, GlowProps>(
  ({ className, variant = "top", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute w-full",
        variant === "top" && "top-0",
        variant === "above" && "-top-[128px]",
        variant === "bottom" && "bottom-0", 
        variant === "below" && "-bottom-[128px]",
        variant === "center" && "top-[50%]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.3)_10%,_transparent_60%)] sm:h-[512px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.2)_10%,_transparent_60%)] sm:h-[256px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
    </div>
  )
)
Glow.displayName = "Glow"

export { Glow } 