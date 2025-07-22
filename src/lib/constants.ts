import { Feature, Track, Stat, FAQ } from "@/types"

export const FEATURES_DATA: Feature[] = [
  {
    step: "Paso 1",
    title: "Regístrate",
    content: "Completa tu registro y elige tu track favorito para comenzar tu aventura hacia Meridian.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Paso 2", 
    title: "Desarrolla tu idea",
    content: "Crea tu pitch, desarrolla tu prototipo y prepara tu presentación de 2 minutos.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Paso 3",
    title: "Presenta y gana",
    content: "Demuestra tu talento en el demo day y compite por increíbles premios.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
  }
]

export const TRACKS_DATA: Track[] = [
  {
    icon: "Palette",
    title: "Track de Contenido",
    description: "Para creadores de contenido, diseñadores y comunicadores",
    prizes: ["10 premios de", "$100 USDC", "c/u"],
    color: "bg-yellow-400 border-yellow-600"
  },
  {
    icon: "Rocket",
    title: "Track Abierto",
    description: "Para desarrolladores, emprendedores y builders experimentados",
    prizes: ["$2,000 USDC", "$1,000 USDC", "$500 USDC"],
    color: "bg-[#FF5F8A] border-[#d91b60]"
  },
  {
    icon: "GraduationCap",
    title: "Track Universitario", 
    description: "Exclusivo para estudiantes universitarios de LATAM",
    prizes: ["$500 USDC", "$500 USDC"],
    color: "bg-blue-400 border-blue-600"
  }
]

export const STATS_DATA: Stat[] = [
  { icon: "Trophy", value: 3500, label: "USD en Premios", suffix: "+" },
  { icon: "Users", value: 200, label: "Participantes Esperados", suffix: "+" },
  { icon: "Calendar", value: 20, label: "Días de Competencia", suffix: "" },
  { icon: "Star", value: 100, label: "Proyectos Stellar", suffix: "%" },
]

export const FAQS_DATA: FAQ[] = [
  {
    question: "¿Quién puede participar en el Ideatón?",
    answer: "Cualquier persona de América Latina puede participar. Tenemos tracks específicos para estudiantes universitarios y un track abierto para todos los demás."
  },
  {
    question: "¿Necesito experiencia previa con Stellar o blockchain?",
    answer: "No es necesario ser un experto, pero tu proyecto debe utilizar Stellar o Soroban. Proporcionaremos recursos y documentación para ayudarte."
  },
  {
    question: "¿Puedo participar en equipo?",
    answer: "Sí, puedes formar equipos de hasta 4 personas. También puedes participar individualmente."
  },
  {
    question: "¿Cómo funcionan los Bounties de Contenido?",
    answer: "Crea contenido original sobre web3 en LATAM, el ideatón, o temas relacionados. Acepta reels, threads, memes, videos y artículos. Haz los tags necesarios, y envia los mejors links a la ideaton antes del deadline."
  },
  {
    question: "¿Cuándo y dónde será la premiación?",
    answer: "El Demo Day y premiación será el 11 de Agosto de 2025, en formato virtual con transmisión en vivo."
  }
] 