import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TaskWhereInput = {
  comment?: StringNullableFilter;
  contentTask?: StringFilter;
  demandeur?: StringFilter;
  dueDate?: DateTimeFilter;
  id?: StringFilter;
  Status?: "EnCours" | "Done" | "Pending" | "WaitngInfo";
  title?: StringFilter;
  severity?: "Urgent" | "MediumSerity" | "NotUrgent";
};
