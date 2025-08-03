"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-primary mb-2">Hammad Shahid</h3>
              <p className="text-muted-foreground">
                Turning data into vision, and vision into impact — through code and curiosity.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://github.com/HAMMAD-Shahid27", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://www.linkedin.com/in/hammad-shahid-23a560350/", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open("mailto:hammadshahid980@gmail.com")}>
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground">© 2025 Hammad Shahid. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
