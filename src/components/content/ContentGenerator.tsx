import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ContentRequest } from '@/types/content'
import { Sparkles, Zap, Brain, Target, Wand2 } from 'lucide-react'

interface ContentGeneratorProps {
  contentRequest: ContentRequest
  onGenerate: (topic: string) => void
  isGenerating: boolean
}

export function ContentGenerator({ contentRequest, onGenerate, isGenerating }: ContentGeneratorProps) {
  const [topic, setTopic] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleGenerate = () => {
    if (topic.trim()) {
      onGenerate(topic.trim())
    }
  }

  const quickPrompts = [
    "My startup's latest funding round success",
    "Leadership lessons from managing remote teams",
    "AI transformation in Indian fintech",
    "Building authentic personal brand",
    "Overcoming imposter syndrome in tech",
    "Cultural intelligence in global business"
  ]

  const persuasionIndicators = {
    subtle: { color: 'text-blue-400', label: 'Gentle Influence', intensity: 30 },
    moderate: { color: 'text-yellow-400', label: 'Balanced Persuasion', intensity: 65 },
    aggressive: { color: 'text-red-400', label: 'High Impact', intensity: 90 }
  }

  const currentIndicator = persuasionIndicators[contentRequest.persuasionLevel]

  return (
    <div className="stealth-card space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Brain className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold">Content Engine</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <div className={`w-2 h-2 rounded-full ${currentIndicator.color.replace('text-', 'bg-')}`} />
          <span className={currentIndicator.color}>{currentIndicator.label}</span>
        </div>
      </div>

      {/* Persuasion Level Indicator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Persuasion Intensity</span>
          <span className={currentIndicator.color}>{currentIndicator.intensity}%</span>
        </div>
        <div className="w-full bg-border/30 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${currentIndicator.color.replace('text-', 'bg-')}`}
            style={{ width: `${currentIndicator.intensity}%` }}
          />
        </div>
      </div>

      {/* Topic Input */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          Content Topic or Idea
        </label>
        <Textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Describe your content idea, recent achievement, or insight you want to share..."
          className="comet-input min-h-[100px] resize-none"
          disabled={isGenerating}
        />
      </div>

      {/* Quick Prompts */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">Quick Prompts</label>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-xs text-accent hover:text-accent/80 transition-colors"
          >
            {showAdvanced ? 'Hide' : 'Show'} Advanced
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-2">
          {quickPrompts.slice(0, showAdvanced ? quickPrompts.length : 3).map((prompt, index) => (
            <button
              key={index}
              onClick={() => setTopic(prompt)}
              className="text-left p-3 rounded-lg glass-card-hover text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
              disabled={isGenerating}
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="h-3 w-3 text-accent/60" />
                <span>{prompt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Platform-specific tips */}
      <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
        <div className="flex items-start space-x-3">
          <Target className="h-4 w-4 text-accent mt-0.5" />
          <div className="space-y-1">
            <div className="text-sm font-medium text-accent">
              {contentRequest.platform === 'linkedin' ? 'LinkedIn Strategy' : 'Instagram Strategy'}
            </div>
            <div className="text-xs text-muted-foreground">
              {contentRequest.platform === 'linkedin' 
                ? 'Professional tone with authority building and invisible CTAs for networking'
                : 'Visual storytelling with emotional hooks and shareability triggers'
              }
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <Button
        onClick={handleGenerate}
        disabled={!topic.trim() || isGenerating}
        className="w-full comet-button py-6 text-base font-semibold"
      >
        {isGenerating ? (
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Crafting Persuasion...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <Wand2 className="h-5 w-5" />
            <span>Generate Neural Content</span>
            <Zap className="h-4 w-4" />
          </div>
        )}
      </Button>

      {/* Cultural Context Indicator */}
      <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          <span>
            {contentRequest.culturalContext === 'indian' ? 'Indian Context' :
             contentRequest.culturalContext === 'global' ? 'Global Appeal' : 'Hybrid Approach'}
          </span>
        </div>
        <div className="w-1 h-1 bg-border rounded-full" />
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
          <span>{contentRequest.targetEmotion} trigger</span>
        </div>
      </div>
    </div>
  )
}