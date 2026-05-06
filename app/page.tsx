'use client'

import { CartProvider } from '@/lib/cart-context'
import { HeroSection } from '@/components/hero-section'
import { MenuSection } from '@/components/menu-section'
import { CartSheet } from '@/components/cart-sheet'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <CartProvider>
      <main>
        <HeroSection />
        <MenuSection />
        <Footer />
        <CartSheet />
      </main>
    </CartProvider>
  )
}
