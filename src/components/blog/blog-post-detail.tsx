"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useBlogStore } from "@/lib/store/blog-store";
import { formatDistanceToNow, format } from "date-fns";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { BlogPost } from "@/lib/types";

interface BlogPostDetailProps {
  readonly postId: string;
  readonly showSuccessMessage?: boolean;
}

export function BlogPostDetail({
  postId,
  showSuccessMessage = false,
}: BlogPostDetailProps) {
  const { getPostById } = useBlogStore();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [showSuccess, setShowSuccess] = useState(showSuccessMessage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundPost = getPostById(postId);
    setPost(foundPost || null);
    setIsLoading(false);
  }, [postId, getPostById]);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-base-content/70 mb-6">
            The blog post you're looking for doesn't exist or may have been
            removed.
          </p>
          <div className="flex gap-2 justify-center">
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link href="/create" className="btn btn-outline">
              Create New Post
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog Posts", href: "/" },
    { label: post.title, isActive: true },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {showSuccess && (
        <div className="alert alert-success mb-6 mx-4 mt-4 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            🎉 Blog post created successfully! Your post is now live and ready
            to be shared.
          </span>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        <article className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body">
            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="badge badge-primary">{post.category}</div>
                <span className="text-sm text-base-content/60">
                  Published{" "}
                  {formatDistanceToNow(new Date(post.createdAt), {
                    addSuffix: true,
                  })}
                </span>
                <span className="text-sm text-base-content/60">
                  {format(new Date(post.createdAt), "MMM dd, yyyy")}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-base-content mb-4 leading-tight text-balance">
                {post.title}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-10 h-10 !flex items-center justify-center">
                    <span className="text-sm">
                      {post.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-base-content">
                    By {post.author}
                  </p>
                </div>
              </div>

              <div className="divider"></div>
            </div>
            {/* Summary */}
            <div className="mb-8">
              <div className="bg-base-200 p-6 rounded-lg border-l-4 border-primary">
                <h2 className="text-lg font-semibold mb-2 text-base-content">
                  Summary
                </h2>
                <p className="text-base-content/80 leading-relaxed text-pretty">
                  {post.summary}
                </p>
              </div>
            </div>
            {/* Content */}
            <div className="prose max-w-none">
              <div className="text-base-content leading-relaxed text-pretty whitespace-pre-line">
                {post.content}
              </div>
            </div>{" "}
            {/* Footer */}
            <div className="divider mt-12"></div>
            <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-base-content/60">Category:</span>
                <div className="badge badge-outline">{post.category}</div>
              </div>
              <div className="flex gap-2">
                <Link href="/" className="btn btn-outline btn-sm">
                  View All Posts
                </Link>
                <Link href="/create" className="btn btn-primary btn-sm">
                  Create New Post
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Actions */}
        <div className="mt-8 text-center">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title justify-center">What's Next?</h3>
              <p className="text-base-content/70">
                Continue exploring or create another blog post
              </p>
              <div className="card-actions justify-center mt-4">
                <Link href="/" className="btn btn-outline">
                  Browse All Posts
                </Link>
                <Link href="/create" className="btn btn-primary">
                  Write Another Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
