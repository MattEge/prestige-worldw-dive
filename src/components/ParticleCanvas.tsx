import { useEffect, useRef } from 'react'
import { useScrollPosition } from '@/hooks/use-scroll-position'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const lastScrollRef = useRef(0)
  const frameRef = useRef<number | undefined>(undefined)
  const { scrollY } = useScrollPosition()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

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

    const particleDensity = window.innerWidth < 768 ? 0.5 : 1

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const scrollDelta = Math.abs(scrollY - lastScrollRef.current)

      if (scrollDelta > 2) {
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const numParticles = Math.floor(scrollDelta * 2 * particleDensity)

        for (let i = 0; i < numParticles; i++) {
          const angle = Math.random() * Math.PI * 2
          const speed = 3 + Math.random() * 5
          particlesRef.current.push({
            x: centerX + (Math.random() - 0.5) * 100,
            y: centerY + (Math.random() - 0.5) * 100,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            maxLife: 800 + Math.random() * 400,
            size: 2 + Math.random() * 3
          })
        }

        lastScrollRef.current = scrollY
      }

      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98
        p.life -= 1 / p.maxLife

        if (p.life <= 0) return false

        const alpha = p.life * 0.6
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(180, 220, 255, ${alpha * 0.7})`)
        gradient.addColorStop(1, `rgba(120, 180, 220, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [scrollY, prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
