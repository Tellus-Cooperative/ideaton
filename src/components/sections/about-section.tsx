"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, ExternalLink, GraduationCap } from "lucide-react"

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
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#0080C8]/20 opacity-20"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-200 opacity-20"
        style={{ y: y2 }}
      />

      <div className="container mx-auto max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Badge variant="secondary" className="text-lg px-4 py-2 border-2 border-[#0080C8] mb-4">
            <Zap className="w-4 h-4 mr-2" />
            ¿QUÉ ES EL IDEATÓN CHILE 2025?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Desarrolla Soluciones,
            <span className="block text-[#FF5F8A] transform rotate-1 inline-block">
              Impacta América Latina
            </span>
          </h2>
          <div className="w-32 h-2 bg-yellow-400 mx-auto border-2 border-black"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto mb-12"
        >
          Un hackathon virtual para desarrolladores, emprendedores y builders residentes en Chile. 
          Desarrolla soluciones innovadoras que aprovechen el ecosistema Stellar para resolver 
          problemáticas reales en América Latina como inclusión financiera, educación, 
          trazabilidad y sostenibilidad. 🚀
        </motion.p>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="aspect-video">
                <iframe 
                  src="https://player.vimeo.com/video/1088210242?app_id=122963&referrer=https%3A%2F%2Fmeridian.stellar.org%2F"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Stellar Ecosystem Video"
                ></iframe>
              </div>
            </div>
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4 justify-center items-center max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group min-h-[48px]"
              onClick={() => window.open('https://dorahacks.io/hackathon/ideatontelluscoop/', '_blank')}
              aria-label="Registrarse al Ideatón Chile 2025"
            >
              <span className="flex items-center justify-center">
                <Zap className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Regístrate Ahora
                <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-sm sm:text-base text-gray-600 font-medium text-center"
          >
            🏆 <strong>Premios de hasta $500 USDC</strong> para los mejores proyectos
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 