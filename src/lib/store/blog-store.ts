import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BlogPost } from "@/lib/types";

interface BlogStore {
  posts: BlogPost[];

  // Actions
  addPost: (post: BlogPost) => void;
  getPostById: (id: string) => BlogPost | undefined;
}

export const useBlogStore = create<BlogStore>()(
  persist(
    (set, get) => ({
      posts: [],
      currentFormData: {},
      currentStep: 1,

      addPost: (post) =>
        set((state) => ({
          posts: [post, ...state.posts],
        })),

      getPostById: (id) => {
        const { posts } = get();
        return posts.find((post) => post.id === id);
      },
    }),
    {
      name: "blog-storage",
      partialize: (state) => ({
        posts: state.posts,
      }),
    }
  )
);
