import { useScrollPosition } from '@/hooks/use-scroll-position'
import { Button } from '@/components/ui/button'
import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function StickyHeader() {
  const { scrollY } = useScrollPosition()
  const isScrolled = scrollY > 50

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">PW</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                PRESTIGE WORLDWIDE
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                Dustless Eco-Blast
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm font-medium hover:text-secondary transition-colors">
              Process
            </a>
            <a href="#impact" className="text-sm font-medium hover:text-secondary transition-colors">
              Impact
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-secondary transition-colors">
              Contact
            </a>
          </nav>

          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold gap-2 shadow-lg hover:shadow-xl transition-all"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="hidden sm:inline">GET A CLEAN START</span>
            <span className="sm:hidden">START</span>
            <ArrowRight weight="bold" />
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
