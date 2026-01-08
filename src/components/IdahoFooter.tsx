import { MapPin, Leaf, Phone, EnvelopeSimple } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'

export function IdahoFooter() {
  return (
    <footer className="relative bg-dark-slate text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path
            d="M 100 50 L 120 80 L 110 120 L 130 180 L 120 220 L 110 260 L 100 300 L 90 340 L 80 360 L 70 340 L 60 300 L 50 260 L 40 220 L 50 180 L 40 140 L 50 100 L 60 80 L 80 60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <path
            d="M 95 55 L 115 85 L 105 125 L 125 185 L 115 225 L 105 265 L 95 305 L 85 345 L 75 365 L 65 345 L 55 305 L 45 265 L 35 225 L 45 185 L 35 145 L 45 105 L 55 85 L 75 65 Z"
            fill="currentColor"
            opacity="0.05"
          />
          <circle cx="75" cy="140" r="3" fill="currentColor" opacity="0.6" />
          <text x="85" y="145" fontSize="8" fill="currentColor" opacity="0.7">Boise</text>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-white font-bold">PW</span>
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                PRESTIGE WORLDWIDE
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Idaho's premier eco-friendly dustless blasting service. Transforming surfaces without harming the environment.
            </p>
            <div className="flex items-center gap-2 text-secondary">
              <Leaf weight="fill" size={20} />
              <span className="text-sm font-medium">100% Eco-Friendly</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              CONTACT US
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin weight="fill" className="text-secondary mt-0.5" size={18} />
                <div>
                  <p className="text-gray-300">Serving all of Idaho</p>
                  <p className="text-gray-400">Boise · Meridian · Nampa</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone weight="fill" className="text-secondary" size={18} />
                <p className="text-gray-300">(208) 555-BLAST</p>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeSimple weight="fill" className="text-secondary" size={18} />
                <p className="text-gray-300">info@prestigeblast.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              SERVICES
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-secondary transition-colors cursor-pointer">Automotive Restoration</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Marine Cleaning</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Graffiti Removal</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Industrial Maintenance</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Rust Removal</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Powder Coating Prep</li>
            </ul>
          </motion.div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Prestige Worldwide Dustless Eco-Blast. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
