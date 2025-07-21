"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-200 opacity-20"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-200 opacity-20"
        style={{ y: y2 }}
      />

      <div className="container mx-auto max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Badge variant="secondary" className="text-lg px-4 py-2 border-2 border-purple-800 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            ¿QUÉ ES ROAD TO MERIDIAN?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Conectamos Ideas,
            <span className="block text-purple-600 transform rotate-1 inline-block">
              Talento y Comunidad
            </span>
          </h2>
          <div className="w-32 h-2 bg-yellow-400 mx-auto border-2 border-black"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto"
        >
          Una serie creativa rumbo a <strong>Stellar Meridian 2025</strong> en Río. 
          Conectamos ideas, talento y comunidad en LATAM para transformar las finanzas comunes 
          y construir el futuro de web3 en nuestra región. 🚀
        </motion.p>
      </div>
    </section>
  )
} 