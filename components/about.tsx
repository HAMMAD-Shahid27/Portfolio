import { Card } from "@/components/ui/card"
import { Brain, Code, Zap, Target } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Computer Vision Expert",
      description: "Advanced image processing, object detection, and video analysis systems",
    },
    {
      icon: Code,
      title: "LLM Specialist",
      description: "Large Language Models, NLP, and conversational AI applications",
    },
    {
      icon: Zap,
      title: "Deep Learning Engineer",
      description: "Neural networks, model optimization, and production deployment",
    },
    {
      icon: Target,
      title: "Full-Stack Developer",
      description: "End-to-end web applications with AI/ML integration",
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
              AI/ML Engineer building intelligent systems with expertise in Computer Vision, LLMs, and Web Development
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">AI/ML Engineering Excellence</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  As an AI/ML Engineer with strong expertise in <strong>Computer Vision</strong>,{" "}
                  <strong>Large Language Models (LLMs)</strong>, and <strong>Deep Learning</strong>, I specialize in
                  developing intelligent systems that solve real-world problems. My experience spans from research-level
                  algorithm development to production-ready AI applications.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Full-Stack AI Solutions</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  With hands-on experience in web development, I create end-to-end AI solutions that seamlessly
                  integrate machine learning models with scalable web applications. From computer vision systems and
                  LLM-powered chatbots to deep learning pipelines and intelligent web platforms—I build technology that
                  delivers measurable impact.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-indigo-600 mb-1">5+</h4>
                  <p className="text-gray-600 text-sm">AI/ML Projects</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-purple-600 mb-1">10+</h4>
                  <p className="text-gray-600 text-sm">Web Applications</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-indigo-600 mb-1">25+</h4>
                  <p className="text-gray-600 text-sm">Technologies Mastered</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-purple-600 mb-1">1000+</h4>
                  <p className="text-gray-600 text-sm">Hours of Development</p>
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
