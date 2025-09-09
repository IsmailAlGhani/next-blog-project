export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-bold text-lg text-blue-600">BlogWizard</p>
              <p className="text-sm text-gray-600">
                Multi-Step Blog Creation Platform
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700">
              Next.js
            </span>
            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700">
              Zustand
            </span>
            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700">
              Slate.js
            </span>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Created for MYBOOST Frontend Test - Demonstrating code
              readability, reusable components, and modern web development
              practices
            </p>
            <p className="text-xs text-gray-400 mt-2">
              © 2025 BlogWizard. Built with ❤️ using modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
