import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PostAnalyticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="comments" source="comments" />
        <NumberInput step={1} label="likes" source="likes" />
        <TextInput label="postId" source="postId" />
        <NumberInput step={1} label="shares" source="shares" />
        <NumberInput step={1} label="views" source="views" />
      </SimpleForm>
    </Create>
  );
};
