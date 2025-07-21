import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { PlatformSelector } from '@/components/content/PlatformSelector'
import { CulturalToggle } from '@/components/content/CulturalToggle'
import { PersuasionControls } from '@/components/content/PersuasionControls'
import { ContentGenerator } from '@/components/content/ContentGenerator'
import { ContentPreview } from '@/components/content/ContentPreview'
import { PersuasionLab } from '@/components/content/PersuasionLab'
import { ContentRequest, GeneratedContent } from '@/types/content'
import { blink } from '@/blink/client'
import { Brain, Sparkles, Target, Zap } from 'lucide-react'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const [showLab, setShowLab] = useState(false)
  const [currentStep, setCurrentStep] = useState<'setup' | 'generate' | 'preview'>('setup')

  const [contentRequest, setContentRequest] = useState<ContentRequest>({
    platform: 'linkedin',
    topic: '',
    culturalContext: 'hybrid',
    persuasionLevel: 'moderate',
    targetEmotion: 'curiosity',
    contentType: 'insight'
  })

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  const generateAdvancedContent = (topic: string, request: ContentRequest): string => {
    const persuasionTemplates = {
      linkedin: {
        subtle: `Most professionals think ${topic} is about following best practices. Here's what 5 years of data revealed... 🤔

The conventional approach misses 73% of the opportunity.

After analyzing 10,000+ cases, I discovered 3 patterns that separate top performers:

→ They focus on what others ignore
→ They question what "everyone knows"  
→ They measure what matters, not what's easy

Last quarter, a client applied this framework and saw results that surprised even me.

The difference wasn't talent or resources. It was perspective.

What's been your experience with ${topic}? Have you noticed similar patterns? 💭

P.S. The full methodology is something I reserve for strategic conversations. But if this resonates, let's connect. 🚀`,

        moderate: `Everyone talks about ${topic}, but nobody talks about the psychology behind it... 💡

Here's what changed everything for me:

The moment I stopped following "best practices" and started understanding human behavior.

3 insights that transformed my approach:

🎯 People don't buy products, they buy better versions of themselves
🧠 Emotion drives decision, logic justifies it
⚡ Timing beats perfection every time

The result? 300% improvement in outcomes within 60 days.

But here's the thing most people miss...

Success isn't about having the right strategy. It's about understanding the right psychology.

What's your take on this? Have you seen similar patterns in your field? 🤝

(The framework I use is detailed in my bio - but only for those ready to think differently) 🔗`,

        aggressive: `STOP doing ${topic} the way everyone else does it. 🛑

I'm about to share something that will either excite you or make you uncomfortable...

After working with 500+ companies, I've discovered that 87% of professionals are doing ${topic} completely wrong.

Not because they're not smart. Not because they don't work hard.

Because they're following advice from people who've never achieved what they want to achieve.

Here's the truth nobody wants to tell you:

❌ The "proven methods" are proven to keep you average
❌ The "safe approach" is the riskiest thing you can do
❌ The "best practices" are best at maintaining the status quo

The companies that 10x their results? They do the opposite.

They think like psychologists, not practitioners.
They focus on influence, not information.
They create desire, not just deliver value.

Ready to join the 13% who actually get results?

The methodology is in my bio. But fair warning - it's not for everyone. 🔥

Only apply if you're ready to leave average behind.`
      },

      instagram: {
        subtle: `Everyone's talking about ${topic}, but here's what they're not telling you... ✨

The secret isn't in the strategy. It's in the psychology. 🧠

3 things that changed my perspective:
• Authenticity beats perfection every time 💯
• Small consistent actions > big sporadic efforts 
• Your unique viewpoint is your superpower 🦸‍♀️

Swipe to see the exact mindset shift that transformed everything ➡️

What's been your biggest insight about ${topic}? Drop it below! 👇

#${topic.replace(/\s+/g, '')} #mindsetshift #authenticity #growth`,

        moderate: `Plot twist: ${topic} isn't what you think it is... 🌟

Here's what I discovered after 3 years of getting it wrong:

The game isn't about being perfect.
It's about being magnetic. 🧲

The framework that changed everything:
1️⃣ Create curiosity, not content
2️⃣ Build bridges, not walls
3️⃣ Spark conversations, not just likes

The result? My engagement went from 2% to 47% in 90 days.

But here's the real secret... 🤫

It's not about the algorithm. It's about human psychology.

Save this post for when you're ready to level up 📌

Tag someone who needs to see this shift! 👥

#${topic.replace(/\s+/g, '')} #psychology #engagement #growth #mindset`,

        aggressive: `Unpopular opinion: Most advice about ${topic} is keeping you stuck. 🔥

I said what I said. 💯

Here's why 95% of people fail at ${topic}:

They're optimizing for likes, not lives.
They're following trends, not truth.
They're copying others instead of creating value.

The 5% who actually succeed? They do this instead:

🎯 They study psychology, not just strategy
🧠 They create desire, not just deliver content  
⚡ They build movements, not just audiences

The shift that changed everything for me:

I stopped asking "What should I post?"
I started asking "What do they need to feel?"

The result? 10x growth in 6 months.

But here's what nobody tells you... 👀

Success isn't about having more followers.
It's about having more influence.

Ready to stop playing small?

The blueprint is in my bio. But only if you're serious about results. 🚀

#${topic.replace(/\s+/g, '')} #influence #psychology #growth #truth`
      }
    }

    return persuasionTemplates[request.platform][request.persuasionLevel]
  }

  const generateContent = async (topic: string) => {
    setIsGenerating(true)
    setCurrentStep('generate')
    
    try {
      // Simulate AI content generation with realistic timing
      await new Promise(resolve => setTimeout(resolve, 4000))
      
      const mockContent: GeneratedContent = {
        id: `content_${Date.now()}`,
        platform: contentRequest.platform,
        content: generateAdvancedContent(topic, contentRequest),
        hooks: [
          'Pattern interrupt opening',
          'Curiosity gap creation', 
          'Authority positioning',
          'Social proof embedding',
          'Invisible CTA placement'
        ],
        ctaType: 'invisible',
        viralScore: Math.floor(Math.random() * 25) + 75,
        persuasionTechniques: [
          'Social Proof Embedding',
          'Authority Echo',
          'Curiosity Loop',
          'Invisible CTA',
          'Cultural Bridge',
          'Scarcity Implication',
          'Future Pacing',
          'Pattern Interrupt'
        ],
        emojis: ['🤔', '💡', '🚀', '✨', '🎯', '🧠', '⚡', '🔥'],
        visualAssets: [
          {
            id: 'visual_1',
            type: 'persuasion-graphic',
            url: '',
            description: 'Emotional trigger infographic with psychological anchors',
            psychologyTrigger: 'Visual authority building + curiosity activation'
          },
          {
            id: 'visual_2',
            type: 'info-architecture',
            url: '',
            description: 'Data visualization with social proof elements',
            psychologyTrigger: 'Credibility through data + bandwagon effect'
          },
          {
            id: 'visual_3',
            type: 'signature-element',
            url: '',
            description: 'Branded quote card with viral mechanics',
            psychologyTrigger: 'Shareability optimization + status signaling'
          }
        ],
        createdAt: new Date()
      }
      
      setGeneratedContent(mockContent)
      setCurrentStep('preview')
    } catch (error) {
      console.error('Content generation failed:', error)
      setCurrentStep('setup')
    } finally {
      setIsGenerating(false)
    }
  }

  const resetToSetup = () => {
    setCurrentStep('setup')
    setGeneratedContent(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-purple-500 rounded-full animate-pulse mx-auto neural-glow" />
            <div className="absolute inset-0 w-16 h-16 border-2 border-accent/30 rounded-full animate-spin mx-auto" />
          </div>
          <div className="space-y-2">
            <div className="text-xl font-semibold gradient-text">Initializing Neural Engine...</div>
            <div className="text-sm text-muted-foreground">Calibrating psychological algorithms</div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl float-animation" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="text-center space-y-8 max-w-lg relative z-10">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Brain className="h-12 w-12 text-accent neural-glow" />
              <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold gradient-text">
              Covert Persuasion Engine
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Access the psychological content intelligence platform that transforms ordinary posts into conversion magnets
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-green-400" />
                <span>Silent Conversion</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>Viral Mechanics</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => blink.auth.login()}
            className="px-8 py-4 comet-button rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Enter the Neural Lab
          </button>
          
          <div className="text-xs text-muted-foreground">
            Join 10,000+ creators using psychological intelligence
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onLabToggle={() => setShowLab(!showLab)} />
      
      {showLab ? (
        <PersuasionLab onClose={() => setShowLab(false)} />
      ) : (
        <main className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Step-by-step flow */}
          {currentStep === 'setup' && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold gradient-text">Create Persuasive Content</h2>
                <p className="text-muted-foreground text-lg">Configure your content strategy in simple steps</p>
              </div>

              <div className="space-y-8">
                <PlatformSelector
                  selectedPlatform={contentRequest.platform}
                  onPlatformChange={(platform) => 
                    setContentRequest(prev => ({ ...prev, platform }))
                  }
                />
                
                <CulturalToggle
                  selectedContext={contentRequest.culturalContext}
                  onContextChange={(culturalContext) =>
                    setContentRequest(prev => ({ ...prev, culturalContext }))
                  }
                />
                
                <PersuasionControls
                  persuasionLevel={contentRequest.persuasionLevel}
                  targetEmotion={contentRequest.targetEmotion}
                  contentType={contentRequest.contentType}
                  onPersuasionChange={(persuasionLevel) =>
                    setContentRequest(prev => ({ ...prev, persuasionLevel }))
                  }
                  onEmotionChange={(targetEmotion) =>
                    setContentRequest(prev => ({ ...prev, targetEmotion }))
                  }
                  onContentTypeChange={(contentType) =>
                    setContentRequest(prev => ({ ...prev, contentType }))
                  }
                />
                
                <ContentGenerator
                  contentRequest={contentRequest}
                  onGenerate={generateContent}
                  isGenerating={isGenerating}
                />
              </div>
            </div>
          )}

          {currentStep === 'generate' && (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent to-purple-500 rounded-full animate-pulse mx-auto neural-glow" />
                  <div className="absolute inset-0 w-20 h-20 border-2 border-accent/30 rounded-full animate-spin mx-auto" />
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-semibold gradient-text">Crafting Persuasion...</div>
                  <div className="text-muted-foreground">Applying psychological triggers and cultural intelligence</div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'preview' && generatedContent && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold gradient-text">Generated Content</h2>
                  <p className="text-muted-foreground">Your psychologically-optimized content is ready</p>
                </div>
                <button
                  onClick={resetToSetup}
                  className="px-4 py-2 comet-button-secondary rounded-lg text-sm"
                >
                  Create New
                </button>
              </div>
              
              <ContentPreview
                content={generatedContent}
                isGenerating={false}
              />
            </div>
          )}
        </main>
      )}
    </div>
  )
}

export default App