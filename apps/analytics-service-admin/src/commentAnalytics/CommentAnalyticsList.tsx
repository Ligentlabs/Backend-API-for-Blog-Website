import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CommentAnalyticsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CommentAnalyticsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="commentId" source="commentId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="likes" source="likes" />
        <TextField label="postId" source="postId" />
        <TextField label="replies" source="replies" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
