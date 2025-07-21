"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Context for accordion state
const AccordionContext = React.createContext<{
  openItems: Set<string>
  toggleItem: (value: string) => void
}>({
  openItems: new Set(),
  toggleItem: () => {}
})

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type: "single" | "multiple"
    collapsible?: boolean
    defaultValue?: string
  }
>(({ className, children, type, collapsible, defaultValue, ...props }, ref) => {
  const [openItems, setOpenItems] = React.useState<Set<string>>(
    () => new Set(defaultValue ? [defaultValue] : [])
  )

  const toggleItem = React.useCallback((value: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(value)) {
        // Only allow closing if collapsible is true (or undefined, default behavior)
        if (collapsible !== false) {
          newSet.delete(value)
        }
      } else {
        if (type === "single") {
          newSet.clear()
        }
        newSet.add(value)
      }
      return newSet
    })
  }, [type, collapsible])

  const contextValue = React.useMemo(() => ({
    openItems,
    toggleItem
  }), [openItems, toggleItem])

  return (
    <AccordionContext.Provider value={contextValue}>
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string
  }
>(({ className, children, value, ...props }, ref) => {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = openItems.has(value)

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        ref={ref}
        className={cn("bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden", className)}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
})
AccordionItem.displayName = "AccordionItem"

// Context for individual accordion item
const AccordionItemContext = React.createContext<{
  value: string
  isOpen: boolean
}>({
  value: "",
  isOpen: false
})

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { toggleItem } = React.useContext(AccordionContext)
  const { value, isOpen } = React.useContext(AccordionItemContext)

  return (
    <button
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between px-6 py-4 font-black text-lg text-left hover:bg-gray-50 transition-colors w-full",
        className
      )}
      onClick={() => toggleItem(value)}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen } = React.useContext(AccordionItemContext)

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
      {...props}
    >
      <div className={cn("px-6 pb-4 text-gray-700 font-medium", className)}>
        {children}
      </div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } 