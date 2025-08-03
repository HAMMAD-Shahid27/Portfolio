import { Card, CardContent } from "@/components/ui/card"
import { Brain, Eye, Zap, Target } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Deep Learning Expert",
      description: "Specialized in neural architectures and self-supervised learning methods",
    },
    {
      icon: Eye,
      title: "Computer Vision Pioneer",
      description: "Advanced research in video object segmentation and optical flow",
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Constantly exploring LangChain, RAFT, and generative AI applications",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Turning complex research challenges into practical AI solutions",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bridging the gap between theoretical research and real-world AI applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <Card className="overflow-hidden shadow-xl border-0">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                      <Brain className="w-16 h-16 text-indigo-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Research-Driven Innovation</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As a Data Science graduate, I've dedicated my career to pushing the boundaries of artificial
                  intelligence. My research focuses on unsupervised video object segmentation, where I develop novel
                  approaches that don't require labeled training data—a breakthrough that's reshaping how we understand
                  visual learning.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Beyond Traditional AI</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm passionate about leveraging advanced learning techniques and deep neural architectures to solve real-world challenges—especially in medical imaging. My work integrates Machine Learning, Deep Learning, LLMs, and Computer Vision to develop adaptive, scalable AI systems that enhance diagnostic accuracy and accessibility in healthcare. I focus on transferability, representation learning, and model efficiency across diverse data scenarios.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-indigo-600 mb-1">4+</h4>
                  <p className="text-gray-600 text-sm">Research Projects</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-purple-600 mb-1">15+</h4>
                  <p className="text-gray-600 text-sm">AI Models Built</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-indigo-600 mb-1">3</h4>
                  <p className="text-gray-600 text-sm">Datasets Published</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-purple-600 mb-1">20+</h4>
                  <p className="text-gray-600 text-sm">Technologies Mastered</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
