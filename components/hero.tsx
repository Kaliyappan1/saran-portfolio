import { Button } from "@/components/ui/button"
import { ArrowDown, Camera, Palette, Instagram } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Camera className="h-6 w-6 text-primary" />
              <Palette className="h-6 w-6 text-accent" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="text-foreground">Creative</span> <span className="text-primary">Visual</span>{" "}
              <span className="text-accent">Storytelling</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-pretty">
              Graphic design combines visual elements and typography to communicate ideas creatively. Photography
              captures moments, emotions, and stories through images using cameras and editing techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent group" asChild>
                <a
                  href="https://www.instagram.com/__its_me_kutty_saran__46?igsh=ZTU4M3c0d3p4OHFt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5 group-hover:text-primary transition-colors" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/profilepic2.jpg"
                  alt="Saran - Professional Photographer and Graphic Designer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
