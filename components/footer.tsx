import { Instagram, MessageCircle, Clock, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary px-4 py-12 text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Location */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Lokasi</h4>
            <div className="flex items-start gap-2 text-sm opacity-75">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <p>Jl. Halimun Raya No.2, RT.15/RW.6, Guntur, Kecamatan Setiabudi, Kota Jakarta Selatan, DKI Jakarta 12980</p>
            </div>
            <a
              href="https://maps.app.goo.gl/D2HnRBNhF9qXUcG68"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block overflow-hidden rounded-lg border border-primary-foreground/20 transition-opacity hover:opacity-90"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0293078673784!2d106.96825087475376!3d-6.249437493749614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c71a0c03569%3A0xf6bac401e7f8f72!2sTelkom%20University%20Jakarta!5e0!3m2!1sen!2sid!4v1714489200000!5m2!1sen!2sid"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi 10 Brothers"
                className="pointer-events-none"
              />
              <div className="bg-primary-foreground/10 px-3 py-2 text-center text-xs">
                Klik untuk buka di Google Maps
              </div>
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Hubungi Kami</h4>
            <a
              href="https://wa.me/6285891089299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-75 transition-opacity hover:opacity-100"
            >
              <MessageCircle className="size-4" />
              0858-9108-9299
            </a>
            <a
              href="https://wa.me/6282358620003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-75 transition-opacity hover:opacity-100"
            >
              <MessageCircle className="size-4" />
              0823-5862-0003
            </a>
            <a
              href="https://instagram.com/10brothers.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-75 transition-opacity hover:opacity-100"
            >
              <Instagram className="size-4" />
              @10brothers.id
            </a>
          </div>

          {/* Operating Hours */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Jam Operasional</h4>
            <div className="flex items-center gap-2 text-sm opacity-75">
              <Clock className="size-4 shrink-0" />
              <p className="font-medium">
                Setiap hari kerja: 10.00 - 16.00 WIB
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} 10 Brothers. Kelompok 4 — Telkom University Jakarta.</p>
        </div>
      </div>
    </footer>
  )
}
