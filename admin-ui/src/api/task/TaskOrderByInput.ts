import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  comment?: SortOrder;
  contentTask?: SortOrder;
  createdAt?: SortOrder;
  demandeur?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  Status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  severity?: SortOrder;
};
