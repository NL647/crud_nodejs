import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateInput,
  SelectInput,
} from "react-admin";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="content task" multiline source="contentTask" />
        <TextInput label="demandeur" multiline source="demandeur" />
        <DateInput label="due date" source="dueDate" />
        <SelectInput
          source="Status"
          label="status"
          choices={[
            { label: "En cours", value: "EnCours" },
            { label: "Done", value: "Done" },
            { label: "pending", value: "Pending" },
            { label: "waitng info", value: "WaitngInfo" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="title" source="title" />
        <SelectInput
          source="severity"
          label="urgence"
          choices={[
            { label: "urgent", value: "Urgent" },
            { label: "medium serity", value: "MediumSerity" },
            { label: "not urgent", value: "NotUrgent" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
