"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PostItNote {
  id: number;
  content: string;
  color: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

interface PostItNotesBackgroundProps {
  noteCount?: number;
  animationSpeed?: number;
  colors?: string[];
  className?: string;
}

const PostItNotesBackground: React.FC<PostItNotesBackgroundProps> = ({
  noteCount = 25,
  animationSpeed = 0.2,
  colors = [
    'bg-[#F6EFBC]/70'
  ],
  className = ""
}) => {
  const [notes, setNotes] = useState<PostItNote[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Product and solution ideas for the notes
  const noteContents = [
    "Billetera DeFi",
    "App de Remesas",
    "Mercado de NFTs",
    "Farming de Rendimiento",
    "Pagos Fronterizos",
    "Créditos Comunitarios",
    "Tokenización de Activos",
    "Gobernanza DAO",
    "Infraestructura de Pagos",
    "Identidad Digital",
    "Facturación Descentralizada",
    "Sistema de Recompensas",
    "Trazabilidad de Suministros",
    "Compensación de Carbono",
    "Puente entre Cadenas",
    "Intercambio P2P",
    "Seguros Paramétricos",
    "Ahorro Descentralizado",
    "Inversión Inclusiva",
    "Economía de Juegos",
    "Fondo para Creadores",
    "Bonos de Impacto",
    "Inclusión Financiera",
    "Banca Móvil Web3",
    "DAO de Inversión",
    "Mercado Predictivo",
    "Contratos con Escrow",
    "Swaps Instantáneos",
    "Provisión de Liquidez",
    "Agregador de DEX"
  ];

  // Function to check if a position is in the central content area (to avoid)
  const isInCentralArea = (x: number, y: number, width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Define exclusion zones (rough approximation of where content appears)
    const exclusionZones = [
      // Main title area
      { x: centerX - width * 0.25, y: centerY - height * 0.15, w: width * 0.5, h: height * 0.3 },
      // Buttons area
      { x: centerX - width * 0.2, y: centerY + height * 0.1, w: width * 0.4, h: height * 0.15 },
      // Logo area (top)
      { x: centerX - width * 0.15, y: centerY - height * 0.35, w: width * 0.3, h: height * 0.1 },
    ];

    return exclusionZones.some(zone => 
      x >= zone.x && x <= zone.x + zone.w && 
      y >= zone.y && y <= zone.y + zone.h
    );
  };

  // Generate safe position for a note
  const generateSafePosition = (width: number, height: number) => {
    let attempts = 0;
    let x, y;
    
    do {
      x = Math.random() * (width - 80);
      y = Math.random() * (height - 80);
      attempts++;
    } while (isInCentralArea(x, y, width, height) && attempts < 50);
    
    return { x, y };
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      const initialNotes: PostItNote[] = Array.from({ length: noteCount }, (_, i) => {
        const position = generateSafePosition(dimensions.width, dimensions.height);
        return {
          id: i,
          content: noteContents[i % noteContents.length],
          color: colors[i % colors.length],
          x: position.x,
          y: position.y,
          rotation: (Math.random() - 0.5) * 20,
          scale: 0.6 + Math.random() * 0.4
        };
      });
      setNotes(initialNotes);
    }
  }, [dimensions, noteCount, colors]);

  useEffect(() => {
    const animate = () => {
      setNotes(prevNotes => 
        prevNotes.map(note => {
          let newX = note.x + (Math.random() - 0.5) * animationSpeed;
          let newY = note.y + (Math.random() - 0.5) * animationSpeed;
          
          // Keep within bounds
          newX = Math.max(0, Math.min(dimensions.width - 80, newX));
          newY = Math.max(0, Math.min(dimensions.height - 80, newY));
          
          // If the new position would be in a central area, nudge it away
          if (isInCentralArea(newX, newY, dimensions.width, dimensions.height)) {
            const centerX = dimensions.width / 2;
            const centerY = dimensions.height / 2;
            
            // Push away from center
            if (newX < centerX) newX -= Math.random() * 2;
            else newX += Math.random() * 2;
            
            if (newY < centerY) newY -= Math.random() * 2;
            else newY += Math.random() * 2;
          }
          
          return {
            ...note,
            x: newX,
            y: newY,
            rotation: note.rotation + (Math.random() - 0.5) * 0.1
          };
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    if (notes.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes.length, animationSpeed, dimensions]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            className={`absolute w-16 h-16 sm:w-18 sm:h-18 ${note.color} shadow-sm border border-gray-300/50 select-none rounded-sm`}
            style={{
              left: note.x,
              top: note.y,
              transform: `rotate(${note.rotation}deg) scale(${note.scale})`
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: note.scale,
              rotate: note.rotation
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 1,
              delay: Math.random() * 1.5
            }}
          >
            <div className="w-full h-full p-1.5 sm:p-2 flex items-center justify-center overflow-hidden">
              <div className="text-xs sm:text-xs font-bold text-gray-800 text-center leading-none max-w-full overflow-hidden">
                <div className="break-words hyphens-auto" style={{ fontSize: '0.65rem', lineHeight: '0.75rem' }}>
                  {note.content}
                </div>
              </div>
            </div>
            {/* Post-it pin/shadow effect */}
            <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-400/60 rounded-full"></div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PostItNotesBackground; 