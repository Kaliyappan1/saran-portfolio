import { Card, CardContent } from "@/components/ui/card"
import { Mail, Instagram, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Let's Create <span className="text-primary">Together</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to bring your vision to life? Get in touch to discuss your next photography or graphic design project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <a
                        href="mailto:saranphotography28@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        saranphotography28@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Location</p>
                      <p className="text-muted-foreground text-lg">Available for projects worldwide</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Follow My Work</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/__its_me_kutty_saran__46?igsh=ZTU4M3c0d3p4OHFt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">Instagram</p>
                      <p className="text-muted-foreground">@__its_me_kutty_saran__46</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/saran-durai-64b8b3303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">LinkedIn</p>
                      <p className="text-muted-foreground">Saran Durai</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
