"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Glow } from "@/components/ui/glow"
import { NeubrutalistShape } from "@/components/ui/neubrutalist-shape"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Neubrutalist Background Shapes */}
      <NeubrutalistShape
        delay={0.2}
        width={300}
        height={80}
        rotate={15}
        color="bg-yellow-400"
        className="left-[10%] top-[20%]"
      />
      <NeubrutalistShape
        delay={0.4}
        width={200}
        height={60}
        rotate={-20}
        color="bg-purple-400"
        className="right-[15%] top-[15%]"
      />
      <NeubrutalistShape
        delay={0.6}
        width={250}
        height={70}
        rotate={25}
        color="bg-blue-400"
        className="left-[5%] bottom-[25%]"
      />
      <NeubrutalistShape
        delay={0.8}
        width={180}
        height={50}
        rotate={-15}
        color="bg-green-400"
        className="right-[10%] bottom-[20%]"
      />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        {/* Partnership Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image 
              src="/stellar.svg" 
              alt="Stellar Development Foundation" 
              width={100} 
              height={50}
              className="h-10 w-auto"
            />
          </motion.div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-2xl font-black text-gray-700"
          >
            ×
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image 
              src="/telluscoop.svg" 
              alt="Tellus Cooperative" 
              width={100} 
              height={50}
              className="h-10 w-auto"
            />
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-7xl font-black mb-6 leading-tight"
        >
          <span className="block text-black">IDEATÓN +</span>
          <span className="block text-purple-600 transform -rotate-1 inline-block border-4 border-black bg-yellow-400 px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-4">
            BOUNTIES
          </span>
          <span className="block text-black">DE CONTENIDO</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-bold mb-8 text-gray-700"
        >
          🌎 Rumbo a la conferencia Stellar en Río
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-xl px-12 py-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
              onClick={() => handleScrollToSection('how-to-participate')}
            >
              👾 Postúlate al Ideatón
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
              onClick={() => handleScrollToSection('participation-details')}
            >
              🎨 Participa en Bounties
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Timeline cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <Card className="p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-sm font-bold text-purple-600">BOUNTIES</div>
              <div className="text-lg font-black">21 Jul - 6 Ago</div>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <Card className="p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-sm font-bold text-blue-600">IDEATÓN</div>
              <div className="text-lg font-black">7 - 9 Agosto</div>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <Card className="p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-sm font-bold text-green-600">DEMO + PREMIOS</div>
              <div className="text-lg font-black">10 Agosto</div>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow variant="center" className="opacity-30" />
      </div>
    </section>
  )
} 