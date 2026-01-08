import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface SurfaceSelectorProps {
  selected: 'automotive' | 'marine' | 'graffiti' | 'industrial'
  onSelect: (surface: 'automotive' | 'marine' | 'graffiti' | 'industrial') => void
}

const SURFACES = [
  {
    id: 'automotive' as const,
    title: 'Automotive',
    description: 'Paint prep, rust removal, powder coating',
    icon: '🚗'
  },
  {
    id: 'marine' as const,
    title: 'Marine',
    description: 'Boat hulls, barnacle removal, gelcoat prep',
    icon: '⚓'
  },
  {
    id: 'graffiti' as const,
    title: 'Graffiti',
    description: 'Tag removal, building restoration',
    icon: '🎨'
  },
  {
    id: 'industrial' as const,
    title: 'Industrial',
    description: 'Equipment cleaning, factory maintenance',
    icon: '🏭'
  }
]

export function SurfaceSelector({ selected, onSelect }: SurfaceSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {SURFACES.map((surface) => {
        const isSelected = selected === surface.id

        return (
          <motion.div
            key={surface.id}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              className={`relative cursor-pointer transition-all duration-300 ${
                isSelected
                  ? 'border-secondary border-2 shadow-lg'
                  : 'border-border hover:border-primary/30 hover:shadow-md'
              }`}
              onClick={() => onSelect(surface.id)}
            >
              <div className="p-6">
                {isSelected && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <Check weight="bold" className="text-white" size={14} />
                    </div>
                  </div>
                )}

                <div className="text-4xl mb-3">{surface.icon}</div>
                
                <h3 
                  className="text-lg font-bold mb-2" 
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {surface.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {surface.description}
                </p>

                {isSelected && (
                  <Badge className="mt-3 bg-secondary/10 text-secondary border-secondary/20">
                    Active Surface
                  </Badge>
                )}
              </div>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
