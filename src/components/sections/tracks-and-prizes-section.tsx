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
            <span className="text-white bg-[#FF5F8A] px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block ml-4">
              Premios
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Compite por <strong className="text-[#FF5F8A]">$1,000 USDC</strong> en premios totales
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {TRACKS_DATA.map((track, index) => {
              const IconComponent = iconMap[track.icon as keyof typeof iconMap]
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-yellow-400 border-4 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      ÚNICO TRACK
                    </div>
                  </div>
                  
                  <Card className={cn(
                    "p-6 lg:p-8 border-4 border-black transition-all duration-300 hover:-translate-y-1 relative",
                    "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] bg-white",
                    track.color
                  )}>
                    <div className="text-center">
                      {/* Icon */}
                      <div className="bg-white border-4 border-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-24 h-24">
                        {IconComponent && <IconComponent className="text-gray-800 w-10 h-10" />}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-black mb-3 text-black text-3xl">
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
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Total Prize Pool */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-[#FF5F8A] border-4 border-black px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <Award className="w-6 h-6 text-white" />
            <span className="text-white font-black text-xl">
              $1,000 USDC EN PREMIOS
            </span>
            <Award className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 