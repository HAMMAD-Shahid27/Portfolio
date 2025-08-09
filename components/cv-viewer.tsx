"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, ExternalLink } from "lucide-react"

interface CVViewerProps {
  triggerButton?: React.ReactNode
}

export function CVViewer({ triggerButton }: CVViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenInNewTab = () => {
    window.open("https://github.com/HAMMAD-Shahid27/CV/blob/main/Hammad_CV.pdf", "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerButton || (
          <Button
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
            size="lg"
          >
            <Eye className="h-5 w-5 mr-2" />
            View CV
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
        <DialogHeader className="p-6 pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">Hammad Shahid - CV</DialogTitle>
            <Button
              onClick={handleOpenInNewTab}
              size="sm"
              variant="outline"
              className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in New Tab
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 p-6 pt-2">
          <div className="w-full h-full border rounded-lg overflow-hidden bg-gray-50">
            <iframe
              src="https://github.com/HAMMAD-Shahid27/CV/blob/main/Hammad_CV.pdf"
              className="w-full h-full"
              title="Hammad Shahid CV"
              onError={() => {
                console.log("PDF failed to load in iframe")
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
