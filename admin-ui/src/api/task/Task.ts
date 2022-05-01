export type Task = {
  comment: string | null;
  contentTask: string;
  createdAt: Date;
  demandeur: string;
  dueDate: Date;
  id: string;
  Status?: "EnCours" | "Done" | "Pending" | "WaitngInfo";
  title: string;
  updatedAt: Date;
  severity?: "Urgent" | "MediumSerity" | "NotUrgent";
};
