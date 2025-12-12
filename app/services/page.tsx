"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Construction, Hammer, HardHat, Truck, Waves, Mountain, Building, Wrench, Package } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Construction,
    title: "Excavation Services",
    summary:
      "Precision excavation for residential, commercial & infrastructure projects using long-boom and standard excavators.",
    details:
      "Our excavation services utilize state-of-the-art machinery including Tata Hitachi 210, Komatsu excavators with long-boom attachments. We handle foundation excavation, trenching, land clearing, and site preparation. Safety protocols include site surveys, utility mapping, and continuous monitoring. Typical timeframe: 1-4 weeks depending on project scope.",
    machinery: "Tata Hitachi 210, Komatsu PC210, Long-boom excavators",
  },
  {
    id: 2,
    icon: Hammer,
    title: "Demolition Work",
    summary: "Controlled demolition using specialized excavators and rock breakers—safety-first procedures.",
    details:
      "Specialized demolition services using long-boom excavators with hydraulic attachments and rock breakers. We handle multi-storey buildings, industrial structures, and bridge demolitions. Our team conducts structural assessments, implements dust control measures, and ensures proper debris management. Safety certifications and insurance coverage included.",
    machinery: "Long-boom excavators, Hydraulic rock breakers, Debris handlers",
  },
  {
    id: 3,
    icon: HardHat,
    title: "Infra Development",
    summary: "Roads, RCC guttering, creek cleaning, bridge works, and municipal infrastructure.",
    details:
      "Comprehensive infrastructure development including road construction, drainage systems, RCC guttering, creek restoration, and bridge works. We collaborate with municipal corporations and follow government specifications. Services include surveying, earthwork, concrete works, and finishing. Quality testing and compliance documentation provided.",
    machinery: "Road rollers, Pavers, Concrete mixers, Excavators, Dumpers",
  },
  {
    id: 4,
    icon: Truck,
    title: "Bulldozer & Earthmoving Rental",
    summary: "Bulldozers, loaders, tippers, road rollers for hire with trained operators.",
    details:
      "Equipment rental services with experienced operators. Fleet includes Komatsu and CAT bulldozers, JCB loaders, 10-12 wheel tippers, and vibromax road rollers. Daily, weekly, and monthly rental options available. All machines are regularly serviced and certified. Operator training, fuel, and maintenance included in rental packages.",
    machinery: "Bulldozers (D65, D85), Loaders, Tippers, Road rollers",
  },
  {
    id: 5,
    icon: Waves,
    title: "Amphibious Excavators",
    summary: "Marsh, pond and creek dredging and silt removal using amphibious units.",
    details:
      "Specialized amphibious excavators for water body maintenance. Services include creek dredging, pond desilting, marsh clearing, and wetland restoration. Our pontoon-mounted excavators access difficult terrains and work in shallow to medium-depth water bodies. Environmental compliance and proper silt disposal management included.",
    machinery: "Amphibious excavators with pontoons, Dredging attachments",
  },
  {
    id: 6,
    icon: Mountain,
    title: "Rock Excavation & Breaking",
    summary: "Heavy rock excavation employing vibrorippers and rock breakers.",
    details:
      "Hard rock excavation using specialized equipment including vibrorippers, hydraulic rock breakers, and heavy-duty excavators. We handle foundation rock removal, hillside excavation, and boulder breaking. Blasting services available with proper licensing. Geotechnical assessments and site-specific excavation plans provided.",
    machinery: "Vibrorippers, Hydraulic rock breakers, Heavy excavators",
  },
  {
    id: 7,
    icon: Building,
    title: "Pre-Engineered Buildings (PEB) Support",
    summary: "Ground preparation, levelling, excavation tailored for PEB installation.",
    details:
      "Complete site preparation for PEB installations including land clearing, excavation, levelling, compaction, and foundation works. We coordinate with PEB manufacturers for precise specifications. Services include drainage planning, approach road construction, and utility trenching. Soil testing and compaction certificates provided.",
    machinery: "Excavators, Bulldozers, Compactors, Graders",
  },
  {
    id: 8,
    icon: Wrench,
    title: "Site Maintenance & Material Handling",
    summary: "Debris removal, site clearing, compaction, and temporary road works.",
    details:
      "Ongoing site maintenance services including debris removal, site clearing, soil compaction, temporary road construction, and material handling. We provide regular equipment for long-term projects. Services include dust suppression, site security support, and waste management. Flexible scheduling to match project timelines.",
    machinery: "Mini excavators, Skid loaders, Compactors, Dumpers",
  },
  {
    id: 9,
    icon: Truck,
    title: "Transport & Material Supply",
    summary: "Dumpers, trailers, water tankers, and logistics for material movement.",
    details:
      "Comprehensive transport services including 10-12 wheel tippers, trailers, water tankers, and transit mixers. We handle material movement within sites and inter-city transport. GPS-enabled vehicles ensure tracking and timely delivery. Regular maintenance and certified drivers ensure safety and reliability.",
    machinery: "10-12 wheel tippers, Trailers, Water tankers, Transit mixers",
  },
  {
    id: 10,
    icon: Package,
    title: "Building Material Supply",
    summary: "Supply and delivery of murum, sand, aggregates, and construction materials.",
    details:
      "Sourcing and delivery of quality building materials including murum, sand, aggregates (various grades), boulders, and soil. Materials tested for quality and compliance. Bulk supply options with competitive pricing. Direct delivery to site with proper documentation. Partnerships with quarries ensure consistent availability.",
    machinery: "Tippers for delivery, Loading equipment",
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy text-white">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-yellow max-w-2xl mx-auto">
            Comprehensive machinery & project support for all construction needs
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  className="p-8 hover:shadow-xl transition-shadow border-2 border-navy/10 hover:border-yellow/50"
                >
                  <Icon className="w-12 h-12 mb-4 text-yellow" />
                  <h3 className="text-2xl font-bold mb-3 text-navy">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.summary}</p>
                  <Button
                    variant="outline"
                    className="w-full border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl text-navy">{selectedService?.title}</DialogTitle>
            <DialogDescription className="text-base pt-4">{selectedService?.details}</DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <h4 className="font-bold text-navy mb-2">Machinery Used:</h4>
            <p className="text-muted-foreground">{selectedService?.machinery}</p>
          </div>

          <div
            className="w-full aspect-video rounded-lg bg-cover bg-center mt-4"
            style={{
              backgroundImage: "url(/placeholder.svg?height=400&width=600&query=construction+machinery+at+work)",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
