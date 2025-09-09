"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormField } from "@/components/ui/form-field";
import type { FullBlogForm } from "@/lib/validation/blog-schemas";

interface StepMetadataProps {
  readonly register: UseFormRegister<FullBlogForm>;
  readonly errors: FieldErrors<FullBlogForm>;
}

export function StepMetadata({ register, errors }: StepMetadataProps) {
  return (
    <div className="space-y-6">
      <FormField
        required
        label="Blog Title"
        placeholder="Enter your blog post title"
        error={errors.title?.message}
        helperText="Choose a compelling title that captures your post's essence"
        {...register("title")}
      />

      <FormField
        required
        label="Author Name"
        placeholder="Enter your name"
        error={errors.author?.message}
        helperText="This will be displayed as the post author"
        {...register("author")}
      />
    </div>
  );
}
