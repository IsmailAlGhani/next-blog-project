"use client";

import { wizardSteps } from "@/lib/constant";
import { cn } from "@/lib/utils";

interface WizardNavigationProps {
  readonly onBack?: () => void;
  readonly onNext?: () => void;
  readonly onSubmit?: () => void;
  readonly currentStep: number;
  readonly isNextDisabled?: boolean;
  readonly isSubmitting?: boolean;
  readonly className?: string;
}

export function WizardNavigation({
  onBack,
  onNext,
  onSubmit,
  currentStep,
  isNextDisabled = false,
  isSubmitting = false,
  className,
}: WizardNavigationProps) {
  return (
    <div
      className={cn(
        "flex justify-between items-center pt-6 border-t border-base-300",
        className
      )}
    >
      <div>
        {currentStep !== 1 && (
          <button
            type="button"
            onClick={onBack}
            className="btn btn-outline"
            disabled={isSubmitting}
          >
            Back
          </button>
        )}
      </div>

      <div>
        {currentStep === wizardSteps.length ? (
          <button
            type="button"
            onClick={onSubmit}
            className="btn btn-primary"
            disabled={isNextDisabled || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Submitting
              </>
            ) : (
              "Submit Post"
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="btn btn-primary"
            disabled={isNextDisabled}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
