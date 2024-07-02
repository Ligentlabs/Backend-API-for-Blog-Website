import { SortOrder } from "../../util/SortOrder";

export type PostAnalyticsOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  postId?: SortOrder;
  shares?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};
