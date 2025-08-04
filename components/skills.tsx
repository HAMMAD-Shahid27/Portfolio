import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Code, Cloud, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Computer Vision",
      icon: Brain,
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "OpenCV & Image Processing", level: 95 },
        { name: "Object Detection (YOLO, R-CNN)", level: 92 },
        { name: "Video Analysis & Segmentation", level: 90 },
        { name: "PyTorch & TensorFlow", level: 88 },
      ],
    },
    {
      title: "LLMs & NLP",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Large Language Models", level: 90 },
        { name: "Transformers & BERT", level: 88 },
        { name: "LangChain & RAG Systems", level: 85 },
        { name: "Conversational AI", level: 87 },
      ],
    },
    {
      title: "Deep Learning",
      icon: Cloud,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Neural Network Architecture", level: 92 },
        { name: "Model Optimization & Deployment", level: 88 },
        { name: "GANs & Generative Models", level: 85 },
        { name: "Transfer Learning", level: 90 },
      ],
    },
    {
      title: "Web Development",
      icon: Wrench,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "React & Next.js", level: 88 },
        { name: "Python (Django/FastAPI)", level: 92 },
        { name: "Django REST Framework", level: 90 },
        { name: "Database Design (SQL/NoSQL)", level: 87 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive skill set spanning AI/ML engineering and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-800">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-gray-500 font-semibold">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-gray-200"
                        style={{
                          background: `linear-gradient(to right, ${
                            category.color.includes("indigo")
                              ? "#6366f1"
                              : category.color.includes("purple")
                                ? "#8b5cf6"
                                : category.color.includes("blue")
                                  ? "#3b82f6"
                                  : "#10b981"
                          } 0%, ${
                            category.color.includes("indigo")
                              ? "#8b5cf6"
                              : category.color.includes("purple")
                                ? "#ec4899"
                                : category.color.includes("blue")
                                  ? "#06b6d4"
                                  : "#14b8a6"
                          } 100%)`,
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
