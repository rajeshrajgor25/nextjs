import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#0E1A27",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Baba Construction — Heavy Earthmoving & Demolition",
  description:
    "Trusted heavy earthmoving, excavation and demolition services since 2000. Fleet of 200+ machines. Fast deployment for municipal and private sectors.",
  keywords:
    "construction, excavation, demolition, heavy machinery, earthmoving, infrastructure, Vasai, Nallasopara, Palghar",
  authors: [{ name: "Baba Construction" }],
  generator: "v0.app",
  openGraph: {
    title: "Baba Construction — Heavy Earthmoving & Demolition",
    description: "Trusted heavy earthmoving, excavation and demolition services since 2000. Fleet of 200+ machines.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
