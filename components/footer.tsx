import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo-hikat.jpg"
              alt="HIKAT"
              width={120}
              height={48}
              className="h-12 w-auto mb-4 rounded"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Du canapé au sommet, redécouvrez votre chat, redécouvrez vous.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="mailto:contact@hikat.fr" className="text-foreground hover:text-muted-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Boutique</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">HIKAT Explorer</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">HIKAT Aventure</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">HIKAT Summit</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Accessoires</Link></li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">À propos</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Notre histoire</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Made in France</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Nos engagements</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Livraison</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 HIKAT. Tous droits réservés. Fabriqué avec ❤️ en France.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Mentions légales
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              CGV
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
