import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
