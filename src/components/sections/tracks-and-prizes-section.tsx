"use client"

import { motion } from "framer-motion"
import { Rocket, GraduationCap, Palette, Trophy, Award, Star } from "lucide-react"
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
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Tracks y 
            <span className="text-yellow-600 bg-purple-400 px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block ml-4">
              Premios
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Elige tu categoría y compite por más de <strong className="text-purple-600">$2,800 USDC</strong> en premios totales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {TRACKS_DATA.map((track, index) => {
            const IconComponent = iconMap[track.icon as keyof typeof iconMap]
            const isMainTrack = index === 1 // Track Abierto (middle)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "group relative",
                  isMainTrack && "lg:scale-105 lg:z-10"
                )}
              >
                {isMainTrack && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-yellow-400 border-4 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      PRINCIPAL
                    </div>
                  </div>
                )}
                
                <Card className={cn(
                  "p-6 lg:p-8 border-4 border-black transition-all duration-300 hover:-translate-y-1 relative",
                  isMainTrack 
                    ? "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] bg-white" 
                    : "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]",
                  track.color
                )}>
                  <div className="text-center">
                    {/* Icon */}
                    <div className={cn(
                      "bg-white border-4 border-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                      isMainTrack ? "w-24 h-24" : "w-20 h-20"
                    )}>
                      {IconComponent && <IconComponent className={cn("text-gray-800", isMainTrack ? "w-10 h-10" : "w-8 h-8")} />}
                    </div>
                    
                    {/* Title */}
                    <h3 className={cn(
                      "font-black mb-3 text-black",
                      isMainTrack ? "text-3xl" : "text-2xl"
                    )}>
                      {track.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-black font-medium mb-6 text-sm lg:text-base leading-relaxed">
                      {track.description}
                    </p>
                    
                    {/* Prizes */}
                    <div className="bg-white/90 border-3 border-black rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Trophy className="w-5 h-5 text-yellow-600" />
                        <span className="font-black text-lg text-gray-800">PREMIOS</span>
                      </div>
                      
                      {track.title === "Track Abierto" ? (
                        <div className="space-y-2">
                          <div className="bg-yellow-400 border-2 border-black px-3 py-2 font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            🥇 {track.prizes[0]}
                          </div>
                          <div className="bg-gray-200 border-2 border-black px-3 py-2 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            🥈 {track.prizes[1]}
                          </div>
                          <div className="bg-orange-200 border-2 border-black px-3 py-2 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            🥉 {track.prizes[2]}
                          </div>
                        </div>
                      ) : track.title === "Track Universitario" ? (
                        <div className="space-y-2">
                          <div className="bg-blue-200 border-2 border-black px-3 py-2 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            🏆 2 x Premios de $500 USDC
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="bg-yellow-200 border-2 border-black px-3 py-2 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            🎨 10 x Premios de $100 USDC
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Total Prize Pool */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-purple-400 border-4 border-black px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <Award className="w-6 h-6 text-white" />
            <span className="text-white font-black text-xl">
              TOTAL: $5,000 USDC EN PREMIOS
            </span>
            <Award className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 