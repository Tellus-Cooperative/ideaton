"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center px-4 py-2 text-sm font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          {
            "bg-yellow-400 text-black": variant === "default",
            "bg-purple-100 text-purple-800": variant === "secondary",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge } 