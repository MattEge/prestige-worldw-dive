import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { GrimeOverlay } from '@/components/GrimeOverlay'
import { StickyHeader } from '@/components/StickyHeader'
import { SurfaceSelector } from '@/components/SurfaceSelector'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { IdahoFooter } from '@/components/IdahoFooter'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Drop, Leaf, Sparkle, CheckCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Toaster } from '@/components/ui/sonner'

function App() {
  const [selectedSurface, setSelectedSurface] = useKV<'automotive' | 'marine' | 'graffiti' | 'industrial'>(
    'selected-surface',
    'automotive'
  )

  const surface = selectedSurface || 'automotive'

  return (
    <div className="relative min-h-screen bg-background">
      <GrimeOverlay texture={surface} />
      <StickyHeader />

      <main className="relative z-10">
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20 px-4 py-2 text-sm font-medium">
                Idaho's Premier Eco-Friendly Blasting Service
              </Badge>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                PRESTIGE WORLDWIDE
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 text-primary">
                  DUSTLESS ECO-BLAST
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform weathered, rusted, and grimy surfaces into pristine masterpieces.
                Powerful blasting technology meets environmental responsibility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-base px-8 py-6 shadow-xl hover:shadow-2xl transition-all gap-3 group"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  GET A CLEAN START
                  <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8 py-6 border-2"
                >
                  VIEW OUR WORK
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Drop weight="fill" className="text-secondary" size={24} />
                  <span className="font-medium">Water-Based Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf weight="fill" className="text-secondary" size={24} />
                  <span className="font-medium">Zero Toxic Chemicals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkle weight="fill" className="text-secondary" size={24} />
                  <span className="font-medium">99% Dust-Free</span>
                </div>
              </div>
            </motion.div>
          </div>
          <ScrollIndicator />
        </section>

        <section id="services" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                SELECT YOUR SURFACE
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose a surface type to see how our dustless blasting adapts to different materials and applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SurfaceSelector selected={surface} onSelect={setSelectedSurface} />
            </motion.div>
          </div>
        </section>

        <section id="process" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                THE DUSTLESS DIFFERENCE
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced technology meets environmental stewardship
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Eco-Glass Media',
                  description: 'Recycled glass beads combined with water create a powerful yet gentle cleaning action',
                  icon: <Sparkle weight="fill" size={32} className="text-secondary" />
                },
                {
                  title: 'Water-Powered',
                  description: 'High-velocity water jets eliminate 99% of dust while keeping surfaces cool',
                  icon: <Drop weight="fill" size={32} className="text-secondary" />
                },
                {
                  title: 'Zero Chemicals',
                  description: 'No toxic solvents or harsh chemicals - safe for you and the environment',
                  icon: <Leaf weight="fill" size={32} className="text-secondary" />
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="mb-4">{feature.icon}</div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                OUR ECO-COMMITMENT
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Every project contributes to a cleaner Idaho
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white/10 border-white/20 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <Drop weight="fill" size={40} className="text-secondary" />
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      GALLONS SAVED
                    </h3>
                  </div>
                  <div className="text-5xl md:text-6xl font-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    <AnimatedCounter value={847520} />
                  </div>
                  <p className="text-white/70">
                    Compared to traditional pressure washing methods
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white/10 border-white/20 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf weight="fill" size={40} className="text-secondary" />
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      CHEMICALS AVOIDED
                    </h3>
                  </div>
                  <div className="text-5xl md:text-6xl font-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    <AnimatedCounter value={15240} />
                  </div>
                  <p className="text-white/70">
                    Pounds of toxic solvents kept out of Idaho's ecosystem
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                READY FOR A TRANSFORMATION?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a free quote and see how dustless eco-blasting can restore your surfaces to like-new condition
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-base px-8 py-6 shadow-xl hover:shadow-2xl transition-all gap-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  REQUEST A QUOTE
                  <ArrowRight weight="bold" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8 py-6 border-2"
                >
                  (208) 555-BLAST
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: <CheckCircle weight="fill" />, text: 'Free Consultation' },
                  { icon: <CheckCircle weight="fill" />, text: 'Same-Day Quotes' },
                  { icon: <CheckCircle weight="fill" />, text: 'Flexible Scheduling' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 justify-center text-secondary"
                  >
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <IdahoFooter />
      <Toaster />
    </div>
  )
}

export default App