import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const mainProducts = [
  {
    name: "HIKAT Explorer",
    description: "Le premier sac de votre chaton. Idéal pour l'habituer en douceur aux sorties.",
    price: 100,
    image: "/images/sac_explorer_display.png",
    features: ["Jusqu'à 3kg", "Compact et léger", "Intérieur douillet", "Idéal premiers mois"],
    badge: "Starter",
    badgeColor: "bg-secondary text-secondary-foreground"
  },
  {
    name: "HIKAT Adventure",
    description: "Notre sac de face signature. Le parfait équilibre confort, sécurité et style.",
    price: 140,
    image: "/images/sac_adventure_display.png",
    features: ["Jusqu'à 7kg", "Ventilation mesh", "Harnais sécurisé", "Contact visuel"],
    badge: "Le Favori",
    badgeColor: "bg-foreground text-primary-foreground"
  },
  {
    name: "HIKAT Summit",
    description: "Pour les grandes aventures. Technique et confortable pour les longues randonnées.",
    price: 230,
    image: "/images/sac_summit_display.png",
    features: ["Jusqu'à 10kg", "Double ventilation", "Support lombaire", "Extensible"],
    badge: "Premium",
    badgeColor: "bg-[#8b6914] text-[#e8d9a0]"
  }
]

const accessories = [
  {
    name: "Fontaine Portative",
    description: "Gardez votre chat hydraté pendant vos aventures. Compacte et anti-fuite.",
    price: 29,
    image: "/images/fontaine-portative.jpg",
    features: ["Capacité 350ml", "Anti-fuite", "Bol pliable", "Ultra légère"]
  }
]

export function Products() {
  return (
    <section id="produits" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Products */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-foreground text-foreground">
            Nos Sacs de Face
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Gardez votre chat face à vous
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nos sacs de face sont conçus pour que votre chat puisse vous voir pendant la balade. 
            Un contact visuel rassurant, des moments de complicité uniques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {mainProducts.map((product) => (
            <Card key={product.name} className="group overflow-hidden border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className={`absolute top-4 left-4 ${product.badgeColor}`}>
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-foreground">{product.price}€</span>
                  <Button className="bg-foreground text-primary-foreground hover:bg-foreground/90">
                    Ajouter au panier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programme reprise */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Badge variant="outline" className="mb-4 border-foreground text-foreground">
                Programme Reprise
              </Badge>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Votre chaton a grandi ?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Retournez votre sac HIKAT Chaton et bénéficiez d'une réduction de 20% sur l'achat 
                d'un sac taille adulte. Nous reconditionnons les sacs retournés pour leur donner 
                une seconde vie.
              </p>
              <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground">
                En savoir plus
              </Button>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="text-6xl font-serif text-foreground">-20%</div>
              <p className="text-muted-foreground">sur votre prochain sac</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
