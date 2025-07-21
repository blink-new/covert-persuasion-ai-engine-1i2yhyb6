import { Brain, Beaker, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { blink } from '@/blink/client'

interface HeaderProps {
  onLabToggle?: () => void
}

export function Header({ onLabToggle }: HeaderProps) {
  return (
    <header className="border-b border-border/30 glass-card rounded-none">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Brain className="h-8 w-8 text-accent neural-glow" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full pulse-accent" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">
                Covert Persuasion Engine
              </h1>
              <p className="text-xs text-muted-foreground">
                Psychological Content Intelligence
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onLabToggle}
              className="comet-button-secondary border-accent/30 text-accent hover:bg-accent/10"
            >
              <Beaker className="h-4 w-4 mr-2" />
              Psychology Lab
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => blink.auth.logout()}
              className="border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}