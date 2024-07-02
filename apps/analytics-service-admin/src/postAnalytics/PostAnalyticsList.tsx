import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PostAnalyticsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PostAnalyticsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="likes" source="likes" />
        <TextField label="postId" source="postId" />
        <TextField label="shares" source="shares" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="views" source="views" />
      </Datagrid>
    </List>
  );
};
