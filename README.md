# 📝 BlogWizard

A modern, multi-step blog creation platform built with Next.js App Router, React, TypeScript, and DaisyUI. Features a wizard-based post creation flow, real-time validation, auto-saving, and a clean reading experience.

## ✨ Features

- 🧙‍♂️ **Multi-Step Wizard**: Create posts through an intuitive step-by-step process
- ✍️ **Content Editor**: Rich text area with character count and validation
- 🏷️ **Categories**: Organize posts with predefined categories
- 📱 **Responsive Design**: Mobile-first approach with clean typography
- 🎨 **Modern UI**: Clean, accessible interface using DaisyUI components

## 🧰 Tech Stack

- **Next.js 14 (App Router)**
- **React 18** and **TypeScript 5**
- **Zustand** for state management
- **Tailwind CSS** + **DaisyUI** for styling
- **Zod** for form validation
- **React Hook Form** for form handling
- **date-fns** for date formatting

## 📦 Project Scripts

| Script       | Description                  |
| ------------ | ---------------------------- |
| `pnpm dev`   | Start development server     |
| `pnpm build` | Build project for production |
| `pnpm start` | Start production server      |
| `pnpm lint`  | Run ESLint                   |

## 🚀 Getting Started

1. Install dependencies:

```bash
pnpm install
```

1. Run the dev server:

```bash
pnpm dev
```

1. Open the app:

```txt
http://localhost:3000
```

## 📱 Live Preview

Check out the live demo of the application here: [BlogWizard](https://next-blog-project-nine.vercel.app/)

## 🧭 How to Use

- Start at the homepage to see all blog posts
- Click "Create Post" to start the wizard:
  1. Enter title and author (Metadata)
  2. Add summary and select category (Summary)
  3. Write your content (Content)
  4. Review and publish (Review)
- Posts are saved automatically as you type
- View posts with full formatting and metadata
- Navigate using the breadcrumb trail
- Responsive layout works on all devices

## 🗂️ Project Structure

```txt
src/
  app/                 # Next.js App Router pages
  components/          # UI components
    blog/             # Blog-specific components
    layout/           # Layout components
    ui/              # Shared UI components
    wizard/          # Multi-step wizard components
  hooks/              # Custom hooks
  lib/                # Utilities and types
    store/           # Zustand store
    validation/      # Zod schemas
  utils/              # Helper functions
```

Key files:

- `components/wizard/blog-wizard.tsx`: Main wizard component
- `components/blog/blog-post-detail.tsx`: Blog post view
- `components/blog/blog-list.tsx`: Post listing
- `lib/store/blog-store.ts`: Zustand store for posts
- `lib/validation/blog-schemas.ts`: Zod validation schemas
- `lib/types.ts`: Shared TypeScript types

---

Made with 💙 using Next.js and DaisyUI.
