import { z } from "zod";

export const blogMetadataSchema = z.object({
  title: z
    .string()
    .min(1, "Blog title is required")
    .max(100, "Title must be less than 100 characters"),
  author: z
    .string()
    .min(1, "Author name is required")
    .max(50, "Author name must be less than 50 characters"),
});

export const blogSummarySchema = z.object({
  summary: z
    .string()
    .min(1, "Blog summary is required")
    .max(300, "Summary must be less than 300 characters"),
  category: z.enum(["Tech", "Lifestyle", "Business"], {
    message: "Please select a category",
  }),
});

export const blogContentSchema = z.object({
  content: z
    .string()
    .min(1, "Blog content is required")
    .min(50, "Content must be at least 50 characters"),
});

export const fullBlogSchema = blogMetadataSchema
  .and(blogSummarySchema)
  .and(blogContentSchema);

export type BlogMetadataForm = z.infer<typeof blogMetadataSchema>;
export type BlogSummaryForm = z.infer<typeof blogSummarySchema>;
export type BlogContentForm = z.infer<typeof blogContentSchema>;
export type FullBlogForm = z.infer<typeof fullBlogSchema>;
