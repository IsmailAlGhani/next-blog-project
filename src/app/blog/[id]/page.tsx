import { BlogPostDetail } from "@/components/blog/blog-post-detail"

interface BlogPostPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ created?: string }>
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { id } = await params
  const { created } = await searchParams

  return <BlogPostDetail postId={id} showSuccessMessage={created === "true"} />
}
