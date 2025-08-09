"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

interface CVViewerProps {
  triggerButton?: React.ReactNode
}

export function CVViewer({ triggerButton }: CVViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "https://github.com/HAMMAD-Shahid27/Portfolio/blob/main/Hammad_CV.pdf"
    link.download = "https://github.com/HAMMAD-Shahid27/Portfolio/blob/main/Hammad_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
            <div className="flex gap-2">
              <Button
                onClick={handleDownload}
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 p-6 pt-2">
          <div className="w-full h-full border rounded-lg overflow-hidden bg-gray-50">
            <iframe src="/Hammad_CV.pdf" className="w-full h-full" title="Hammad Shahid CV" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
