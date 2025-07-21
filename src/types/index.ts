export interface Feature {
  step: string
  title: string
  content: string
  image: string
}

export interface Track {
  icon: string
  title: string
  description: string
  prizes: string[]
  color: string
}

export interface Stat {
  icon: string
  value: number
  label: string
  suffix: string
}

export interface FAQ {
  question: string
  answer: string
} 