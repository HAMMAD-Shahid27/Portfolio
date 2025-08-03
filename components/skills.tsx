import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Code, Cloud, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "AI & Deep Learning",
      icon: Brain,
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "PyTorch & Neural Networks", level: 95 },
        { name: "Computer Vision (OpenCV)", level: 92 },
        { name: "TensorFlow & Keras", level: 88 },
        { name: "Unsupervised Learning", level: 90 },
      ],
    },
    {
      title: "Programming & Data",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Python (Advanced)", level: 96 },
        { name: "NumPy & Pandas", level: 90 },
        { name: "Scientific Computing", level: 87 },
        { name: "Algorithm Design", level: 85 },
      ],
    },
    {
      title: "MLOps & Deployment",
      icon: Cloud,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Docker & Containerization", level: 82 },
        { name: "AWS Cloud Services", level: 78 },
        { name: "FastAPI & Streamlit", level: 88 },
        { name: "Model Optimization", level: 85 },
      ],
    },
    {
      title: "Research Tools",
      icon: Wrench,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Git & Version Control", level: 93 },
        { name: "Jupyter & Research", level: 95 },
        { name: "Data Visualization", level: 86 },
        { name: "Technical Writing", level: 82 },
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
              A comprehensive toolkit for building next-generation AI solutions
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
