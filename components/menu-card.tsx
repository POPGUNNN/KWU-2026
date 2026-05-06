'use client'

import Image from 'next/image'
import { Plus, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/lib/cart-context'
import { type MenuItem, formatPrice } from '@/lib/menu-data'
import { useState } from 'react'

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  const { addItem, items } = useCart()
  const [justAdded, setJustAdded] = useState(false)
  
  const cartItem = items.find((i) => i.id === item.id)
  const quantityInCart = cartItem?.quantity || 0

  const handleAdd = () => {
    addItem(item)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1000)
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border-2 border-border bg-card transition-all hover:border-primary hover:shadow-lg">
      {/* Product Image or Category Icon */}
      {item.image ? (
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {item.isPopular && (
            <Badge variant="secondary" className="absolute right-2 top-2 font-bold">
              Favorit
            </Badge>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 pb-0">
          <div className="flex size-16 items-center justify-center rounded-full bg-secondary text-3xl">
            {item.category === 'alpukat' && '🥤'}
            {item.category === 'roti' && '🍞'}
            {item.category === 'cokot' && '🍙'}
            {item.category === 'bundling' && '📦'}
          </div>
          {item.isPopular && (
            <Badge variant="secondary" className="font-bold">
              Favorit
            </Badge>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-balance text-lg font-bold leading-tight text-card-foreground">
          {item.name}
        </h3>
        <p className="text-pretty text-sm text-muted-foreground">
          {item.description}
        </p>
      </div>

      {/* Price & Add Button */}
      <div className="flex items-center justify-between border-t border-border p-4">
        <span className="text-xl font-black text-primary">
          {formatPrice(item.price)}
        </span>
        
        <div className="flex items-center gap-2">
          {quantityInCart > 0 && (
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {quantityInCart}
            </span>
          )}
          <Button
            onClick={handleAdd}
            size="sm"
            className={`gap-1 transition-all ${
              justAdded ? 'bg-green-600 hover:bg-green-600' : ''
            }`}
          >
            {justAdded ? (
              <>
                <Check className="size-4" />
                <span className="sr-only md:not-sr-only">Ditambah</span>
              </>
            ) : (
              <>
                <Plus className="size-4" />
                <span className="sr-only md:not-sr-only">Tambah</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
