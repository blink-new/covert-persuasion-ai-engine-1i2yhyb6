import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GeneratedContent } from '@/types/content'
import { 
  Copy, 
  Download, 
  Share2, 
  TrendingUp,
  Zap,
  Target,
  Brain
} from 'lucide-react'

interface ContentPreviewProps {
  content: GeneratedContent | null
  isGenerating: boolean
}

export function ContentPreview({ content, isGenerating }: ContentPreviewProps) {
  if (isGenerating) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-accent to-purple-500 rounded-full animate-pulse mx-auto neural-glow" />
          <div className="text-lg font-semibold gradient-text">Generating content...</div>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <Card className="stealth-card p-12 text-center">
        <div className="space-y-4">
          <Brain className="h-12 w-12 text-muted-foreground mx-auto" />
          <div>
            <h3 className="text-lg font-semibold text-foreground">Ready to Create</h3>
            <p className="text-muted-foreground">Configure your settings and generate persuasive content</p>
          </div>
        </div>
      </Card>
    )
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content.content)
  }

  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="stealth-card p-4 text-center">
          <div className="space-y-2">
            <TrendingUp className="h-6 w-6 text-green-400 mx-auto" />
            <div className="text-2xl font-bold text-foreground">{content.viralScore}%</div>
            <div className="text-sm text-muted-foreground">Viral Score</div>
          </div>
        </Card>
        
        <Card className="stealth-card p-4 text-center">
          <div className="space-y-2">
            <Zap className="h-6 w-6 text-yellow-400 mx-auto" />
            <div className="text-2xl font-bold text-foreground">{content.hooks.length}</div>
            <div className="text-sm text-muted-foreground">Hooks</div>
          </div>
        </Card>
        
        <Card className="stealth-card p-4 text-center">
          <div className="space-y-2">
            <Target className="h-6 w-6 text-blue-400 mx-auto" />
            <div className="text-2xl font-bold text-foreground">{content.persuasionTechniques.length}</div>
            <div className="text-sm text-muted-foreground">Techniques</div>
          </div>
        </Card>
      </div>

      {/* Content Preview */}
      <Card className="stealth-card p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Generated Content</h3>
            <Badge variant="outline" className="text-accent border-accent/30">
              {content.platform}
            </Badge>
          </div>
          
          <div className="p-4 rounded-lg bg-white/5 border border-border/30">
            <pre className="whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed">
              {content.content}
            </pre>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button onClick={copyToClipboard} className="comet-button-secondary">
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
            
            <Button className="comet-button-secondary">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            
            <Button className="comet-button-secondary">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </Card>

      {/* Persuasion Techniques Used */}
      <Card className="stealth-card p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Persuasion Techniques Applied</h3>
          
          <div className="flex flex-wrap gap-2">
            {content.persuasionTechniques.map((technique, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {technique}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}