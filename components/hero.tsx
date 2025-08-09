"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Eye } from "lucide-react"
import { CVViewer } from "@/components/cv-viewer"

export function Hero() {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "https://github.com/HAMMAD-Shahid27/Portfolio/raw/main/Hammad_CV.pdf"
    link.download = "https://github.com/HAMMAD-Shahid27/Portfolio/raw/main/Hammad_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                  🚀 Available for AI/ML & Development Projects
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Hammad Shahid
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">AI/ML Engineer & Web Developer</p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Specialized in <strong>Computer Vision</strong>, <strong>Large Language Models (LLMs)</strong>, and{" "}
                <strong>Deep Learning</strong> with hands-on experience in full-stack web development. I build
                intelligent systems that bridge cutting-edge AI research with practical, scalable applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                  onClick={() => {
                    const projectsSection = document.querySelector("#projects")
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" })
                    } else {
                      window.open("https://github.com/HAMMAD-Shahid27", "_blank")
                    }
                  }}
                >
                  <Github className="h-5 w-5 mr-2" />
                  Explore My Projects
                </Button>

                <div className="flex gap-2 w-full sm:w-auto">
                  <CVViewer
                    triggerButton={
                      <Button
                        size="lg"
                        className="flex-1 sm:flex-none bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg border-0"
                      >
                        <Eye className="h-5 w-5 mr-2" />
                        <span className="hidden sm:inline">Show CV</span>
                        <span className="sm:hidden">View</span>
                      </Button>
                    }
                  />
                  <Button
                    size="lg"
                    className="flex-1 sm:flex-none bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg border-0"
                    onClick={handleDownloadCV}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    <span className="hidden sm:inline">Download</span>
                    <span className="sm:hidden">Save</span>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-indigo-100 hover:text-indigo-600"
                  onClick={() => window.open("https://github.com/HAMMAD-Shahid27", "_blank")}
                >
                  <Github className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-indigo-100 hover:text-indigo-600"
                  onClick={() => window.open("https://www.linkedin.com/in/hammad-shahid-23a560350/", "_blank")}
                >
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-indigo-100 hover:text-indigo-600"
                  onClick={() => window.open("mailto:hammadshahid980@gmail.com")}
                >
                  <Mail className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Right Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 border-8 border-white rounded-full shadow-2xl bg-white p-2">
                  <img
                    src="https://github.com/HAMMAD-Shahid27.png?size=400"
                    alt="Hammad Shahid - AI/ML Engineer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
