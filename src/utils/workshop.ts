import { WorkshopAnswer, WorkshopFeedback } from "../types";

export const workshopFeedbackFromAnswer = (answer: WorkshopAnswer): WorkshopFeedback => {

  return { name: answer["Email Address"], address: answer["Endereço Account1 da Carteira"], hasOwner: false };
};
