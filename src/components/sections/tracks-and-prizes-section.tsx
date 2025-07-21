"use client"

import { motion } from "framer-motion"
import { Rocket, GraduationCap, Palette } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TRACKS_DATA } from "@/lib/constants"

const iconMap = {
  Rocket: Rocket,
  GraduationCap: GraduationCap,
  Palette: Palette,
}

export function TracksAndPrizesSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Tracks y 
            <span className="text-yellow-600 bg-purple-400 px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block ml-4">
              Premios
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Más de $3,500 USD en premios para los mejores proyectos y contenido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRACKS_DATA.map((track, index) => {
            const IconComponent = iconMap[track.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={cn(
                  "p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1",
                  track.color
                )}>
                  <div className="text-center">
                    <div className="bg-white border-4 border-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {IconComponent && <IconComponent className="w-8 h-8" />}
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-black">
                      {track.title}
                    </h3>
                    <p className="text-black font-medium mb-6">
                      {track.description}
                    </p>
                    <div className="space-y-2">
                      {track.prizes.map((prize, prizeIndex) => (
                        <div 
                          key={prizeIndex}
                          className="bg-white border-2 border-black px-4 py-2 font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                          {prize}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 