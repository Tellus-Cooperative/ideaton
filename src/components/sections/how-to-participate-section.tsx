"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Zap, Code, Trophy, Calendar, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export function HowToParticipateSection() {
  return (
    <section id="how-to-participate" className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#0080C8]/20 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            ¿Cómo 
            <span className="text-white bg-[#FF5F8A] px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 inline-block ml-4">
              Participar?
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Desarrolla soluciones innovadoras con Stellar para América Latina
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#0080C8] border-4 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-gray-900">Ideatón Chile 2025</h3>
                      <p className="text-lg font-medium text-[#0080C8]">26 - 29 Septiembre</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 font-medium mb-6">
                    Desarrolla soluciones innovadoras que aprovechen el ecosistema Stellar para resolver problemáticas reales en América Latina.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: Target, text: "Forma tu equipo de hasta 4 personas" },
                      { icon: Code, text: "Utiliza Soroban smart contracts, emisión de activos, wallets, DeFi" },
                      { icon: Trophy, text: "Compite por $1,000 USDC en premios" },
                      { icon: Users, text: "Resuelve problemáticas de inclusión financiera, educación, trazabilidad" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-8 h-8 bg-[#0080C8] border-2 border-black rounded-lg flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-700">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-[#e6f3ff] border-4 border-black rounded-lg p-6">
                  <h4 className="text-2xl font-black mb-4 text-center">🏆 Premios Ideatón</h4>
                  <div className="space-y-3">
                    <div className="bg-yellow-400 border-2 border-black rounded-lg p-3 text-center">
                      <div className="font-black text-2xl">$500</div>
                      <div className="font-bold text-sm">1er Lugar</div>
                    </div>
                    <div className="bg-white border-2 border-black rounded-lg p-3 text-center">
                      <div className="font-black text-xl">$300</div>
                      <div className="font-bold text-sm">2do Lugar</div>
                    </div>
                    <div className="bg-white border-2 border-black rounded-lg p-3 text-center">
                      <div className="font-black text-lg">$200</div>
                      <div className="font-bold text-sm">3er Lugar</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Ideatón Button */}
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-[#0080C8] hover:bg-[#006aa6] text-white font-bold text-xl px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
                  onClick={() => window.open('https://dorahacks.io/hackathon/ideatontelluscoop/', '_blank')}
                >
                  <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Regístrate al Ideatón
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-gray-500 font-medium mt-3">
                  Para desarrolladores, emprendedores y builders residentes en Chile • Demo Day: 4 de Octubre
                </p>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 font-medium">
            💰 <span className="font-black text-[#0080C8]">$1,000 USDC</span> en premios totales te esperan
          </p>
        </motion.div>
      </div>
    </section>
  )
} 