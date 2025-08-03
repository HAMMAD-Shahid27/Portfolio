"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "UVOS: Next-Gen Video Segmentation",
      description:
        "Revolutionary unsupervised approach to video object segmentation using contrastive learning. Achieved state-of-the-art results on DAVIS-2017 without requiring any labeled training data—a paradigm shift in computer vision research.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["PyTorch", "RAFT Optical Flow", "Contrastive Learning", "DAVIS Dataset"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/UVOS-Unsupervised-video-object-segmentation",
      githubUrl: "https://github.com/HAMMAD-Shahid27/UVOS-Unsupervised-video-object-segmentation",
      gradient: "gradient-bg-1",
      stats: { stars: 12, forks: 4 },
    },
    {
      title: "AI Photo Restoration Engine",
      description:
        "End-to-end deep learning pipeline that breathes new life into damaged photographs. Combines GANs with attention mechanisms to restore missing details, remove artifacts, and enhance image quality with remarkable precision.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["GANs", "Attention Networks", "Image Processing", "Flask API"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/AI-Photo-Restoration",
      githubUrl: "https://github.com/HAMMAD-Shahid27/AI-Photo-Restoration",
      gradient: "gradient-bg-2",
      stats: { stars: 8, forks: 3 },
    },
    {
      title: "MedAI: Skin Cancer Classifier",
      description:
        "Clinical-grade diagnostic tool leveraging ensemble deep learning for melanoma detection. Trained on 10,000+ dermatological images with 94% accuracy, potentially saving lives through early detection and accessible healthcare.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Medical AI", "Ensemble Learning", "Dash Framework", "Clinical Validation"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/Skin-Cancer-Detection",
      githubUrl: "https://github.com/HAMMAD-Shahid27/Skin-Cancer-Detection",
      gradient: "gradient-bg-3",
      stats: { stars: 15, forks: 7 },
    },
    {
      title: "SmartPayroll: Enterprise Solution",
      description:
        "Intelligent payroll automation system with ML-powered anomaly detection. Features advanced role-based security, automated tax calculations, and predictive analytics for workforce management—serving 500+ employees efficiently.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Machine Learning", "Security Architecture", "Database Design", "Business Intelligence"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/Payroll-Management-System",
      githubUrl: "https://github.com/HAMMAD-Shahid27/Payroll-Management-System",
      gradient: "gradient-bg-4",
      stats: { stars: 6, forks: 2 },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Research & Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge AI solutions that bridge academic research with real-world impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group"
              >
                <CardContent className="p-0">
                  <div className={`h-48 ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title.split(":")[0]}</h3>
                      <div className="flex items-center justify-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center">
                          <GitFork className="w-4 h-4 mr-1" />
                          {project.stats.forks}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`text-xs ${
                          techIndex % 2 === 0
                            ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
