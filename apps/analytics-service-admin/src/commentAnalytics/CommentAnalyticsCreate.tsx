import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CommentAnalyticsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="commentId" source="commentId" />
        <NumberInput step={1} label="likes" source="likes" />
        <TextInput label="postId" source="postId" />
        <NumberInput step={1} label="replies" source="replies" />
      </SimpleForm>
    </Create>
  );
};
