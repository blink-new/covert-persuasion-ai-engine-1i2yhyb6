import { useState } from 'react'
import { GeneratedContent } from '@/types/content'
import { Button } from '@/components/ui/button'
import { 
  Copy, 
  Download, 
  Share2, 
  Eye, 
  TrendingUp, 
  Brain, 
  Target,
  Zap,
  Sparkles,
  BarChart3,
  Image as ImageIcon,
  MessageCircle,
  Heart,
  Repeat2
} from 'lucide-react'
import { toast } from 'react-hot-toast'

interface ContentPreviewProps {
  content: GeneratedContent | null
  isGenerating: boolean
}

export function ContentPreview({ content, isGenerating }: ContentPreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'analytics' | 'visuals'>('preview')

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Content copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy content')
    }
  }

  const ViralScoreRing = ({ score }: { score: number }) => {
    const circumference = 2 * Math.PI * 40
    const strokeDashoffset = circumference - (score / 100) * circumference

    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-border/30"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-accent transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-accent">{score}</div>
            <div className="text-xs text-muted-foreground">Viral</div>
          </div>
        </div>
      </div>
    )
  }

  if (isGenerating) {
    return (
      <div className="stealth-card">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Brain className="h-5 w-5 text-accent animate-pulse" />
            <h3 className="text-lg font-semibold">Neural Processing</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="h-4 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-blue-500/20 to-accent/20 rounded animate-pulse" />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-20 bg-border/20 rounded animate-pulse" />
                  <div className="h-3 bg-border/20 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-sm text-accent">Analyzing psychological triggers...</div>
            <div className="text-xs text-muted-foreground">Optimizing for silent conversion</div>
          </div>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="stealth-card">
        <div className="text-center space-y-6 py-12">
          <div className="w-16 h-16 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="h-8 w-8 text-accent/60" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Ready to Create</h3>
            <p className="text-muted-foreground">
              Configure your settings and enter a topic to generate psychologically-optimized content
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="stealth-card p-4">
        <div className="flex items-center space-x-1">
          {[
            { id: 'preview', label: 'Content Preview', icon: Eye },
            { id: 'analytics', label: 'Psychology Analysis', icon: BarChart3 },
            { id: 'visuals', label: 'Visual Assets', icon: ImageIcon }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-accent/20 text-accent border border-accent/30'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Preview */}
      {activeTab === 'preview' && (
        <div className="stealth-card space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full pulse-accent" />
              <h3 className="text-lg font-semibold">Generated Content</h3>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(content.content)}
                className="comet-button-secondary"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="comet-button-secondary"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-white/5 border border-border/30">
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {content.content}
              </div>
            </div>

            {/* Engagement Prediction */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Heart className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                <div className="text-lg font-semibold text-blue-400">2.3k</div>
                <div className="text-xs text-muted-foreground">Predicted Likes</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <MessageCircle className="h-5 w-5 text-green-400 mx-auto mb-2" />
                <div className="text-lg font-semibold text-green-400">187</div>
                <div className="text-xs text-muted-foreground">Comments</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Repeat2 className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                <div className="text-lg font-semibold text-purple-400">94</div>
                <div className="text-xs text-muted-foreground">Shares</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Psychology Analysis */}
      {activeTab === 'analytics' && (
        <div className="stealth-card space-y-6">
          <div className="flex items-center space-x-3">
            <Brain className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold">Psychological Analysis</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Viral Score */}
            <div className="text-center space-y-4">
              <ViralScoreRing score={content.viralScore} />
              <div>
                <div className="text-sm font-medium text-foreground">Viral Potential</div>
                <div className="text-xs text-muted-foreground">Based on psychological triggers</div>
              </div>
            </div>

            {/* Persuasion Techniques */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">Active Techniques</h4>
              <div className="space-y-2">
                {content.persuasionTechniques.map((technique, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                    <Target className="h-4 w-4 text-accent" />
                    <span className="text-sm text-foreground">{technique}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hooks Analysis */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Psychological Hooks</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {content.hooks.map((hook, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="text-sm text-foreground">{hook}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emoji Psychology */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Emoji Psychology</h4>
            <div className="flex flex-wrap gap-2">
              {content.emojis.map((emoji, index) => (
                <div key={index} className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <span className="text-lg">{emoji}</span>
                  <span className="text-xs text-purple-400">Trigger</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Visual Assets */}
      {activeTab === 'visuals' && (
        <div className="stealth-card space-y-6">
          <div className="flex items-center space-x-3">
            <ImageIcon className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold">Strategic Visual Assets</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.visualAssets.map((asset, index) => (
              <div key={asset.id} className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <ImageIcon className="h-8 w-8 text-accent/60 mx-auto" />
                    <div className="text-xs text-muted-foreground">Visual {index + 1}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">{asset.description}</div>
                  <div className="text-xs text-accent">{asset.psychologyTrigger}</div>
                  <Button size="sm" className="w-full comet-button-secondary">
                    <Download className="h-3 w-3 mr-2" />
                    Generate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}