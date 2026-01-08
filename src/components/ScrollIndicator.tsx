import { motion } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react'

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-sm font-medium">Scroll to Clean</span>
        <CaretDown weight="bold" size={24} />
      </motion.div>
    </motion.div>
  )
}
