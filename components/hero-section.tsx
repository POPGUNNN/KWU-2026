'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center bg-primary px-4 text-primary-foreground">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              currentColor 20px,
              currentColor 21px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        {/* Brand Logo/Name */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
            10 BROTHERS
          </h1>
          <div className="h-1 w-24 bg-primary-foreground md:w-32" />
        </div>

        {/* Tagline */}
        <p className="text-balance text-lg font-medium tracking-wide opacity-90 md:text-xl lg:text-2xl">
          Enak, Praktis, Terjangkau
        </p>

        {/* Description */}
        <p className="max-w-md text-pretty text-sm opacity-75 md:text-base">
          Solusi kuliner kampus Telkom University Jakarta dengan menu favorit mahasiswa
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToMenu}
          variant="outline"
          size="lg"
          className="mt-4 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          Lihat Menu
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 animate-bounce"
        aria-label="Scroll ke menu"
      >
        <ChevronDown className="size-8 opacity-75" />
      </button>
    </section>
  )
}
