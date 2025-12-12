import { Card } from "@/components/ui/card"
import { Building2, Briefcase, Factory } from "lucide-react"

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy text-white">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Clients</h1>
          <p className="text-xl text-yellow max-w-3xl mx-auto">
            We've partnered with municipal corporations, developers, and contractors — delivering reliable support for
            large and mid-size projects
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Client Categories */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <Card className="p-8 border-2 border-yellow">
              <Building2 className="w-12 h-12 text-yellow mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-navy">Government & Municipal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Vasai Virar Municipal Corporation (VVMC)</li>
                <li>• Mira-Bhayandar Municipal Corporation</li>
                <li>• Thane Municipal Corporation</li>
                <li>• Palghar District Administration</li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-navy">
              <Briefcase className="w-12 h-12 text-navy mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-navy">Construction & Developers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Shubh Enterprises</li>
                <li>• Ameya Concrete & Co.</li>
                <li>• ACE Enterprises</li>
                <li>• Patil Construction</li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-yellow">
              <Factory className="w-12 h-12 text-yellow mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-navy">Industrial & Others</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reliable Agencies</li>
                <li>• Ghargpire Engineering Pvt Ltd</li>
                <li>• Maharashtra Road Development Corp</li>
                <li>• Private Industrial Projects</li>
              </ul>
            </Card>
          </div>

          {/* Client Logos Grid */}
          <div className="bg-marble p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-12">Trusted Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Vasai Virar MC",
                "Mira-Bhayandar MC",
                "Thane MC",
                "VVMC",
                "Shubh Enterprises",
                "ACE Enterprises",
                "Patil Construction",
                "Ameya Concrete",
                "Reliable Agencies",
                "Ghargpire Engg.",
                "MRDC",
                "Palghar District",
              ].map((client) => (
                <div
                  key={client}
                  className="bg-white p-6 rounded-lg flex items-center justify-center border-2 border-navy/10 hover:border-yellow/50 transition-colors min-h-[100px]"
                >
                  <span className="font-semibold text-navy text-center text-sm">{client}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Citations */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Notable Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">VVMC Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excavation & silt removal at Vasai Creek using amphibious excavators. Multi-year contract for
                  municipal infrastructure maintenance and creek restoration projects.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">Shubh Enterprises</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Heavy rock excavation and site preparation for commercial development. Provided specialized equipment
                  and operators for 6-month construction phase.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">Thane MC Project</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Road construction, drainage works, and bridge support for municipal infrastructure upgrade. Deployed
                  50+ machines for fast-track completion.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">ACE Enterprises</h3>
                <p className="text-muted-foreground leading-relaxed">
                  PEB site preparation and foundation works for industrial park development. Complete turnkey solution
                  including equipment rental and material supply.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
