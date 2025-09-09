import Link from "next/link"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <div className={cn("text-sm breadcrumbs", className)}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.href && !item.isActive ? (
              <Link href={item.href} className="text-primary hover:text-primary-focus">
                {item.label}
              </Link>
            ) : (
              <span className={cn(item.isActive && "text-base-content font-medium")}>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
