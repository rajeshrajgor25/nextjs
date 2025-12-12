import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Construction, HardHat, Wrench } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/hero-construction-site.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-navy/85" />
        </div>

        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">WE BUILD YOUR DREAMS</h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow font-medium">
            Infra Development · Demolition · Excavation · PEB · Transport
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-yellow text-navy hover:bg-yellow/90 font-semibold text-lg px-8">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-yellow text-yellow hover:bg-yellow/10 font-semibold text-lg px-8 bg-transparent"
            >
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
          <p className="text-sm text-marble/80">Serving municipal & private sectors since 2000 • 200+ machines</p>
        </div>

        {/* Diagonal divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-navy/10">
              <Construction className="w-12 h-12 mb-4 text-yellow" />
              <h3 className="text-2xl font-bold mb-3 text-navy">Construction Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Infra development, roadwork, drainage, bridge works and municipal infrastructure projects.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-navy/10">
              <HardHat className="w-12 h-12 mb-4 text-yellow" />
              <h3 className="text-2xl font-bold mb-3 text-navy">Heavy Work</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rock excavation, large earth moving, site preparation with specialized machinery.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-navy/10">
              <Wrench className="w-12 h-12 mb-4 text-yellow" />
              <h3 className="text-2xl font-bold mb-3 text-navy">Maintenance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Site clearing, silt removal, debris management and equipment support services.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-navy text-white hover:bg-navy/90">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Diagonal Section */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-24 bg-background"
          style={{ clipPath: "polygon(0 0, 100% 100%, 100% 0, 0 0)" }}
        />

        <div className="container px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow mb-2">1000+</div>
              <div className="text-xl">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow mb-2">200+</div>
              <div className="text-xl">Machines in Fleet</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow mb-2">300+</div>
              <div className="text-xl">Skilled Staff</div>
            </div>
          </div>

          <p className="text-center text-lg max-w-3xl mx-auto leading-relaxed text-marble/90">
            Family-run, government-registered contractor delivering safe, timely, and cost-efficient solutions. With
            over two decades of experience, we bring technical expertise and modern equipment to every project.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-marble"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Featured Clients */}
      <section className="py-20 bg-marble">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Trusted Partners</h2>
          <p className="text-center text-muted-foreground mb-12">Working with leading organizations across India</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "VVMC",
              "Mira-Bhayandar MC",
              "Thane MC",
              "Shubh Enterprises",
              "ACE Enterprises",
              "Patil Construction",
              "Ameya Concrete",
              "Reliable Agencies",
            ].map((client) => (
              <div
                key={client}
                className="bg-white p-6 rounded-lg flex items-center justify-center border-2 border-navy/10 hover:border-yellow/50 transition-colors"
              >
                <span className="font-semibold text-navy text-center">{client}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-navy bg-transparent">
              <Link href="/clients">View All Clients</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Featured Work</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/work" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundImage: "url(/project-excavation.jpg)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Rock Excavation</h3>
                  <p className="text-yellow">Dhekale</p>
                </div>
              </div>
            </Link>

            <Link href="/work" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundImage: "url(/project-demolition.jpg)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Demolition Project</h3>
                  <p className="text-yellow">Pelhar</p>
                </div>
              </div>
            </Link>

            <Link href="/work" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundImage: "url(/project-dredging.jpg)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Creek Dredging</h3>
                  <p className="text-yellow">Vasai Creek</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-yellow text-navy hover:bg-yellow/90">
              <Link href="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
