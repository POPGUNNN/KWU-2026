'use client'

import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart, type CartItem } from '@/lib/cart-context'
import { formatPrice } from '@/lib/menu-data'
import { ShoppingCart, Plus, Minus, Trash2, Send, X } from 'lucide-react'

// sample
const WHATSAPP_NUMBER = '6285891089299'

interface OrderFormData {
  name: string
  pickupDate: string
  notes: string
}

function CartItemRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex items-start gap-3 border-b border-border py-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-lg">
        {item.category === 'alpukat' && '🥤'}
        {item.category === 'roti' && '🍞'}
        {item.category === 'cokot' && '🍙'}
        {item.category === 'bundling' && '📦'}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-foreground truncate">{item.name}</h4>
        <p className="text-sm font-medium text-primary">
          {formatPrice(item.price)}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          aria-label="Kurangi jumlah"
        >
          {item.quantity === 1 ? <Trash2 className="size-3" /> : <Minus className="size-3" />}
        </Button>
        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          aria-label="Tambah jumlah"
        >
          <Plus className="size-3" />
        </Button>
      </div>
    </div>
  )
}

export function CartSheet() {
  const { items, totalItems, totalPrice, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    pickupDate: '',
    notes: '',
  })

  const generateWhatsAppMessage = () => {
    const itemsList = items
      .map(
        (item) =>
          `- ${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`
      )
      .join('\n')

    const message = `Halo 10 Brothers! Saya ingin memesan:

Nama: ${formData.name}
Tanggal Pengambilan: ${formData.pickupDate}

Pesanan:
${itemsList}

Total: ${formatPrice(totalPrice)}${formData.notes ? `\n\nCatatan: ${formData.notes}` : ''}`

    return encodeURIComponent(message)
  }

  const handleSubmitOrder = () => {
    if (!formData.name || !formData.pickupDate) {
      return
    }
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(whatsappUrl, '_blank')
    clearCart()
    setShowForm(false)
    setIsOpen(false)
    setFormData({ name: '', pickupDate: '', notes: '' })
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 size-14 rounded-full shadow-xl md:size-16"
          size="icon"
          aria-label="Buka keranjang"
        >
          <ShoppingCart className="size-6 md:size-7" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl font-black">
            <ShoppingCart className="size-5" />
            Keranjang
          </SheetTitle>
          <SheetDescription>
            {totalItems > 0
              ? `${totalItems} item dalam keranjang`
              : 'Keranjang masih kosong'}
          </SheetDescription>
        </SheetHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-1">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <div className="text-6xl">🛒</div>
              <p className="text-muted-foreground">
                Keranjangmu masih kosong. Yuk, pilih menu!
              </p>
            </div>
          ) : showForm ? (
            // Order Form
            <div className="flex flex-col gap-4 py-4">
              <button
                onClick={() => setShowForm(false)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
                Kembali ke keranjang
              </button>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold">
                  Nama Pemesan <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="Masukkan nama lengkap"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="pickupDate" className="text-sm font-bold">
                  Tanggal Pengambilan <span className="text-destructive">*</span>
                </label>
                <Input
                  id="pickupDate"
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) =>
                    setFormData({ ...formData, pickupDate: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="notes" className="text-sm font-bold">
                  Catatan (Opsional)
                </label>
                <Input
                  id="notes"
                  placeholder="Contoh: Extra pedas, tanpa es, dll"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </div>

              {/* Order Summary in Form */}
              <div className="mt-2 rounded-lg bg-secondary p-4">
                <h4 className="mb-2 text-sm font-bold">Ringkasan Pesanan</h4>
                <div className="space-y-1 text-sm">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-muted-foreground">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                  <div className="mt-2 flex justify-between border-t border-border pt-2 font-bold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Cart Items List
            <div className="py-2">
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <SheetFooter className="flex-col gap-3 border-t border-border pt-4">
            {!showForm && (
              <>
                <div className="flex w-full items-center justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-black text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <Button
                  onClick={() => setShowForm(true)}
                  className="w-full gap-2"
                  size="lg"
                >
                  <Send className="size-5" />
                  Lanjut Pesan via WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  onClick={clearCart}
                  className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive"
                >
                  Kosongkan Keranjang
                </Button>
              </>
            )}
            {showForm && (
              <Button
                onClick={handleSubmitOrder}
                className="w-full gap-2"
                size="lg"
                disabled={!formData.name || !formData.pickupDate}
              >
                <Send className="size-5" />
                Kirim ke WhatsApp
              </Button>
            )}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
