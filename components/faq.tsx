import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Pourquoi un sac de face plutôt qu'un sac à dos ?",
    answer: "Le sac de face permet à votre chat de vous voir pendant toute la balade. Ce contact visuel est rassurant pour lui et renforce votre lien. Vous pouvez aussi surveiller son bien-être à tout moment."
  },
  {
    question: "Mon chat va-t-il aimer être dans le sac ?",
    answer: "La plupart des chats s'adaptent très bien ! Nous recommandons de commencer par des sorties courtes pour habituer votre chat. Le confort du sac et la vue sur vous plaisent généralement beaucoup aux félins."
  },
  {
    question: "Quel sac choisir pour mon chat ?",
    answer: "Le HIKAT Chaton (69€) est parfait pour les chatons jusqu'à 3kg. Le HIKAT Classique (109€) convient aux chats jusqu'à 7kg. Le HIKAT Pro (249€) est idéal pour les grands chats jusqu'à 10kg ou les longues randonnées."
  },
  {
    question: "Comment fonctionne le programme de reprise ?",
    answer: "Quand votre chaton grandit, vous pouvez nous retourner votre sac HIKAT Chaton. Nous vous offrons 20% de réduction sur l'achat d'un sac taille adulte, et nous reconditionnons votre ancien sac pour lui donner une seconde vie."
  },
  {
    question: "Les sacs sont-ils vraiment fabriqués en France ?",
    answer: "Absolument ! Tous nos sacs sont conçus et assemblés dans nos ateliers en Auvergne. Nous travaillons avec des artisans locaux et privilégions les matériaux français quand c'est possible."
  },
  {
    question: "Combien de temps mon chat peut-il rester dans le sac ?",
    answer: "Pour le bien-être de votre chat, nous recommandons des pauses toutes les 2 heures. Le sac est conçu pour des randonnées de plusieurs heures, avec une ventilation optimale et un confort maximal."
  },
  {
    question: "Qu'est-ce que la communauté HIKAT ?",
    answer: "En créant votre compte après achat, vous rejoignez notre communauté d'aventuriers. Vous recevrez chaque mois une invitation à une randonnée près de chez vous, des conseils et des offres de nos partenaires (croquettes, accessoires...)."
  },
  {
    question: "Quelle est votre politique de retour ?",
    answer: "Vous avez 30 jours pour essayer votre sac HIKAT. Si vous ou votre chat n'êtes pas satisfaits, nous vous remboursons intégralement. Nous offrons aussi 2 ans de garantie sur tous nos produits."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tout ce que vous devez savoir avant de partir à l'aventure.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-foreground/80 font-medium text-lg py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
