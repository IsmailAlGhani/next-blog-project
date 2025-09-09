export interface BlogPost {
  id: string
  title: string
  author: string
  summary: string
  category: BlogCategory
  content: string
  createdAt: Date
}

export type BlogCategory = "Tech" | "Lifestyle" | "Business"

export interface BlogFormData {
  title: string
  author: string
  summary: string
  category: BlogCategory
  content: string
}

export interface WizardStep {
  id: number
  title: string
  isCompleted: boolean
  isActive: boolean
}
