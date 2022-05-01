import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comment" source="comment" />
        <TextField label="content task" source="contentTask" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="demandeur" source="demandeur" />
        <TextField label="due date" source="dueDate" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="Status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="urgence" source="severity" />
      </SimpleShowLayout>
    </Show>
  );
};
