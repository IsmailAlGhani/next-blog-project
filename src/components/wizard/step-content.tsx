"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormTextArea } from "@/components/ui/form-textarea";
import type { FullBlogForm } from "@/lib/validation/blog-schemas";

interface StepContentProps {
  readonly register: UseFormRegister<FullBlogForm>;
  readonly errors: FieldErrors<FullBlogForm>;
}

export function StepContent({ register, errors }: StepContentProps) {
  return (
    <FormTextArea
      label="Blog Content"
      placeholder="Write your blog post content here... (minimum 50 characters)"
      error={errors.content?.message}
      required
      {...register("content")}
    />
  );
}
