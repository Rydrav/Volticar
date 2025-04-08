"use client"

import { useToast as useToastHook } from "./toast"

export function useToast() {
  return useToastHook()
}

export function Toaster() {
  return null // This is just a placeholder since we're rendering toasts directly in the provider
}

export const toast = {
  // This is just a placeholder for static imports
  // The actual toast function is provided by the useToast hook
}
