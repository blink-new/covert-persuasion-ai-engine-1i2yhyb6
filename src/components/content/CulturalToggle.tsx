import { Card } from '@/components/ui/card'
import { Globe, MapPin, Zap } from 'lucide-react'

interface CulturalToggleProps {
  selectedContext: 'indian' | 'global' | 'hybrid'
  onContextChange: (context: 'indian' | 'global' | 'hybrid') => void
}

export function CulturalToggle({ selectedContext, onContextChange }: CulturalToggleProps) {
  const contexts = [
    {
      id: 'indian' as const,
      name: 'Indian',
      icon: MapPin,
      description: 'Local cultural references',
      color: 'text-orange-400'
    },
    {
      id: 'global' as const,
      name: 'Global',
      icon: Globe,
      description: 'Universal appeal',
      color: 'text-blue-400'
    },
    {
      id: 'hybrid' as const,
      name: 'Hybrid',
      icon: Zap,
      description: 'Best of both worlds',
      color: 'text-purple-400'
    }
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Cultural Context</h3>
      
      <div className="grid grid-cols-3 gap-3">
        {contexts.map((context) => {
          const Icon = context.icon
          const isSelected = selectedContext === context.id
          
          return (
            <Card
              key={context.id}
              className={`p-4 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'stealth-card border-accent/50 neural-glow'
                  : 'stealth-card hover:border-accent/30'
              }`}
              onClick={() => onContextChange(context.id)}
            >
              <div className="text-center space-y-2">
                <Icon className={`h-6 w-6 mx-auto ${isSelected ? 'text-accent' : context.color}`} />
                <div>
                  <div className="font-medium text-foreground text-sm">{context.name}</div>
                  <div className="text-xs text-muted-foreground">{context.description}</div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}