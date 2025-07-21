"use client"

import { Star, Users, Mail, Globe, MapPin, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="py-16 px-4 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black mb-6 text-yellow-400">
              IDEATÓN 2025
            </h3>
            <p className="text-gray-300 font-medium mb-6">
              Conectando el talento LATAM con el ecosistema Stellar rumbo a Meridian 2025 en Río de Janeiro.
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="sm" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black">
                  <Twitter className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="sm" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black">
                  <Instagram className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="sm" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black">
                  <Youtube className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-black mb-6 text-yellow-400">Patrocinadores</h4>
            <div className="space-y-4">
              {/* Stellar Development Foundation */}
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('https://stellar.org', '_blank')}
              >
                <div className="flex items-center space-x-3 p-3 border-2 border-gray-700 hover:border-yellow-400 transition-colors rounded-lg">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-white group-hover:text-yellow-400">Stellar Chile</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-yellow-400" />
                </div>
              </motion.div>
              
              {/* Tellus Cooperative */}
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('https://telluscoop.org', '_blank')}
              >
                <div className="flex items-center space-x-3 p-3 border-2 border-gray-700 hover:border-[#0080C8] transition-colors rounded-lg">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-white group-hover:text-[#0080C8]">Tellus Cooperative</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#0080C8]" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-black mb-6 text-yellow-400">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">hola@tellucoop.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">ideaton.telluscoop.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">América Latina</span>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        <div className="text-center">
          <p className="text-gray-400 font-medium">
            © 2025 Tellus Cooperative. Construyendo el futuro de web3 en LATAM. 🚀
          </p>
        </div>
      </div>
    </footer>
  )
} 