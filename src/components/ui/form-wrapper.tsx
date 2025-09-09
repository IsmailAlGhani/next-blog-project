"use client"

import type React from "react"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FormWrapperProps {
  children: ReactNode
  onSubmit?: (e: React.FormEvent) => void
  className?: string
}

export function FormWrapper({ children, onSubmit, className }: FormWrapperProps) {
  return (
    <form onSubmit={onSubmit} className={cn("space-y-6", className)} noValidate>
      {children}
    </form>
  )
}
