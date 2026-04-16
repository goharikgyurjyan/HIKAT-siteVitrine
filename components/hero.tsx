import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lechatdehors.png"
          alt="Randonneur avec son chat dans un sac de face HIKAT"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#1a3a2a]/95 via-[#1a3a2a]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge Made in France */}
          <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">Fabriqué en France avec amour</span>
            <span className="text-lg">🇫🇷</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#e8d9a0] leading-tight mb-6 text-balance">
            Du canapé au sommet
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#e8d9a0]/90 mb-4 font-light italic">
            Redécouvrez votre chat, redécouvrez vous.
          </p>

          <p className="text-lg text-[#e8d9a0]/80 mb-8 max-w-xl leading-relaxed">
            Votre chat mérite mieux que les quatre murs de votre appartement. Nos sacs ventraux
            vous permettent de partager vos aventures en toute sécurité, face à face. 
            Renforcez votre lien, vivez des moments uniques.
          </p>

          {/* Bien-être animal */}
          <div className="flex items-center gap-3 mb-8 bg-[#e8d9a0]/10 px-4 py-3 rounded-lg w-fit">
            <Heart className="h-5 w-5 text-[#e8d9a0]" />
            <span className="text-[#e8d9a0]/90 text-sm">
              Conçu pour le bien-être de votre chat
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
              Découvrir nos sacs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className=" bg-[#e8d9a0] hover:bg-[#e8d9a0]/90 text-lg px-8 py-6">
              Notre histoire
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#e8d9a0]/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#e8d9a0]/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
