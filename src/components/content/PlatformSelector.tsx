import { Card } from '@/components/ui/card'
import { Linkedin, Instagram } from 'lucide-react'

interface PlatformSelectorProps {
  selectedPlatform: 'linkedin' | 'instagram'
  onPlatformChange: (platform: 'linkedin' | 'instagram') => void
}

export function PlatformSelector({ selectedPlatform, onPlatformChange }: PlatformSelectorProps) {
  const platforms = [
    {
      id: 'linkedin' as const,
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Professional networking',
      color: 'text-blue-400'
    },
    {
      id: 'instagram' as const,
      name: 'Instagram',
      icon: Instagram,
      description: 'Visual storytelling',
      color: 'text-pink-400'
    }
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Choose Platform</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon
          const isSelected = selectedPlatform === platform.id
          
          return (
            <Card
              key={platform.id}
              className={`p-6 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'stealth-card border-accent/50 neural-glow'
                  : 'stealth-card hover:border-accent/30'
              }`}
              onClick={() => onPlatformChange(platform.id)}
            >
              <div className="text-center space-y-3">
                <Icon className={`h-8 w-8 mx-auto ${isSelected ? 'text-accent' : platform.color}`} />
                <div>
                  <div className="font-medium text-foreground">{platform.name}</div>
                  <div className="text-sm text-muted-foreground">{platform.description}</div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}