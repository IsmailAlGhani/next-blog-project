"use client";

import { useCallback, useState } from "react";
import { WizardCard } from "@/components/ui/wizard-card";
import { WizardStepIndicator } from "@/components/ui/wizard-step-indicator";
import { StepMetadata } from "./step-metadata";
import { StepSummary } from "./step-summary";
import { StepContent } from "./step-content";
import { StepReview } from "./step-review";
import type { BlogPost } from "@/lib/types";
import { WizardNavigation } from "@/components/ui/wizard-navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FullBlogForm, fullBlogSchema } from "@/lib/validation/blog-schemas";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useBlogStore } from "@/lib/store/blog-store";

export function BlogWizard() {
  const router = useRouter();
  const { toast } = useToast();
  const { addPost } = useBlogStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    reset,
  } = useForm<FullBlogForm>({
    resolver: zodResolver(fullBlogSchema),
    mode: "onChange",
  });

  const submitForm = async (data: FullBlogForm) => {
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newPost: BlogPost = {
      id: crypto.randomUUID(),
      title: data.title,
      author: data.author,
      summary: data.summary,
      category: data.category,
      content: data.content,
      createdAt: new Date(),
    };

    addPost(newPost);
    reset();

    // Redirect to success page or home
    router.push(`/blog/${newPost.id}?created=true`);

    toast({
      variant: "success",
      title: "Post submitted",
      description: "Your blog post is live.",
    });
  };

  const handleNext = async () => {
    if (currentStep === 1) {
      const metadataValid = await trigger(["title", "author"]);
      if (metadataValid) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    } else if (currentStep === 2) {
      const summaryValid = await trigger(["summary", "category"]);
      if (summaryValid) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    } else if (currentStep === 3) {
      const contentValid = await trigger(["content"]);
      if (contentValid) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const getStepContent = useCallback(() => {
    switch (currentStep) {
      case 1:
        return <StepMetadata register={register} errors={errors} />;
      case 2:
        return <StepSummary register={register} errors={errors} />;
      case 3:
        return <StepContent register={register} errors={errors} />;
      case 4:
        return <StepReview watch={watch} />;
      default:
        return <></>;
    }
  }, [currentStep, register, errors, watch]);

  const getStepInfo = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Blog Metadata",
          description:
            "Let's start with the basic information about your blog post.",
        };
      case 2:
        return {
          title: "Summary & Category",
          description: "Provide a summary and choose a category for your post.",
        };
      case 3:
        return {
          title: "Blog Content",
          description: "Write the main content of your blog post.",
        };
      case 4:
        return {
          title: "Review & Submit",
          description: "Review your blog post and submit it for publication.",
        };
      default:
        return {
          title: "",
          description: "",
        };
    }
  };

  const stepInfo = getStepInfo();

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            Create New Blog Post
          </h1>
          <p className="text-center text-base-content/70">
            Follow the steps below to create your blog post
          </p>
        </div>

        <WizardStepIndicator currentStep={currentStep} className="mb-8" />

        <WizardCard title={stepInfo.title} description={stepInfo.description}>
          {getStepContent()}
          <WizardNavigation
            currentStep={currentStep}
            onBack={handleBack}
            onNext={handleNext}
            onSubmit={handleSubmit(submitForm)}
            isSubmitting={isSubmitting}
          />
        </WizardCard>
      </div>
    </div>
  );
}
