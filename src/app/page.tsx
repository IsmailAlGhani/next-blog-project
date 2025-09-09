import Link from "next/link";
import { BlogList } from "@/components/blog/blog-list";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 rounded-box mb-12">
          <div className="hero-content text-center py-16">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-base-content mb-4">
                BlogWizard
              </h1>
              <p className="text-lg text-base-content/70 mb-6">
                Create amazing blog posts with our intuitive multi-step wizard.
                Share your thoughts with the world.
              </p>
              <Link href="/create" className="btn btn-primary btn-lg gap-2">
                Start Writing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M6 12h12"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <BlogList />
      </div>
    </div>
  );
}
