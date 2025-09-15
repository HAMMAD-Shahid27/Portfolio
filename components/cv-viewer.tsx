"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, ExternalLink, Download, AlertCircle, Loader2 } from "lucide-react"

interface CVViewerProps {
  triggerButton?: React.ReactNode
}

export function CVViewer({ triggerButton }: CVViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Using the working GitHub URL from previous context
  const cvUrl = "https://github.com/HAMMAD-Shahid27/Portfolio/raw/main/Hammad_CV.pdf"

  const handleOpenInNewTab = () => {
    window.open(cvUrl, "_blank")
  }

  const handleDownloadCV = () => {
    try {
      const link = document.createElement("a")
      link.href = cvUrl
      link.download = "Hammad_Shahid_CV.pdf"
      link.target = "_blank" // Fallback for browsers that block downloads
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      // Fallback: open in new tab if download fails
      window.open(cvUrl, "_blank")
    }
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
    console.error("PDF failed to load in iframe")
  }

  const resetState = () => {
    setIsLoading(true)
    setHasError(false)
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
        if (open) {
          resetState()
        }
      }}
    >
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
                onClick={handleDownloadCV}
                size="sm"
                variant="outline"
                className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
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
          </div>
        </DialogHeader>
        <div className="flex-1 p-6 pt-2">
          <div className="w-full h-full border rounded-lg overflow-hidden bg-gray-50 relative">
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-600 mb-4" />
                <p className="text-gray-600">Loading CV...</p>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Unable to load PDF viewer</h3>
                <p className="text-gray-600 mb-6 text-center max-w-md">
                  The PDF viewer couldn't load. You can still download the CV or open it in a new tab.
                </p>
                <div className="flex gap-3">
                  <Button onClick={handleDownloadCV} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </Button>
                  <Button
                    onClick={handleOpenInNewTab}
                    variant="outline"
                    className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in New Tab
                  </Button>
                </div>
              </div>
            )}

            {/* PDF Viewer with multiple fallback methods */}
            <iframe
              src={cvUrl}
              className="w-full h-full"
              title="Hammad Shahid CV"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{ display: hasError ? "none" : "block" }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
