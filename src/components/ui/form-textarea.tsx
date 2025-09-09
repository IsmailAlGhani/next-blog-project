"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  wrapperClassName?: string;
}

const FormTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      wrapperClassName,
      label,
      error,
      helperText,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("form-control w-full", wrapperClassName)}>
        {label && (
          <label className="label">
            <span className="label-text">
              {label}
              {required && <span className="text-error ml-1">*</span>}
            </span>
          </label>
        )}

        <textarea
          ref={ref}
          className={cn(
            "textarea textarea-bordered min-h-48 w-full",
            error && "textarea-error",
            className
          )}
          {...props}
        />

        {(error || helperText) && (
          <label className="label">
            {error && (
              <span className="label-text-alt text-error">{error}</span>
            )}
            {!error && helperText && (
              <span className="label-text-alt">{helperText}</span>
            )}
          </label>
        )}
      </div>
    );
  }
);

FormTextArea.displayName = "TextArea";

export { FormTextArea };
