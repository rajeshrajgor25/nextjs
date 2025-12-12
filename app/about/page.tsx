import { Card } from "@/components/ui/card"
import { Target, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy text-white">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Baba Construction</h1>
          <p className="text-xl text-yellow max-w-2xl mx-auto">Building infrastructure, powering progress since 2000</p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-navy mb-6">About Us</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Baba Construction is a government-registered contractor and trusted leader in heavy earthmoving and
              excavation since <strong className="text-navy">2000</strong>. We rent and operate high-performance
              equipment—excavators, backhoe loaders, dumpers, Hydra cranes, rock breakers, and more—to support
              infrastructure, municipal, and industrial projects.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <Card className="p-8 border-2 border-yellow">
                <Target className="w-12 h-12 text-yellow mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-navy">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide safe, reliable and cost-effective construction and earthmoving services through technical
                  expertise, modern equipment, and a skilled workforce.
                </p>
              </Card>

              <Card className="p-8 border-2 border-navy">
                <TrendingUp className="w-12 h-12 text-navy mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-navy">Way Forward</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We invest in technology, training, and governance—ensuring compliance with safety standards and
                  continuous upskilling. Our management emphasizes quality, transparency, and client-focused delivery.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-marble">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-navy">Our Journey</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-yellow flex items-center justify-center text-3xl font-bold text-navy mx-auto mb-4">
                2000
              </div>
              <h3 className="text-xl font-bold mb-2">Company Founded</h3>
              <p className="text-muted-foreground">Started with a vision to transform infrastructure development</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center text-3xl font-bold text-yellow mx-auto mb-4">
                200+
              </div>
              <h3 className="text-xl font-bold mb-2">Machines in Fleet</h3>
              <p className="text-muted-foreground">State-of-the-art equipment for every construction need</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-yellow flex items-center justify-center text-3xl font-bold text-navy mx-auto mb-4">
                1000+
              </div>
              <h3 className="text-xl font-bold mb-2">Projects Completed</h3>
              <p className="text-muted-foreground">Trusted by municipal and private sectors nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Equipment */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Team & Equipment</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Tata Hitachi 210", role: "Long Boom Excavator", img: "/equipment-excavator-1.jpg" },
              { name: "JCB 3DX", role: "Backhoe Loader", img: "/equipment-backhoe.jpg" },
              { name: "Komatsu D65", role: "Bulldozer", img: "/equipment-bulldozer.jpg" },
              { name: "Amphibious Unit", role: "Marsh Excavator", img: "/equipment-amphibious.jpg" },
              { name: "Vibromax", role: "Road Roller", img: "/equipment-roller.jpg" },
              { name: "Hydra Crane", role: "14T Capacity", img: "/equipment-crane.jpg" },
              { name: "Rock Breaker", role: "Heavy Duty", img: "/equipment-breaker.jpg" },
              { name: "Tippers", role: "10-12 Wheels", img: "/equipment-tipper.jpg" },
            ].map((equipment) => (
              <Card key={equipment.name} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div
                  className="w-full aspect-square mb-4 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${equipment.img})` }}
                />
                <h3 className="font-bold text-navy">{equipment.name}</h3>
                <p className="text-sm text-muted-foreground">{equipment.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
