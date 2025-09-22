"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Glow } from "@/components/ui/glow"
import PostItNotesBackground from "@/components/ui/post-it-notes-background"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden"
      aria-label="Hero section with event information and registration"
    >
      {/* Post-it Notes Background */}
      <PostItNotesBackground 
        noteCount={12}
        animationSpeed={0.15}
        colors={[
          'bg-[#F6EFBC]/60'
        ]}
      />

      <main className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 text-center">
        {/* Partnership Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8"
          role="banner"
          aria-label="Partnership logos"
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image 
              src="/stellar.svg" 
              alt="Stellar Development Foundation partnership logo" 
              width={100} 
              height={50}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </motion.div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-xl sm:text-2xl font-black text-gray-700"
            aria-hidden="true"
          >
            ×
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image 
              src="/telluscoop.svg" 
              alt="Tellus Cooperative partnership logo" 
              width={100} 
              height={50}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight max-w-6xl mx-auto"
        >
                      <span className="block text-white transform -rotate-1 inline-block border-4 border-black bg-[#FF5F8A] px-3 py-2 sm:px-4 sm:py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-3 sm:my-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              IDEATÓN
            </span>
          <span className="block text-black">¡TU IDEA CUENTA!</span>
          
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-gray-700 leading-relaxed px-2 max-w-4xl mx-auto"
        >
          🇨🇱 Desarrolla soluciones innovadoras que aprovechen el ecosistema Stellar para resolver problemáticas reales en América Latina.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-[#0080C8] hover:bg-[#006aa6] text-white font-bold text-xl sm:text-2xl px-8 sm:px-16 py-5 sm:py-7 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all group min-h-[60px] sm:min-h-[70px] whitespace-nowrap"
              onClick={() => handleScrollToSection('how-to-participate')}
              aria-label="Regístrate al Ideatón Chile 2025 - Hackathon de desarrollo con Stellar"
            >
              <span className="flex items-center justify-center">
                 Regístrate al Ideatón
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl sm:text-2xl px-8 sm:px-16 py-5 sm:py-7 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all group min-h-[60px] sm:min-h-[70px] whitespace-nowrap"
              onClick={() => handleScrollToSection('tracks-and-prizes')}
              aria-label="Ver premios y tracks - Información sobre premios del Ideatón Chile 2025"
            >
              <span className="flex items-center justify-center">
                 Ver Premios
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Timeline cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto"
          role="region"
          aria-label="Event timeline"
        >
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <Card className="p-3 sm:p-4 bg-white border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="text-sm font-bold text-[#0080C8]" aria-label="Ideatón start phase">INICIO IDEATÓN</div>
              <div className="text-base sm:text-lg font-black">26 Sept</div>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <Card className="p-3 sm:p-4 bg-white border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="text-sm font-bold text-blue-600" aria-label="Submission deadline phase">CIERRE PRESENTACIONES</div>
              <div className="text-base sm:text-lg font-black">29 Sept</div>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} className="sm:col-span-2 md:col-span-1">
            <Card className="p-3 sm:p-4 bg-white border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="text-sm font-bold text-green-600" aria-label="Demo and prizes phase">DEMO DAY</div>
              <div className="text-base sm:text-lg font-black">4 Oct</div>
            </Card>
          </motion.div>
        </motion.div>
      </main>

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <Glow variant="center" className="opacity-20 sm:opacity-30" />
      </div>
    </section>
  )
} 