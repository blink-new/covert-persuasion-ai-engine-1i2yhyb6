export interface ContentRequest {
  platform: 'linkedin' | 'instagram'
  topic: string
  culturalContext: 'indian' | 'global' | 'hybrid'
  persuasionLevel: 'subtle' | 'moderate' | 'aggressive'
  targetEmotion: 'curiosity' | 'desire' | 'authority' | 'exclusivity' | 'urgency'
  contentType: 'educational' | 'story' | 'insight' | 'revelation' | 'challenge'
}

export interface GeneratedContent {
  id: string
  platform: 'linkedin' | 'instagram'
  content: string
  hooks: string[]
  ctaType: 'invisible' | 'soft' | 'direct'
  viralScore: number
  persuasionTechniques: string[]
  emojis: string[]
  visualAssets: VisualAsset[]
  createdAt: Date
}

export interface VisualAsset {
  id: string
  type: 'persuasion-graphic' | 'info-architecture' | 'signature-element'
  url: string
  description: string
  psychologyTrigger: string
}

export interface PersuasionPattern {
  id: string
  name: string
  description: string
  platform: 'linkedin' | 'instagram' | 'both'
  psychologyPrinciple: string
  template: string
  effectiveness: number
}