import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow rounded flex items-center justify-center">
                <span className="text-navy font-bold text-xl">BC</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-none">BABA</div>
                <div className="text-xs text-yellow">CONSTRUCTION</div>
              </div>
            </div>
            <p className="text-sm text-marble/80 leading-relaxed">
              Government-registered contractor providing heavy earthmoving, excavation, and demolition services since
              2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-marble/80 hover:text-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-marble/80 hover:text-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-marble/80 hover:text-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-marble/80 hover:text-yellow transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-marble/80 hover:text-yellow transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-marble/80 hover:text-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-marble/80">+91-9890579998</div>
                  <div className="text-marble/80">+91-9225789998</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5" />
                <span className="text-marble/80">bababconstruction30@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5" />
                <span className="text-marble/80">Tulinj Road, Nallasopara East, Palghar 401209</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-navy hover:bg-yellow/90 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-navy hover:bg-yellow/90 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-marble/60">
          <p>&copy; {new Date().getFullYear()} Baba Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
