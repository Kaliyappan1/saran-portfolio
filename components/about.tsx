import { Card, CardContent } from "@/components/ui/card"
import { Camera, Palette, Zap, Award } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Camera,
      title: "Photography",
      description:
        "Capturing moments, emotions, and stories through professional photography techniques and creative composition.",
      backgroundImage:
        "/jass-1.jpg", // Pink perfume bottle
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Combining visual elements and typography to communicate ideas creatively across digital and print media.",
      backgroundImage:
        "/graphic-design.png", // Gold jewelry on blue
    },
    {
      icon: Zap,
      title: "Creative Direction",
      description: "Developing unique visual concepts that blend artistic vision with strategic communication goals.",
      backgroundImage:
        "/creative-direction.png", // Silver earrings on pink
    },
    {
      icon: Award,
      title: "Brand Identity",
      description:
        "Creating cohesive visual identities that resonate with audiences in advertising, branding, and digital media.",
      backgroundImage:
        "/brand-identidity.png", // Purple perfume with droplets
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            About <span className="text-primary">Saran Photography</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Specializing in the intersection of graphic design and photography, where both fields come together in
            advertising, branding, and digital media to create powerful visual content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: `url(${skill.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500" />

              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">Available for freelance projects</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
