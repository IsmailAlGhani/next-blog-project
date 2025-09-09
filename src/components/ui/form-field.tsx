import type React from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, helperText, className, required, ...props }, ref) => {
    return (
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </span>
        </label>
        <input
          ref={ref}
          className={cn(
            "input input-bordered w-full",
            error && "input-error",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-base-content/60">{helperText}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";
