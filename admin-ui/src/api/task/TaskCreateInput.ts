export type TaskCreateInput = {
  comment?: string | null;
  contentTask: string;
  demandeur: string;
  dueDate: Date;
  Status: "EnCours" | "Done" | "Pending" | "WaitngInfo";
  title: string;
  severity: "Urgent" | "MediumSerity" | "NotUrgent";
};
