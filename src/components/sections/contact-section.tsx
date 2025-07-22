"use client"

import { MessageCircle, Users, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Únete a la
            <span className="text-white bg-[#FF5F8A] px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 inline-block ml-4">
              Comunidad
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Conecta con otros builders, obtén ayuda y mantente al día con todas las novedades
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-[#0080C8] border-4 border-black rounded-full flex items-center justify-center mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 text-gray-900">
                💬 Discord Community
              </h3>
              
              <p className="text-lg text-gray-600 font-medium mb-8 max-w-md mx-auto">
                Haz preguntas, conoce a otros participantes, comparte ideas y recibe soporte en tiempo real
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-yellow-400 border-4 border-black rounded-lg flex items-center justify-center mb-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h4 className="font-black text-lg mb-2">Networking</h4>
                <p className="text-sm text-gray-600 font-medium">Conecta con builders de toda LATAM</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-400 border-4 border-black rounded-lg flex items-center justify-center mb-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <h4 className="font-black text-lg mb-2">Soporte 24/7</h4>
                <p className="text-sm text-gray-600 font-medium">Ayuda técnica y mentoring</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-400 border-4 border-black rounded-lg flex items-center justify-center mb-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <h4 className="font-black text-lg mb-2">Actualizaciones</h4>
                <p className="text-sm text-gray-600 font-medium">Noticias y anuncios importantes</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-[#0080C8] hover:bg-[#006aa6] text-white font-bold text-xl px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
                onClick={() => window.open('https://discord.gg/your-invite-link', '_blank')}
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Únete a Discord
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 font-medium mt-4"
            >
                              🚀 Únete a más de <span className="font-black text-[#0080C8]">150+ builders</span> ya conectados
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 