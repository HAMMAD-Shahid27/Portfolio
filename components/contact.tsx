"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { useActionState } from "react"
import { submitContactForm } from "@/actions/contact"

export function Contact() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hammadshahid980@gmail.com",
      description: "Best for project discussions & collaborations",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 335 4135940",
      description: "Quick calls and consultations",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gujranwala, Pakistan",
      description: "Available for remote development work",
      color: "from-blue-500 to-cyan-600",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to bring your AI ideas to life? Let's discuss your next software project or research collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-indigo-600" />
                  Development & Research Opportunities
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I'm actively seeking opportunities in AI development, full-stack projects, and research
                  collaborations. Whether you need a custom AI solution, web application, or want to explore
                  cutting-edge research, I'd love to help bring your vision to reality.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Available for software development projects
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Open to research collaborations
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Interested in full-time opportunities
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center`}
                    >
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{method.title}</h4>
                      <p className="text-indigo-600 font-medium">{method.value}</p>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send me a message
                </CardTitle>
                <CardDescription className="text-indigo-100">I typically respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form action={action} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Tell me about your project, development needs, or collaboration ideas..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {state && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${state.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                  >
                    {state.message}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
