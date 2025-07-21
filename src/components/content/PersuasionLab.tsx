import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  X, 
  Brain, 
  Target, 
  Zap, 
  Eye, 
  TrendingUp, 
  Users, 
  MessageCircle,
  Heart,
  Share2,
  BarChart3,
  Lightbulb,
  Crown,
  Clock,
  Sparkles
} from 'lucide-react'

interface PersuasionLabProps {
  onClose: () => void
}

export function PersuasionLab({ onClose }: PersuasionLabProps) {
  const [activeSection, setActiveSection] = useState<'patterns' | 'triggers' | 'analytics'>('patterns')

  const persuasionPatterns = [
    {
      id: 'authority-echo',
      name: 'Authority Echo',
      description: 'Reference others\' success while positioning yourself as the guide',
      example: '"My client John increased revenue 300% by applying what I\'m about to share..."',
      effectiveness: 92,
      platform: 'both',
      psychology: 'Social proof + Authority positioning'
    },
    {
      id: 'curiosity-loop',
      name: 'Curiosity Loop',
      description: 'Start stories/tips in one post, continue in the next',
      example: '"The 3rd insight changed everything... (more on this tomorrow)"',
      effectiveness: 87,
      platform: 'both',
      psychology: 'Psychological need for closure'
    },
    {
      id: 'reverse-psychology',
      name: 'Reverse Psychology Hook',
      description: 'Make them want to prove they can do it',
      example: '"Don\'t try this unless you\'re already successful at..."',
      effectiveness: 84,
      platform: 'linkedin',
      psychology: 'Status trigger + Challenge acceptance'
    },
    {
      id: 'trojan-horse',
      name: 'Trojan Horse Method',
      description: 'Package business advice inside personal stories',
      example: 'Emotional connection bypasses logical resistance',
      effectiveness: 89,
      platform: 'both',
      psychology: 'Emotional bypass + Trust building'
    }
  ]

  const psychologyTriggers = [
    {
      id: 'scarcity',
      name: 'Scarcity Implication',
      icon: Clock,
      description: 'Create perception of limited availability',
      examples: ['"This approach isn\'t for everyone"', '"Only works if you\'re ready to..."'],
      color: 'text-orange-400'
    },
    {
      id: 'authority',
      name: 'Authority Positioning',
      icon: Crown,
      description: 'Establish expertise without bragging',
      examples: ['"In my experience helping 100+ companies..."', '"After analyzing thousands of cases..."'],
      color: 'text-yellow-400'
    },
    {
      id: 'social-proof',
      name: 'Social Proof Embedding',
      icon: Users,
      description: 'Subtle indicators of desirability',
      examples: ['"My clients often ask..."', '"The companies that 10x their results..."'],
      color: 'text-blue-400'
    },
    {
      id: 'curiosity',
      name: 'Curiosity Activation',
      icon: Eye,
      description: 'Pattern interrupts and mystery creation',
      examples: ['"Most people believe X. Here\'s what I discovered..."', '"The mistake in slide 7 cost me ₹50,000"'],
      color: 'text-purple-400'
    }
  ]

  const analyticsData = [
    {
      metric: 'Engagement Rate',
      value: '23.4%',
      change: '+156%',
      description: 'vs. generic content',
      icon: Heart,
      color: 'text-red-400'
    },
    {
      metric: 'Silent Conversions',
      value: '847',
      change: '+89%',
      description: 'profile visits → DMs',
      icon: Target,
      color: 'text-green-400'
    },
    {
      metric: 'Viral Coefficient',
      value: '2.3x',
      change: '+134%',
      description: 'reshare probability',
      icon: Share2,
      color: 'text-blue-400'
    },
    {
      metric: 'Authority Score',
      value: '94/100',
      change: '+67%',
      description: 'credibility perception',
      icon: Crown,
      color: 'text-yellow-400'
    }
  ]

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-full flex items-center justify-center neural-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Psychology Lab</h1>
              <p className="text-muted-foreground">Advanced persuasion intelligence & pattern analysis</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="border-border/50 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-2" />
            Close Lab
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-1 mb-8">
          {[
            { id: 'patterns', label: 'Persuasion Patterns', icon: Lightbulb },
            { id: 'triggers', label: 'Psychology Triggers', icon: Zap },
            { id: 'analytics', label: 'Performance Analytics', icon: BarChart3 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === tab.id
                  ? 'bg-accent/20 text-accent border border-accent/30 neural-glow'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeSection === 'patterns' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {persuasionPatterns.map((pattern) => (
                <Card key={pattern.id} className="stealth-card p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{pattern.name}</h3>
                        <p className="text-sm text-muted-foreground">{pattern.psychology}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-accent">{pattern.effectiveness}%</div>
                        <div className="text-xs text-muted-foreground">Effectiveness</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground">{pattern.description}</p>
                    
                    <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="text-xs text-accent font-medium mb-2">Example:</div>
                      <div className="text-sm text-foreground italic">"{pattern.example}"</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {pattern.platform === 'both' ? 'LinkedIn + Instagram' : pattern.platform}
                      </Badge>
                      <Button size="sm" className="comet-button-secondary">
                        Apply Pattern
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'triggers' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {psychologyTriggers.map((trigger) => {
                const Icon = trigger.icon
                return (
                  <Card key={trigger.id} className="stealth-card p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon className={`h-6 w-6 ${trigger.color}`} />
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{trigger.name}</h3>
                          <p className="text-sm text-muted-foreground">{trigger.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-foreground">Implementation Examples:</div>
                        {trigger.examples.map((example, index) => (
                          <div key={index} className="p-3 rounded-lg bg-white/5 border border-border/30">
                            <div className="text-sm text-foreground italic">"{example}"</div>
                          </div>
                        ))}
                      </div>
                      
                      <Button size="sm" className="w-full comet-button-secondary">
                        <Target className="h-4 w-4 mr-2" />
                        Activate Trigger
                      </Button>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {activeSection === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analyticsData.map((data) => {
                const Icon = data.icon
                return (
                  <Card key={data.metric} className="stealth-card p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Icon className={`h-6 w-6 ${data.color}`} />
                        <Badge variant="outline" className="text-xs text-green-400 border-green-400/30">
                          {data.change}
                        </Badge>
                      </div>
                      
                      <div>
                        <div className="text-2xl font-bold text-foreground">{data.value}</div>
                        <div className="text-sm text-muted-foreground">{data.metric}</div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">{data.description}</div>
                    </div>
                  </Card>
                )
              })}
            </div>
            
            <Card className="stealth-card p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Conversion Funnel Analysis</h3>
                <div className="space-y-3">
                  {[
                    { stage: 'Attention Capture', rate: '94%', description: 'Hook effectiveness' },
                    { stage: 'Engagement Trigger', rate: '67%', description: 'Comment/reaction rate' },
                    { stage: 'Profile Visit', rate: '23%', description: 'Curiosity conversion' },
                    { stage: 'Silent Conversion', rate: '8.4%', description: 'DM/connection rate' }
                  ].map((stage, index) => (
                    <div key={stage.stage} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-medium text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{stage.stage}</div>
                          <div className="text-xs text-muted-foreground">{stage.description}</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-accent">{stage.rate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}