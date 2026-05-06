export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'alpukat' | 'roti' | 'cokot' | 'bundling'
  isPopular?: boolean
  image?: string
}

export const menuItems: MenuItem[] = [
  // Alpukat Series
  {
    id: 'alpukat-original',
    name: 'Alpukat Kocok Original',
    description: 'Alpukat segar dikocok dengan susu creamy, nikmat dan mengenyangkan',
    price: 10000,
    category: 'alpukat',
    isPopular: true,
    image: '/products/alpukat-original.jpg',
  },
  {
    id: 'alpukat-cokelat',
    name: 'Alpukat Kocok Cokelat',
    description: 'Alpukat kocok dengan tambahan cokelat premium yang lezat',
    price: 12000,
    category: 'alpukat',
    image: '/products/alpukat-cokelat.jpg',
  },
  {
    id: 'alpukat-keju',
    name: 'Alpukat Kocok Keju',
    description: 'Perpaduan alpukat creamy dengan keju gurih yang bikin nagih',
    price: 12000,
    category: 'alpukat',
    image: '/products/alpukat-keju.jpg',
  },
  {
    id: 'alpukat-mix',
    name: 'Alpukat Kocok Mix',
    description: 'Best of both worlds! Kombinasi cokelat dan keju dalam satu gelas',
    price: 14000,
    category: 'alpukat',
    isPopular: true,
    image: '/products/alpukat-mix.jpg',
  },

  // Roti Series
  {
    id: 'roti-goreng-cokelat',
    name: 'Roti Goreng Cokelat',
    description: 'Roti goreng crispy dengan isian cokelat leleh yang menggoda',
    price: 10000,
    category: 'roti',
    image: '/products/roti-goreng.jpg',
  },
  {
    id: 'roti-bakar-cokelat',
    name: 'Roti Bakar Mix Cokelat Keju',
    description: 'Roti bakar hangat dengan olesan cokelat dan keju yang melimpah',
    price: 8000,
    category: 'roti',
    image: '/products/roti-bakar.jpg',
  },

  // Cokot Series
  {
    id: 'nasi-cokot-ayam',
    name: 'Nasi Cokot Ayam',
    description: 'Nasi kepal praktis dengan ayam bumbu yang gurih, bisa dinikmati sambil jalan',
    price: 10000,
    category: 'cokot',
    isPopular: true,
    image: '/products/nasi-ayam.jpg',
  },
  {
    id: 'nasi-cokot-ikan',
    name: 'Nasi Cokot Ikan',
    description: 'Nasi kepal dengan ikan bumbu spesial, praktis dan mengenyangkan',
    price: 10000,
    category: 'cokot',
    image: '/products/nasi-ikan.jpg',
  },
  {
    id: 'nasi-cokot-cumi',
    name: 'Nasi Cokot Cumi',
    description: 'Nasi kepal dengan cumi pedas manis, favorit pecinta seafood',
    price: 10000,
    category: 'cokot',
    image: '/products/nasi-cumi.jpg',
  },

  // Paket Bundling
  {
    id: 'paket-aku-manis',
    name: 'Aku Manis',
    description: 'Alpukat Kocok Cokelat/Keju + Roti Goreng — Hemat Rp7.000!',
    price: 15000,
    category: 'bundling',
  },
  {
    id: 'paket-aku-bakar-manis',
    name: 'Aku Bakar Manis',
    description: 'Alpukat Kocok Cokelat/Keju + Roti Bakar — Hemat Rp5.000!',
    price: 15000,
    category: 'bundling',
  },
  {
    id: 'paket-aku-teraduk-manis',
    name: 'Aku Teraduk Manis',
    description: 'Alpukat Kocok Mix + Roti Bakar + Roti Goreng — Hemat Rp11.000!',
    price: 21000,
    category: 'bundling',
  },
  {
    id: 'paket-aku-seafood',
    name: 'Aku Seafood',
    description: 'Nasi Cokot Ikan + Nasi Cokot Cumi — Hemat Rp2.000!',
    price: 18000,
    category: 'bundling',
  },
  {
    id: 'paket-aku-pedas-berkokok',
    name: 'Aku Pedas Berkokok',
    description: 'Nasi Cokot Ayam x2 — Hemat Rp2.000!',
    price: 18000,
    category: 'bundling',
  },
  {
    id: 'paket-aku-trio-nasi',
    name: 'Aku Trio Nasi',
    description: 'Semua Nasi Cokot (Ayam, Ikan, Cumi) — Hemat Rp2.000!',
    price: 28000,
    category: 'bundling',
  },
]

export const categories = [
  { id: 'alpukat', name: 'Alpukat Series', icon: '🥤' },
  { id: 'roti', name: 'Roti Series', icon: '🍞' },
  { id: 'cokot', name: 'Cokot Series', icon: '🍙' },
  { id: 'bundling', name: 'Paket Bundling', icon: '📦' },
] as const

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
