"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { FAQS_DATA } from "@/lib/constants"

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Preguntas
            <span className="text-green-600 bg-yellow-400 px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block ml-4">
              Frecuentes
            </span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS_DATA.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
            >
              <AccordionTrigger>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
} 