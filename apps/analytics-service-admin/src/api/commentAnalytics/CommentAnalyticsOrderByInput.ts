import { SortOrder } from "../../util/SortOrder";

export type CommentAnalyticsOrderByInput = {
  commentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  postId?: SortOrder;
  replies?: SortOrder;
  updatedAt?: SortOrder;
};
