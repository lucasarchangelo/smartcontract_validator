import { WorkshopAnswer, WorkshopFeedback } from "../types";

export const workshopFeedbackFromAnswer = (answer: WorkshopAnswer): WorkshopFeedback => {
  const { name, address } = answer;
  return { name, address, hasOwner: false };
};
