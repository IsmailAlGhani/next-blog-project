import { WizardStep } from "./types";

export const wizardSteps: WizardStep[] = [
  { id: 1, title: "Metadata", isCompleted: false, isActive: true },
  { id: 2, title: "Summary", isCompleted: false, isActive: false },
  { id: 3, title: "Content", isCompleted: false, isActive: false },
  { id: 4, title: "Review", isCompleted: false, isActive: false },
];
