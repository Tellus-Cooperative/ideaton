"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Users, Zap, Code, Trophy, Calendar, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export function HowToParticipateSection() {
  return (
    <section id="how-to-participate" className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
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
            <span className="text-purple-600 bg-yellow-400 px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 inline-block ml-4">
              Participar?
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Únete al evento más importante de web3 en LATAM
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="ideaton" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 pb-16">
              <TabsTrigger 
                value="ideaton" 
                className="data-[state=active]:bg-purple-400 data-[state=active]:text-white font-bold text-lg py-4 border-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                🚀 Ideatón
              </TabsTrigger>
              <TabsTrigger 
                value="bounties" 
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black font-bold text-lg py-4 border-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                🎯 Bounties
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ideaton" className="space-y-8">
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
                        <div className="w-16 h-16 bg-purple-400 border-4 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-gray-900">Ideatón</h3>
                          <p className="text-lg font-medium text-purple-600">7 - 9 Agosto</p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 font-medium mb-6">
                        Desarrolla soluciones innovadoras en el ecosistema Stellar durante 3 días intensivos de hackathon.
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        {[
                          { icon: Target, text: "Forma tu equipo de hasta 4 personas" },
                          { icon: Code, text: "Desarrolla sobre blockchain Stellar" },
                          { icon: Trophy, text: "Compite por $2,000 USD en premios" },
                          { icon: Users, text: "Networking con builders de LATAM" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-8 h-8 bg-yellow-400 border-2 border-black rounded-lg flex items-center justify-center">
                              <item.icon className="w-4 h-4 text-black" />
                            </div>
                            <span className="font-medium text-gray-700">{item.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 border-4 border-black rounded-lg p-6">
                      <h4 className="text-2xl font-black mb-4 text-center">🏆 Premios Ideatón</h4>
                      <div className="space-y-3">
                        <div className="bg-yellow-400 border-2 border-black rounded-lg p-3 text-center">
                          <div className="font-black text-2xl">$1,000</div>
                          <div className="font-bold text-sm">1er Lugar</div>
                        </div>
                        <div className="bg-white border-2 border-black rounded-lg p-3 text-center">
                          <div className="font-black text-xl">$600</div>
                          <div className="font-bold text-sm">2do Lugar</div>
                        </div>
                        <div className="bg-white border-2 border-black rounded-lg p-3 text-center">
                          <div className="font-black text-lg">$400</div>
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
                      className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-xl px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
                      onClick={() => window.open('https://forms.gle/ideaton-signup', '_blank')}
                    >
                      <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                      Postúlate al Ideatón
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-gray-500 font-medium mt-3">
                      Para desarrolladores y emprendedores • Fecha límite: 5 de Agosto
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="bounties" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-yellow-400 border-4 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          <Users className="w-8 h-8 text-black" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-gray-900">Bounties</h3>
                          <p className="text-lg font-medium text-yellow-600">21 Jul - 6 Ago</p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 font-medium mb-6">
                        Crea contenido educativo sobre Stellar y ayuda a hacer crecer la comunidad LATAM.
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        {[
                          { icon: Users, text: "Videos, artículos, y tutoriales" },
                          { icon: Target, text: "Contenido en español para LATAM" },
                          { icon: Trophy, text: "Hasta $1,500 USD en premios" },
                          { icon: Calendar, text: "Múltiples oportunidades de ganar" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-8 h-8 bg-purple-400 border-2 border-black rounded-lg flex items-center justify-center">
                              <item.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium text-gray-700">{item.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border-4 border-black rounded-lg p-6">
                      <h4 className="text-2xl font-black mb-4 text-center">🎨 Tipos de Bounties</h4>
                      <div className="space-y-3">
                        <div className="bg-purple-400 text-white border-2 border-black rounded-lg p-3 text-center">
                          <div className="font-bold text-lg">Videos</div>
                          <div className="text-sm">Tutoriales y explicaciones</div>
                        </div>
                        <div className="bg-blue-400 text-white border-2 border-black rounded-lg p-3 text-center">
                          <div className="font-bold text-lg">Artículos</div>
                          <div className="text-sm">Guías técnicas y conceptuales</div>
                        </div>
                        <div className="bg-green-400 text-white border-2 border-black rounded-lg p-3 text-center">
                          <div className="font-bold text-lg">Traducciones</div>
                          <div className="text-sm">Contenido oficial al español</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bounties Button */}
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
                      onClick={() => window.open('https://forms.gle/bounties-signup', '_blank')}
                    >
                      <Users className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                      Participa en Bounties
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-gray-500 font-medium mt-3">
                      Para creadores y comunicadores • Disponible ahora
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
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
            💰 Más de <span className="font-black text-purple-600">$3,500 USD</span> en premios totales te esperan
          </p>
        </motion.div>
      </div>
    </section>
  )
} 