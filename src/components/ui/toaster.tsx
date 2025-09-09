"use client";

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "alert shadow-lg",
            t.variant === "success" && "alert-success",
            t.variant === "error" && "alert-error",
            t.variant === "warning" && "alert-warning",
            (!t.variant || t.variant === "info") && "alert-info"
          )}
        >
          <div>
            <span className="font-medium">{t.title}</span>
            {t.description && (
              <span className="block text-sm opacity-80">{t.description}</span>
            )}
          </div>
          <div>
            <button className="btn btn-sm" onClick={() => dismiss(t.id)}>
              Close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
