"use client";

import Link from "next/link";
import { useBlogStore } from "@/lib/store/blog-store";
import { formatDistanceToNow } from "date-fns";

export function BlogList() {
  const posts = useBlogStore((state) => state.posts);

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-base-content/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-base-content mb-2">
            No blog posts yet
          </h3>
          <p className="text-base-content/70 mb-6">
            Start creating your first blog post to see it here.
          </p>
          <Link href="/create" className="btn btn-primary">
            Create Your First Post
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-base-content">
          Latest Posts ({posts.length} {posts.length === 1 ? "post" : "posts"})
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-all duration-200 cursor-pointer h-full hover:scale-[1.02]">
              <div className="card-body">
                <div className="flex justify-between items-start mb-3">
                  <div className="badge badge-primary badge-sm">
                    {post.category}
                  </div>
                  <span className="text-xs text-base-content/60">
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>

                <h3 className="card-title text-lg mb-2 line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-base-content/70 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                <div className="card-actions justify-between items-center mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="avatar placeholder">
                      <div className="bg-primary text-primary-content rounded-full w-6 h-6 !flex items-center justify-center">
                        <span className="text-xs">
                          {post.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-base-content/60">
                      {post.author}
                    </span>
                  </div>
                  <span className="text-primary text-sm font-medium hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {posts.length > 0 && (
        <div className="text-center pt-6">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Posts</div>
              <div className="stat-value text-primary">{posts.length}</div>
              <div className="stat-desc">Keep writing amazing content!</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
