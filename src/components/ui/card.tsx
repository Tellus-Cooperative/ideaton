"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card } 