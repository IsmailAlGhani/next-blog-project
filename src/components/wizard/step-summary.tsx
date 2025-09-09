"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormField } from "@/components/ui/form-field";
import { FormSelect } from "@/components/ui/form-select";
import type { FullBlogForm } from "@/lib/validation/blog-schemas";

interface StepSummaryProps {
  readonly register: UseFormRegister<FullBlogForm>;
  readonly errors: FieldErrors<FullBlogForm>;
}

const categoryOptions = [
  { value: "Tech", label: "Technology" },
  { value: "Lifestyle", label: "Lifestyle" },
  { value: "Business", label: "Business" },
];

export function StepSummary({ register, errors }: StepSummaryProps) {
  return (
    <div className="space-y-6">
      <FormField
        required
        label="Blog Summary"
        placeholder="Write a brief summary of your blog post"
        error={errors.summary?.message}
        helperText="A compelling summary helps readers understand what your post is about"
        {...register("summary")}
      />

      <FormSelect
        required
        label="Category"
        placeholder="Select a category"
        options={categoryOptions}
        error={errors.category?.message}
        helperText="Choose the category that best fits your content"
        {...register("category")}
      />
    </div>
  );
}
