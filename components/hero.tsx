"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              🚀 Available for Research Collaborations
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hammad Shahid
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">
            AI Researcher & Computer Vision Specialist | ML · DL · LLMs · Generative AI
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming complex visual data into intelligent solutions. I specialize in unsupervised learning, deep
            neural networks, and cutting-edge computer vision research that pushes the boundaries of what's possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg">
              <Github className="h-5 w-5 mr-2" />
              Explore My Research
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
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
      </div>
    </section>
  )
}
