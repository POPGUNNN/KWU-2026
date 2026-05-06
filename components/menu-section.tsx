'use client'

import { useState } from 'react'
import { MenuCard } from './menu-card'
import { menuItems, categories } from '@/lib/menu-data'
import { cn } from '@/lib/utils'

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all')

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-black tracking-tight text-foreground md:text-4xl">
            MENU KAMI
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-primary" />
          <p className="text-muted-foreground">
            Pilih menu favoritmu dan nikmati kelezatannya
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={cn(
              'rounded-full border-2 px-4 py-2 text-sm font-bold transition-all',
              activeCategory === 'all'
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background text-foreground hover:border-primary'
            )}
          >
            Semua
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold transition-all',
                activeCategory === category.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground hover:border-primary'
              )}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
