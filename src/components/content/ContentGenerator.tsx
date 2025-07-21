import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { ContentRequest } from '@/types/content'
import { Sparkles, Wand2 } from 'lucide-react'

interface ContentGeneratorProps {
  contentRequest: ContentRequest
  onGenerate: (topic: string) => void
  isGenerating: boolean
}

export function ContentGenerator({ contentRequest, onGenerate, isGenerating }: ContentGeneratorProps) {
  const [topic, setTopic] = useState('')

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
    "Overcoming imposter syndrome in tech"
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Content Topic</h3>
      
      <Card className="stealth-card p-6 space-y-6">
        {/* Topic Input */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            What would you like to create content about?
          </label>
          <Textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Describe your content idea, recent achievement, or insight you want to share..."
            className="comet-input min-h-[120px] resize-none"
            disabled={isGenerating}
          />
        </div>

        {/* Quick Prompts */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Or choose a quick prompt:</label>
          
          <div className="space-y-2">
            {quickPrompts.slice(0, 3).map((prompt, index) => (
              <button
                key={index}
                onClick={() => setTopic(prompt)}
                className="w-full text-left p-3 rounded-lg glass-card-hover text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
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
              <span>Generate Content</span>
            </div>
          )}
        </Button>
      </Card>
    </div>
  )
}