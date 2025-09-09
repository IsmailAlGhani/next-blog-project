import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { wizardSteps } from "@/lib/constant";

interface WizardStepIndicatorProps {
  readonly currentStep: number;
  readonly className?: string;
}

export function WizardStepIndicator({
  currentStep,
  className,
}: WizardStepIndicatorProps) {
  const updateStep = useMemo(
    () =>
      wizardSteps.map((step) => ({
        ...step,
        isActive: step.id === currentStep,
        isCompleted: step.id < currentStep,
      })),
    [currentStep]
  );

  return (
    <div className={cn("w-full mb-8", className)}>
      <ul className="steps steps-horizontal w-full">
        {updateStep.map((step, index) => (
          <li
            key={step.id}
            className={cn(
              "step",
              (step.isCompleted || step.isActive) && "step-primary"
            )}
            data-content={step.isCompleted ? "✓" : index + 1}
          >
            {step.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
