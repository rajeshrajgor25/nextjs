"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Rock Excavation",
    location: "Dhekale",
    image: "/rock-excavation-heavy-machinery-construction-site.jpg",
    description: "Large-scale rock excavation for foundation works using specialized equipment.",
    details:
      "This challenging project involved excavating hard rock formations for a commercial development foundation. We deployed Tata Hitachi 210 excavators with rock breaker attachments, working in phases to ensure structural integrity of surrounding areas.",
    equipment: "Tata Hitachi 210, Hydraulic rock breaker, 12-wheel tippers",
    duration: "3 months",
    challenges: "Hard granite formations, proximity to existing structures",
    solutions: "Phased excavation approach, vibration monitoring, controlled rock breaking techniques",
  },
  {
    id: 2,
    title: "Demolition Project",
    location: "Pelhar",
    image: "/building-demolition-excavator-long-boom-constructi.jpg",
    description: "Long-boom excavator with rockbreaker for controlled demolition of multi-storey structure.",
    details:
      "Systematic demolition of a 5-storey residential building using long-boom excavators. The project required precise planning to ensure safety of neighboring structures and proper debris management.",
    equipment: "Long-boom excavator, Rock breaker, Debris handlers, Tippers",
    duration: "6 weeks",
    challenges: "Dense urban environment, dust control, debris removal logistics",
    solutions: "Top-down demolition method, water spraying for dust suppression, scheduled debris removal",
  },
  {
    id: 3,
    title: "Creek Dredging",
    location: "Vasai Creek",
    image: "/amphibious-excavator-creek-dredging-water-silt-rem.jpg",
    description: "Amphibious excavator removing silt and restoring waterflow in municipal creek.",
    details:
      "Creek restoration project for VVMC involving removal of accumulated silt and debris to restore natural water flow. Used specialized amphibious excavators to access shallow water areas.",
    equipment: "Amphibious excavator with pontoons, Dredging bucket, Dump boats",
    duration: "4 months",
    challenges: "Tidal variations, environmental compliance, silt disposal",
    solutions: "Tidal timing coordination, eco-friendly disposal, continuous water quality monitoring",
  },
  {
    id: 4,
    title: "Road Infrastructure",
    location: "Nallasopara",
    image: "/road-construction-paving-asphalt-rollers-infrastru.jpg",
    description: "Complete road construction with drainage and RCC guttering for municipal project.",
    details:
      "Comprehensive road development including excavation, sub-base preparation, asphalt laying, and drainage system installation. Coordinated with municipal authorities for utility relocation.",
    equipment: "Bulldozers, Road rollers, Pavers, Concrete mixers, Excavators",
    duration: "8 months",
    challenges: "Traffic management, utility conflicts, monsoon scheduling",
    solutions: "Phased construction, temporary diversions, accelerated work during dry season",
  },
  {
    id: 5,
    title: "Industrial Site Preparation",
    location: "Boisar",
    image: "/industrial-site-leveling-bulldozer-earthmoving-con.jpg",
    description: "Large-scale land leveling and compaction for industrial park development.",
    details:
      "Prepared 50-acre industrial site including land clearing, cut-and-fill operations, soil compaction, and drainage planning. Achieved precise level requirements for warehouse construction.",
    equipment: "Bulldozers (D65, D85), Excavators, Compactors, Graders, Water tankers",
    duration: "5 months",
    challenges: "Uneven terrain, monsoon delays, soil quality variations",
    solutions: "Soil stabilization techniques, proper drainage design, extended work hours",
  },
  {
    id: 6,
    title: "Bridge Foundation Works",
    location: "Vasai",
    image: "/bridge-construction-foundation-excavation-piling-w.jpg",
    description: "Deep excavation and foundation support for creek bridge construction project.",
    details:
      "Supported bridge construction with deep foundation excavation, including underwater work and cofferdam installation. Precision was critical for alignment and structural integrity.",
    equipment: "Long-reach excavators, Dewatering pumps, Pile drivers, Cranes",
    duration: "10 months",
    challenges: "Water table management, structural precision, coordination with engineers",
    solutions: "Advanced dewatering systems, GPS-guided excavation, continuous monitoring",
  },
]

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy text-white">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects & Work</h1>
          <p className="text-xl text-yellow max-w-2xl mx-auto">
            Real work, real results — images and summaries of our completed projects
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110 duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-yellow font-medium">{project.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lightbox */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-navy/80 p-2 text-white hover:bg-navy transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="w-full aspect-video bg-cover bg-center"
            style={{ backgroundImage: `url(${selectedProject?.image})` }}
          />

          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-navy mb-2">{selectedProject?.title}</h2>
              <p className="text-xl text-yellow">{selectedProject?.location}</p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">{selectedProject?.details}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-navy mb-2">Equipment Used:</h3>
                <p className="text-muted-foreground">{selectedProject?.equipment}</p>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-2">Duration:</h3>
                <p className="text-muted-foreground">{selectedProject?.duration}</p>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-2">Challenges:</h3>
                <p className="text-muted-foreground">{selectedProject?.challenges}</p>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-2">Solutions:</h3>
                <p className="text-muted-foreground">{selectedProject?.solutions}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
