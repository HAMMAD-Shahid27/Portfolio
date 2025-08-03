"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hammadshahid980@gmail.com",
      description: "Best for detailed project discussions",
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
      description: "Available for remote collaboration",
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
              Let's Collaborate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to push the boundaries of AI research together? Let's discuss your next breakthrough project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-indigo-600" />
                  Research Opportunities
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I'm actively seeking collaborations in computer vision, unsupervised learning, and medical AI. Whether
                  you're a researcher, startup, or enterprise looking to leverage cutting-edge AI, I'd love to explore
                  how we can create something extraordinary together.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Available for research collaborations
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Open to consulting opportunities
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Interested in PhD/Research positions
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Tell me about your project, research goals, or collaboration ideas..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
