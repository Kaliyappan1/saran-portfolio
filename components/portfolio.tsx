"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const projects = [
    {
      id: 1,
      title: "Product Photography - Perfume Collection",
      category: "Product Photography",
      image:
        "/jass-1.jpg",
      description:
        "Creative product photography featuring vibrant lighting and artistic composition for luxury perfume brands.",
      tags: ["Product Photography", "Lighting", "Creative Direction"],
    },
    {
      id: 2,
      title: "Traditional Jewelry Photography",
      category: "Jewelry Photography",
      image: "/Jewel.jpg",
      description:
        "Elegant jewelry photography showcasing traditional Indian gold necklace with professional studio lighting.",
      tags: ["Jewelry Photography", "Traditional", "Studio Lighting"],
    },
    {
      id: 3,
      title: "Fashion Jewelry Collection",
      category: "Jewelry Photography",
      image: "/kammal-2.jpg",
      description: "Contemporary jewelry photography with bold color palettes and modern aesthetic appeal.",
      tags: ["Fashion Photography", "Color Theory", "Modern Design"],
    },
    {
      id: 4,
      title: "Luxury Fragrance Campaign",
      category: "Product Photography",
      image:
        "/jass.jpg",
      description: "High-end fragrance photography with water droplets and dramatic lighting effects.",
      tags: ["Luxury Branding", "Special Effects", "Commercial Photography"],
    },
    {
      id: 5,
      title: "Artistic Jewelry Composition",
      category: "Creative Photography",
      image: "/kammal.jpg",
      description: "Creative composition featuring jewelry and decorative elements with vibrant color schemes.",
      tags: ["Creative Direction", "Composition", "Color Grading"],
    },
  ]

  return (
    <>
      <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Featured <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A showcase of creative work spanning product photography, jewelry photography, and graphic design projects
              that demonstrate technical excellence and artistic vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <Badge variant="secondary" className="mb-2 backdrop-blur-sm bg-white/90 text-black">
                      {project.category}
                    </Badge>
                    <p className="text-white text-sm font-medium">Click to view full size</p>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-background to-muted/20">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image src={selectedImage || "/placeholder.svg"} alt="Full size image" fill className="object-contain" />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}
