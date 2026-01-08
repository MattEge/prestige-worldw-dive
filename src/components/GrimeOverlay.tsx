import { useEffect, useRef } from 'react'
import { useScrollPosition } from '@/hooks/use-scroll-position'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface GrimeOverlayProps {
  texture: 'automotive' | 'marine' | 'graffiti' | 'industrial'
}

const TEXTURES = {
  automotive: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4'/%3E%3CfeColorMatrix values='0 0 0 0 0.2, 0 0 0 0 0.15, 0 0 0 0 0.1, 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E`,
  marine: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.6' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.15, 0 0 0 0 0.25, 0 0 0 0 0.2, 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E`,
  graffiti: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='5'/%3E%3CfeColorMatrix values='0 0 0 0 0.25, 0 0 0 0 0.15, 0 0 0 0 0.15, 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E`,
  industrial: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.7' numOctaves='4'/%3E%3CfeColorMatrix values='0 0 0 0 0.3, 0 0 0 0 0.2, 0 0 0 0 0.1, 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E`
}

export function GrimeOverlay({ texture }: GrimeOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollProgress } = useScrollPosition()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const img = new Image()
    img.src = TEXTURES[texture]

    img.onload = () => {
      const draw = () => {
        if (!ctx || !canvas) return

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const pattern = ctx.createPattern(img, 'repeat')
        if (pattern) {
          ctx.fillStyle = pattern
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        if (prefersReducedMotion) {
          ctx.globalAlpha = 0
        } else {
          const clearedAmount = scrollProgress
          const baseOpacity = 0.15
          ctx.globalAlpha = Math.max(0, baseOpacity * (1 - clearedAmount * 1.5))
        }

        ctx.fillStyle = 'rgba(50, 40, 30, 1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      draw()
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [texture, scrollProgress, prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-500"
      style={{ opacity: prefersReducedMotion ? 0 : 1 }}
    />
  )
}
