import { Feature, Track, Stat, FAQ } from "@/types"

export const FEATURES_DATA: Feature[] = [
  {
    step: "Paso 1",
    title: "Regístrate",
    content: "Completa tu registro como desarrollador, emprendedor o builder residente en Chile.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Paso 2", 
    title: "Desarrolla tu solución",
    content: "Crea una solución innovadora que aproveche el ecosistema Stellar para resolver problemáticas reales en América Latina.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
  },
  {
    step: "Paso 3",
    title: "Presenta y gana",
    content: "Demuestra tu proyecto en el Demo Day con un pitch de 5 minutos y compite por premios de hasta $500 USDC.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
  }
]

export const TRACKS_DATA: Track[] = [
  {
    icon: "Rocket",
    title: "Track Abierto",
    description: "Para desarrolladores, emprendedores y builders residentes en Chile",
    prizes: ["$500 USDC", "$300 USDC", "$200 USDC"],
    color: "bg-[#FF5F8A] border-[#d91b60]"
  }
]

export const STATS_DATA: Stat[] = [
  { icon: "Trophy", value: 1000, label: "USD en Premios", suffix: "" },
  { icon: "Users", value: 50, label: "Participantes Esperados", suffix: "+" },
  { icon: "Calendar", value: 4, label: "Días de Competencia", suffix: "" },
  { icon: "Star", value: 100, label: "Proyectos Stellar", suffix: "%" },
]

export const FAQS_DATA: FAQ[] = [
  {
    question: "¿Quién puede participar en el Ideatón Chile 2025?",
    answer: "Desarrolladores, emprendedores y builders residentes en Chile. La participación puede ser individual o en equipos de hasta 4 personas."
  },
  {
    question: "¿Necesito experiencia previa con Stellar o blockchain?",
    answer: "Se recomienda contar con conocimientos básicos en desarrollo de software y blockchain. Tu proyecto debe utilizar tecnologías como Soroban smart contracts, emisión de activos en Stellar, wallets, DeFi, o soluciones web3."
  },
  {
    question: "¿Puedo participar en equipo?",
    answer: "Sí, puedes formar equipos de hasta 4 personas. También puedes participar individualmente."
  },
  {
    question: "¿Qué debo entregar para el Ideatón?",
    answer: "Cada equipo debe presentar: un prototipo funcional o demo del producto, un pitch de máximo 5 minutos, y un repositorio en GitHub/GitLab con el código del proyecto."
  },
  {
    question: "¿Cuándo y dónde será la premiación?",
    answer: "El Demo Day y premiación será el 4 de octubre de 2025. El evento es virtual con transmisión en vivo."
  },
  {
    question: "¿Cuáles son los criterios de evaluación?",
    answer: "Los proyectos se evalúan por: Innovación y creatividad (25%), Impacto en LATAM (25%), Uso del ecosistema Stellar (25%), y Prototipo funcional (25%)."
  }
] 