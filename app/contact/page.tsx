"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    // Phone validation
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      })
      return
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Thank you!",
      description: "We'll contact you within 24 hours.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      projectType: "",
      message: "",
    })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-navy text-white">
        <div className="container px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-yellow max-w-2xl mx-auto">
            Get in touch with us for quotes, inquiries, or project consultations
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-navy">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6 border-2 border-navy/10">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-navy mb-1">Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        001, Ground Floor, Mazgaon Co-op HSG Soc, Damodar Hall, Tulinj Road, Nallasopara East, Palghar
                        401209
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-navy/10">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-yellow flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-navy mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91-9890579998</p>
                      <p className="text-muted-foreground">+91-9225789998</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-navy/10">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-yellow flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-navy mb-1">Email</h3>
                      <p className="text-muted-foreground">bababconstruction300@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-navy/10">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-yellow flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-navy mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-marble rounded-lg flex items-center justify-center border-2 border-navy/10">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-yellow mx-auto mb-2" />
                  <p className="text-muted-foreground">Map Location</p>
                  <p className="text-sm text-muted-foreground">Nallasopara East, Palghar</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-navy">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="Optional"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excavation">Excavation</SelectItem>
                      <SelectItem value="demolition">Demolition</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="equipment-rental">Equipment Rental</SelectItem>
                      <SelectItem value="material-supply">Material Supply</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-yellow text-navy hover:bg-yellow/90 font-semibold">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-yellow">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Start Your Project?</h2>
          <p className="text-navy/80 mb-6">Contact us today for a free consultation and quote</p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
          >
            Request a Quote
          </Button>
        </div>
      </section>
    </>
  )
}
