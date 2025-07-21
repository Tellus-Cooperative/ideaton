"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NeubrutalistShapeProps {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  color?: string
}

export function NeubrutalistShape({
  className,
  delay = 0,
  width = 200,
  height = 60,
  rotate = 0,
  color = "bg-yellow-400",
}: NeubrutalistShapeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
        rotate: rotate - 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeOut",
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className={cn(
          "border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
          color,
          "rounded-lg"
        )}
      />
    </motion.div>
  )
} 