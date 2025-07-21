import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Camera, Users, TrendingUp } from 'lucide-react'

interface PlatformSelectorProps {
  selectedPlatform: 'linkedin' | 'instagram'
  onPlatformChange: (platform: 'linkedin' | 'instagram') => void
}

export function PlatformSelector({ selectedPlatform, onPlatformChange }: PlatformSelectorProps) {
  const platforms = [
    {
      id: 'linkedin' as const,
      name: 'LinkedIn',
      icon: Briefcase,
      description: 'Authority Trap Protocol',
      psychology: 'Professional credibility & thought leadership',
      triggers: ['Authority', 'Expertise', 'Network Effect'],
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10 border-blue-400/30'
    },
    {
      id: 'instagram' as const,
      name: 'Instagram',
      icon: Camera,
      description: 'Lifestyle Seduction Protocol',
      psychology: 'Aspiration & social proof',
      triggers: ['FOMO', 'Lifestyle', 'Visual Appeal'],
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10 border-pink-400/30'
    }
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <TrendingUp className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium">Platform Intelligence</h3>
        <Badge variant="outline" className="text-xs border-accent/30 text-accent">
          Psychological Targeting
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon
          const isSelected = selectedPlatform === platform.id
          
          return (
            <Card
              key={platform.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                isSelected 
                  ? `${platform.bgColor} neural-glow` 
                  : 'stealth-card hover:bg-card/70'
              }`}
              onClick={() => onPlatformChange(platform.id)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon className={`h-6 w-6 ${isSelected ? platform.color : 'text-muted-foreground'}`} />
                    <div>
                      <h4 className="font-medium">{platform.name}</h4>
                      <p className="text-sm text-muted-foreground">{platform.description}</p>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-3 h-3 bg-accent rounded-full pulse-accent" />
                  )}
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{platform.psychology}</p>
                  <div className="flex flex-wrap gap-2">
                    {platform.triggers.map((trigger) => (
                      <Badge 
                        key={trigger} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {trigger}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}