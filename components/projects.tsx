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
        "Revolutionary unsupervised video object segmentation system with production-ready deployment. Built end-to-end pipeline from research implementation to scalable application, achieving state-of-the-art results on DAVIS-2016 dataset.",
      image: "https://github.com/HAMMAD-Shahid27/UVOS-Unsupervised-video-object-segmentation/blob/main/BiCycle.gif?raw=true",
      technologies: ["PyTorch", "RAFT Optical Flow", "FastAPI", "Docker"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/UVOS-Unsupervised-video-object-segmentation",
      githubUrl: "https://github.com/HAMMAD-Shahid27/UVOS-Unsupervised-video-object-segmentation",
      gradient: "gradient-bg-1",
      stats: { stars: 12, forks: 4 },
    },
    {
      title: "LLM Based Twilio Callbot Chatbot",
      description:
        "AI-powered voice chatbot built with Twilio, OpenAI GPT, and Python. Features natural speech recognition, text-to-speech synthesis, conversation memory, and a beautiful web dashboard. Perfect for customer service automation and voice AI applications.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["LLMS", "Flask", "HTML", "Twilio","CallBot"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/TWILIO-CHATBOT",
      githubUrl: "https://github.com/HAMMAD-Shahid27/TWILIO-CHATBOT",
      gradient: "gradient-bg-2",
      stats: { stars: 8, forks: 3 },
    },
    {
      title: "AI Photo Restoration Engine",
      description:
        "Full-stack photo restoration application combining advanced GANs with intuitive web interface. Features real-time processing, batch operations, and RESTful API for seamless integration with existing workflows.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["GANs", "Flask", "React", "AWS S3"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/AI-Photo-Restoration",
      githubUrl: "https://github.com/HAMMAD-Shahid27/AI-Photo-Restoration",
      gradient: "gradient-bg-2",
      stats: { stars: 8, forks: 3 },
    },
    {
      title: "MedAI: Skin Cancer Classifier",
      description:
        "Production-grade medical diagnostic web application with 94% accuracy. Built complete healthcare solution including patient management, secure data handling, and integration with hospital systems for clinical deployment.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Medical AI", "Dash", "PostgreSQL", "HIPAA Compliance"],
      liveUrl: "https://github.com/HAMMAD-Shahid27/Skin-Cancer-Detection",
      githubUrl: "https://github.com/HAMMAD-Shahid27/Skin-Cancer-Detection",
      gradient: "gradient-bg-3",
      stats: { stars: 15, forks: 7 },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects & Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI research transformed into production-ready applications and scalable software solutions
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
