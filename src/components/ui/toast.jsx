"use client"

import { createContext, useContext, useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

// Toast context
const ToastContext = createContext({
  toast: () => {},
  dismiss: () => {},
})

// Toast variants
const toastVariants = {
  default: "bg-white border border-gray-200 shadow-lg",
  destructive: "bg-red-500 text-white",
  success: "bg-green-500 text-white",
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, variant = "default", duration = 5000 }) => {
    const id = Math.random().toString(36).substring(2, 9)

    setToasts((prev) => [
      ...prev,
      {
        id,
        title,
        description,
        variant,
      },
    ])

    if (duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        dismiss(id)
      }, duration)
    }

    return id
  }

  const dismiss = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className="fixed top-0 right-0 z-50 p-4 space-y-4 w-full max-w-sm">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn("rounded-md p-4 shadow-lg transition-all relative", toastVariants[toast.variant])}
          >
            <div className="flex justify-between items-start">
              <div>
                {toast.title && <h3 className="font-medium">{toast.title}</h3>}
                {toast.description && <p className="text-sm mt-1">{toast.description}</p>}
              </div>
              <button onClick={() => dismiss(toast.id)} className="ml-4 p-1 rounded-full hover:bg-black/10">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export function Toaster() {
  return null // This is just a placeholder since we're rendering toasts directly in the provider
}
