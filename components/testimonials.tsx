import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marie L.",
    location: "Chamonix",
    text: "Mon chat Pixel était un vrai chat d'appartement stressé. Depuis qu'on randonne ensemble avec HIKAT, il est transformé ! Le sac de face, c'est génial : il me regarde et ronronne pendant toute la balade.",
    rating: 5,
    catName: "Pixel"
  },
  {
    name: "Thomas B.",
    location: "Grenoble",
    text: "J'hésitais à laisser mon chat seul pendant mes weekends rando. Avec HIKAT, il m'accompagne partout ! J'ai participé à deux randonnées communautaires, c'était super de rencontrer d'autres passionnés.",
    rating: 5,
    catName: "Moustache"
  },
  {
    name: "Sophie M.",
    location: "Lyon",
    text: "On a commencé avec le sac Chaton pour Luna. Elle a grandi, on l'a échangé avec le programme reprise et on a eu -20% sur le Classique. Super concept et qualité française au top !",
    rating: 5,
    catName: "Luna"
  },
  {
    name: "Antoine D.",
    location: "Annecy",
    text: "Le service client est exceptionnel. Ils m'ont aidé à choisir le Pro pour mon gros matou de 8kg. La fontaine portative est indispensable pour les longues sorties !",
    rating: 5,
    catName: "Gribouille"
  }
]

export function Testimonials() {
  return (
    <section id="temoignages" className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Ils randonnent avec leur chat
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Plus de 2 500 aventuriers et leurs compagnons félins nous font confiance. 
            Voici leurs histoires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-secondary mb-4" />
                
                <p className="text-foreground text-lg mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Avec</p>
                    <p className="font-medium text-foreground">{testimonial.catName}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
