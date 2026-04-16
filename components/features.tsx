import { Shield, Wind, Heart, Eye, Sparkles, Award, Users, RefreshCw } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Eye,
    title: "Face à face",
    description: "Votre chat vous voit pendant toute la balade. Un contact visuel rassurant qui renforce votre lien."
  },
  {
    icon: Heart,
    title: "Bien-être animal",
    description: "Fini l'enfermement en appartement. Offrez à votre chat la stimulation et les découvertes qu'il mérite."
  },
  {
    icon: Shield,
    title: "Sécurité maximale",
    description: "Harnais de sécurité intégré et fermetures renforcées. Votre chat explore en toute sérénité."
  },
  {
    icon: Wind,
    title: "Ventilation optimale",
    description: "Panneaux en mesh respirant et circulation d'air passive pour garder votre chat au frais."
  },
  {
    icon: Sparkles,
    title: "Matériaux durables",
    description: "Tissus imperméables et résistants aux UV. Conçu pour des années d'aventures partagées."
  },
  {
    icon: Award,
    title: "Made in France",
    description: "Fabriqué artisanalement dans nos ateliers en Auvergne. Qualité et savoir-faire français."
  }
]

const communityFeatures = [
  {
    icon: Users,
    title: "Communauté HIKAT",
    description: "Rejoignez notre communauté de passionnés. Partagez vos aventures et rencontrez d'autres amoureux de chats randonneurs."
  },
  {
    icon: RefreshCw,
    title: "Randonnées mensuelles",
    description: "Recevez chaque mois une invitation à une randonnée près de chez vous. L'occasion de rencontrer d'autres aventuriers félins !"
  }
]

export function Features() {
  return (
    <section id="avantages" className="py-20 md:py-32 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-secondary text-lg mb-4 font-medium">Le saviez-vous ?</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-6 text-balance">
            Un chat d'appartement a besoin de stimulation
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
            L'enfermement permanent peut engendrer stress, ennui et problèmes de comportement chez nos félins. 
            HIKAT vous permet de leur offrir l'aventure qu'ils méritent, en toute sécurité.
          </p>
        </div>

        {/* Main Features */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl text-primary-foreground mb-6">
            Pourquoi choisir HIKAT ?
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h4 className="font-serif text-xl text-primary-foreground mb-3">{feature.title}</h4>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="bg-primary-foreground/5 rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-medium mb-4">Rejoignez l'aventure</p>
              <h3 className="font-serif text-2xl sm:text-3xl text-primary-foreground mb-6">
                Plus qu'un sac, une communauté
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Chez HIKAT, nous croyons que l'aventure se partage. C'est pourquoi nous avons créé 
                une communauté de propriétaires passionnés qui partagent leur amour des chats et de la nature.
              </p>
              <div className="space-y-6">
                {communityFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-1">{feature.title}</h4>
                      <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/cat-adventure.jpg"
                alt="Communauté HIKAT en randonnée"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
