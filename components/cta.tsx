import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-6 text-balance">
          Prêt à vivre l'aventure avec votre chat ?
        </h2>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Rejoignez la communauté des aventuriers félins. 
          Livraison gratuite en France métropolitaine et retours sous 14 jours.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
            Découvrir la collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
            Nous contacter
          </Button>
        </div>

        {/* Newsletter */}
        <div className="bg-primary-foreground/10 rounded-2xl p-8 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="h-5 w-5 text-secondary" />
            <span className="text-primary-foreground font-medium">Newsletter aventuriers</span>
          </div>
          <p className="text-primary-foreground/70 text-sm mb-4">
            Recevez nos conseils randonnée et les dernières nouveautés HIKAT.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              S'inscrire
            </Button>
          </form>
        </div>

        <p className="text-primary-foreground/60 text-sm mt-8">
          Made in France | Livraison gratuite | Retours 14 jours
        </p>
      </div>
    </section>
  )
}
