"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "UVOS: Next-Gen Video Segmentation",
      description:
        "Revolutionary unsupervised video object segmentation system with production-ready deployment. Built end-to-end pipeline from research implementation to scalable application, achieving state-of-the-art results on DAVIS-2016 dataset.",
      image: "https://github.com/HAMMAD-Shahid27/UVOS-Unsupervised-video-object-segmentation/raw/main/BiCycle.gif",
      technologies: ["PyTorch", "Optical Flow", "UVOS", "Computer Vision"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/UVOS-Unsupervised-video-object-segmentation",
      githubUrl: "https://github.com/HAMMAD-Shahid27/UVOS-Unsupervised-video-object-segmentation",
      gradient: "from-indigo-500 to-purple-600",
      stats: { stars: 12, forks: 4 },
    },
    {
      title: "LLM Based Twilio Chatbot",
      description:
        "AI-powered voice chatbot built with Twilio, OpenAI GPT, and Python. Features natural speech recognition, text-to-speech synthesis, conversation memory, and a beautiful web dashboard. Perfect for customer service automation and voice AI applications.",
      image: "https://github.com/HAMMAD-Shahid27/TWILIO-CHATBOT/raw/main/CHATBOT.gif",
      technologies: ["LLMs", "Flask", "Twilio", "OpenAI", "Voice AI"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/TWILIO-CHATBOT",
      githubUrl: "https://github.com/HAMMAD-Shahid27/TWILIO-CHATBOT",
      gradient: "from-purple-500 to-pink-600",
      stats: { stars: 8, forks: 3 },
    },
    {
      title: "AI Photo Restoration Engine",
      description:
        "Full-stack photo restoration application combining advanced GANs with intuitive web interface. Features real-time processing, batch operations, and RESTful API for seamless integration with existing workflows.",
      image: "https://github.com/HAMMAD-Shahid27/AI-Photo-Restoration/raw/main/before_after_grid.png",
      technologies: ["GANs", "Flask", "React", "Replicate API", "Image Processing"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/AI-Photo-Restoration",
      githubUrl: "https://github.com/HAMMAD-Shahid27/AI-Photo-Restoration",
      gradient: "from-blue-500 to-cyan-600",
      stats: { stars: 8, forks: 3 },
    },
    {
      title: "MedAI: Skin Cancer Classifier",
      description:
        "Production-grade medical diagnostic web application with 94% accuracy. Built complete healthcare solution including patient management, secure data handling, and integration with hospital systems for clinical deployment.",
      image: "https://github.com/HAMMAD-Shahid27/Skin-Cancer-Detection/raw/main/SKIN_CANCER_GIF.gif",
      technologies: ["Medical AI", "Deep Learning", "Classification", "Healthcare", "VGG-11"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/Skin-Cancer-Detection",
      githubUrl: "https://github.com/HAMMAD-Shahid27/Skin-Cancer-Detection",
      gradient: "from-green-500 to-teal-600",
      stats: { stars: 15, forks: 7 },
    },
  ]

  return (
    <section id="projects" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent px-2">
              Featured Projects & Applications
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              AI research transformed into production-ready applications and scalable software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group mx-2 sm:mx-0">
      <CardContent className="p-0">
        <div className="h-32 sm:h-40 relative overflow-hidden bg-gray-100">
          {!imageError ? (
            <>
              {imageLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200">
                  <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-indigo-600 mb-2"></div>
                  <p className="text-xs text-gray-500 hidden sm:block">Loading project demo...</p>
                </div>
              )}
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} demonstration`}
                className={`w-full h-full object-contain bg-gray-50 transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading="lazy"
                decoding="async"
              />
            </>
          ) : (
            // Fallback gradient background
            <div className={`h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title.split(":")[0]}</h3>
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
          )}

          {/* Stats overlay - only show when image loads successfully */}
          {!imageError && !imageLoading && (
            <>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                <div className="flex items-center space-x-2 text-xs text-gray-700">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center">
                    <GitFork className="w-3 h-3 mr-1" />
                    {project.stats.forks}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>

      <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
        <CardTitle className="text-lg sm:text-xl text-gray-800 leading-tight">{project.title}</CardTitle>
        <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
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

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button
            size="sm"
            className="w-full sm:flex-1 bg-indigo-600 hover:bg-indigo-700 text-sm"
            onClick={() => window.open(project.liveUrl, "_blank")}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Project
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full sm:w-auto border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <Github className="h-4 w-4 mr-2 sm:mr-0" />
            <span className="sm:hidden">GitHub</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
