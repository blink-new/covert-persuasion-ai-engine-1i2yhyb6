import { Card } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'

interface PersuasionControlsProps {
  persuasionLevel: 'subtle' | 'moderate' | 'aggressive'
  targetEmotion: string
  contentType: string
  onPersuasionChange: (level: 'subtle' | 'moderate' | 'aggressive') => void
  onEmotionChange: (emotion: string) => void
  onContentTypeChange: (type: string) => void
}

export function PersuasionControls({
  persuasionLevel,
  targetEmotion,
  contentType,
  onPersuasionChange,
  onEmotionChange,
  onContentTypeChange
}: PersuasionControlsProps) {
  const persuasionLevels = [
    { id: 'subtle', label: 'Gentle', intensity: 30, color: 'text-blue-400' },
    { id: 'moderate', label: 'Balanced', intensity: 65, color: 'text-yellow-400' },
    { id: 'aggressive', label: 'High Impact', intensity: 90, color: 'text-red-400' }
  ]

  const emotions = ['curiosity', 'excitement', 'trust', 'urgency', 'inspiration']
  const contentTypes = ['insight', 'story', 'tip', 'question', 'announcement']

  const currentLevel = persuasionLevels.find(level => level.id === persuasionLevel)

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Persuasion Settings</h3>
      
      <Card className="stealth-card p-6 space-y-6">
        {/* Persuasion Level */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">Persuasion Intensity</label>
            <Badge variant="outline" className={`${currentLevel?.color} border-current`}>
              {currentLevel?.label} - {currentLevel?.intensity}%
            </Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {persuasionLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => onPersuasionChange(level.id as any)}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  persuasionLevel === level.id
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10'
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        {/* Target Emotion */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Target Emotion</label>
          <div className="flex flex-wrap gap-2">
            {emotions.map((emotion) => (
              <button
                key={emotion}
                onClick={() => onEmotionChange(emotion)}
                className={`px-3 py-2 rounded-lg text-sm capitalize transition-all duration-200 ${
                  targetEmotion === emotion
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10'
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>

        {/* Content Type */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Content Type</label>
          <div className="flex flex-wrap gap-2">
            {contentTypes.map((type) => (
              <button
                key={type}
                onClick={() => onContentTypeChange(type)}
                className={`px-3 py-2 rounded-lg text-sm capitalize transition-all duration-200 ${
                  contentType === type
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}