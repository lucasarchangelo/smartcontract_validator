import { WorkshopAnswer, WorkshopFeedback } from "../types";

export const workshopFeedbackFromAnswer = (answer: WorkshopAnswer): WorkshopFeedback => {

  return { address: answer["Wallet Account1 Address"], hasOwner: false };
};
