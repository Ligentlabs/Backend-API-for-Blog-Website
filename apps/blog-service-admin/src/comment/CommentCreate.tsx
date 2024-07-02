import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AuthorTitle } from "../author/AuthorTitle";
import { PostTitle } from "../post/PostTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="post.id" reference="Post" label="post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
