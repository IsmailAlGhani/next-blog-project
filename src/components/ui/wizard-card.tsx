import type React from "react";
import { cn } from "@/lib/utils";

interface WizardCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function WizardCard({
  title,
  description,
  children,
  className,
}: WizardCardProps) {
  return (
    <div
      className={cn(
        "card bg-base-100 shadow-xl border border-base-300",
        className
      )}
    >
      <div className="card-body space-y-6">
        <div className="mb-2">
          <h2 className="card-title">{title}</h2>
          {description && <p className="text-base-content/70">{description}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
