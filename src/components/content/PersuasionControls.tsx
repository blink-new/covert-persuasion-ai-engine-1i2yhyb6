import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Eye, Zap, Crown, Clock, Lightbulb, BookOpen, Heart, Sparkles, Target, AlertTriangle } from 'lucide-react'

interface PersuasionControlsProps {
  persuasionLevel: 'subtle' | 'moderate' | 'aggressive'
  targetEmotion: 'curiosity' | 'desire' | 'authority' | 'exclusivity' | 'urgency'
  contentType: 'educational' | 'story' | 'insight' | 'revelation' | 'challenge'
  onPersuasionChange: (level: 'subtle' | 'moderate' | 'aggressive') => void
  onEmotionChange: (emotion: 'curiosity' | 'desire' | 'authority' | 'exclusivity' | 'urgency') => void
  onContentTypeChange: (type: 'educational' | 'story' | 'insight' | 'revelation' | 'challenge') => void
}

export function PersuasionControls({
  persuasionLevel,
  targetEmotion,
  contentType,
  onPersuasionChange,
  onEmotionChange,
  onContentTypeChange
}: PersuasionControlsProps) {
  const emotions = [
    { id: 'curiosity' as const, name: 'Curiosity', icon: Eye, color: 'text-blue-400', desc: 'Pattern interrupt & mystery' },
    { id: 'desire' as const, name: 'Desire', icon: Heart, color: 'text-red-400', desc: 'Aspiration & want creation' },
    { id: 'authority' as const, name: 'Authority', icon: Crown, color: 'text-yellow-400', desc: 'Expertise & credibility' },
    { id: 'exclusivity' as const, name: 'Exclusivity', icon: Sparkles, color: 'text-purple-400', desc: 'Scarcity & elite status' },
    { id: 'urgency' as const, name: 'Urgency', icon: Clock, color: 'text-orange-400', desc: 'Time pressure & FOMO' }
  ]

  const contentTypes = [
    { id: 'educational' as const, name: 'Educational', icon: BookOpen, desc: 'Value-first teaching' },
    { id: 'story' as const, name: 'Story', icon: Heart, desc: 'Emotional narrative' },
    { id: 'insight' as const, name: 'Insight', icon: Lightbulb, desc: 'Counter-intuitive wisdom' },
    { id: 'revelation' as const, name: 'Revelation', icon: Zap, desc: 'Aha moment creation' },
    { id: 'challenge' as const, name: 'Challenge', icon: Target, desc: 'Belief confrontation' }
  ]

  const persuasionLevels = [
    { id: 'subtle' as const, name: 'Subtle', desc: 'Invisible influence', intensity: 25 },
    { id: 'moderate' as const, name: 'Moderate', desc: 'Balanced persuasion', intensity: 60 },
    { id: 'aggressive' as const, name: 'Aggressive', desc: 'Direct conversion', intensity: 90 }
  ]

  return (
    <div className="space-y-6">
      {/* Persuasion Intensity */}
      <Card className="p-6 stealth-card">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-medium">Persuasion Intensity</h3>
            <Badge variant="outline" className="text-xs border-accent/30 text-accent">
              Stealth Level
            </Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {persuasionLevels.map((level) => (
              <Button
                key={level.id}
                variant={persuasionLevel === level.id ? "default" : "outline"}
                className={`h-auto p-4 flex flex-col space-y-2 ${
                  persuasionLevel === level.id 
                    ? 'bg-accent text-accent-foreground neural-glow' 
                    : 'border-border/50'
                }`}
                onClick={() => onPersuasionChange(level.id)}
              >
                <div className="font-medium">{level.name}</div>
                <div className="text-xs opacity-80">{level.desc}</div>
                <div className="w-full bg-background/20 rounded-full h-1">
                  <div 
                    className="bg-current h-1 rounded-full transition-all duration-300"
                    style={{ width: `${level.intensity}%` }}
                  />
                </div>
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Target Emotion */}
      <Card className="p-6 stealth-card">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-medium">Emotional Trigger</h3>
            <Badge variant="outline" className="text-xs border-accent/30 text-accent">
              Psychology Core
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {emotions.map((emotion) => {
              const Icon = emotion.icon
              const isSelected = targetEmotion === emotion.id
              
              return (
                <Button
                  key={emotion.id}
                  variant="outline"
                  className={`h-auto p-4 flex flex-col space-y-2 transition-all duration-300 ${
                    isSelected 
                      ? 'border-accent bg-accent/10 neural-glow' 
                      : 'border-border/50 hover:bg-card/50'
                  }`}
                  onClick={() => onEmotionChange(emotion.id)}
                >
                  <Icon className={`h-5 w-5 ${isSelected ? emotion.color : 'text-muted-foreground'}`} />
                  <div className="text-sm font-medium">{emotion.name}</div>
                  <div className="text-xs text-muted-foreground text-center">{emotion.desc}</div>
                </Button>
              )
            })}
          </div>
        </div>
      </Card>

      {/* Content Type */}
      <Card className="p-6 stealth-card">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-medium">Content Architecture</h3>
            <Badge variant="outline" className="text-xs border-accent/30 text-accent">
              Delivery Method
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {contentTypes.map((type) => {
              const Icon = type.icon
              const isSelected = contentType === type.id
              
              return (
                <Button
                  key={type.id}
                  variant="outline"
                  className={`h-auto p-4 flex flex-col space-y-2 transition-all duration-300 ${
                    isSelected 
                      ? 'border-accent bg-accent/10 neural-glow' 
                      : 'border-border/50 hover:bg-card/50'
                  }`}
                  onClick={() => onContentTypeChange(type.id)}
                >
                  <Icon className={`h-5 w-5 ${isSelected ? 'text-accent' : 'text-muted-foreground'}`} />
                  <div className="text-sm font-medium">{type.name}</div>
                  <div className="text-xs text-muted-foreground text-center">{type.desc}</div>
                </Button>
              )
            })}
          </div>
        </div>
      </Card>
    </div>
  )
}