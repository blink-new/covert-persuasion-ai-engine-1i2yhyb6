import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe, MapPin, Blend } from 'lucide-react'

interface CulturalToggleProps {
  selectedContext: 'indian' | 'global' | 'hybrid'
  onContextChange: (context: 'indian' | 'global' | 'hybrid') => void
}

export function CulturalToggle({ selectedContext, onContextChange }: CulturalToggleProps) {
  const contexts = [
    {
      id: 'indian' as const,
      name: 'Indian Context',
      icon: MapPin,
      description: 'Authentic cultural markers',
      examples: ['Festival wisdom', 'Family values', 'Startup culture'],
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10 border-orange-400/30'
    },
    {
      id: 'global' as const,
      name: 'Global Appeal',
      icon: Globe,
      description: 'Universal principles',
      examples: ['Cross-cultural success', 'Universal emotions', 'Global trends'],
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10 border-blue-400/30'
    },
    {
      id: 'hybrid' as const,
      name: 'Hybrid Bridge',
      icon: Blend,
      description: 'Best of both worlds',
      examples: ['Local stories, global lessons', 'Cultural bridges', 'Universal relatability'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10 border-purple-400/30'
    }
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Globe className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium">Cultural Intelligence</h3>
        <Badge variant="outline" className="text-xs border-accent/30 text-accent">
          Authenticity Engine
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contexts.map((context) => {
          const Icon = context.icon
          const isSelected = selectedContext === context.id
          
          return (
            <Card
              key={context.id}
              className={`p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                isSelected 
                  ? `${context.bgColor} neural-glow` 
                  : 'stealth-card hover:bg-card/70'
              }`}
              onClick={() => onContextChange(context.id)}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon className={`h-5 w-5 ${isSelected ? context.color : 'text-muted-foreground'}`} />
                    <h4 className="font-medium text-sm">{context.name}</h4>
                  </div>
                  {isSelected && (
                    <div className="w-2 h-2 bg-accent rounded-full pulse-accent" />
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground">{context.description}</p>
                
                <div className="space-y-1">
                  {context.examples.map((example) => (
                    <div key={example} className="text-xs text-muted-foreground/80">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}