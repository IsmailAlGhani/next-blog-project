"use client";

import { Fragment } from "react";
import { UseFormWatch } from "react-hook-form";
import type { FullBlogForm } from "@/lib/validation/blog-schemas";

interface StepReviewProps {
  readonly watch: UseFormWatch<FullBlogForm>;
}

export function StepReview({ watch }: StepReviewProps) {
  const values = watch();

  const isFormComplete =
    values.title &&
    values.author &&
    values.summary &&
    values.category &&
    values.content;

  return (
    <Fragment>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-blue-600 shrink-0 w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="font-medium text-blue-800">
            Please review your blog post details before submitting.
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white shadow-lg border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-200">
          <div className="p-6">
            <h3 className="text-lg font-bold text-blue-600 flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Blog Metadata
            </h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-gray-600 min-w-16">
                  Title:
                </span>
                <span className="text-gray-900 font-medium">
                  {values.title || "Not provided"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-gray-600 min-w-16">
                  Author:
                </span>
                <span className="text-gray-900 font-medium">
                  {values.author || "Not provided"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-200">
          <div className="p-6">
            <h3 className="text-lg font-bold text-blue-600 flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              Summary & Category
            </h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-gray-600 min-w-20">
                  Category:
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {values.category || "Not selected"}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-medium text-gray-600">Summary:</span>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-800 leading-relaxed">
                    {values.summary || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-200">
          <div className="p-6">
            <h3 className="text-lg font-bold text-blue-600 flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Content Preview
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 max-h-64 overflow-y-auto">
              <div className="prose prose-sm max-w-none text-gray-800">
                <div
                  className="whitespace-pre-wrap leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html:
                      values.content?.replace(/\n/g, "<br>") ||
                      "No content provided",
                  }}
                />
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {values.content
                ? `${values.content.length} characters`
                : "0 characters"}
            </div>
          </div>
        </div>
      </div>

      {!isFormComplete && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <svg
              className="stroke-yellow-600 shrink-0 w-6 h-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <span className="font-medium text-yellow-800">
              Please complete all required fields before submitting.
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
}
