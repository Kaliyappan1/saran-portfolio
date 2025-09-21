import { Camera, Palette, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-6 w-6 text-primary" />
              <Palette className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold">Saran Photography</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creative visual storytelling through photography and graphic design. Capturing moments, emotions, and
              stories with artistic vision.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Product Photography</li>
              <li>Jewelry Photography</li>
              <li>Graphic Design</li>
              <li>Brand Identity</li>
              <li>Creative Direction</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>saranphotography28@gmail.com</p>
              <p>Available for freelance projects</p>
              <p>Worldwide collaboration</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Saran Photography © 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
