import { CommentAnalyticsWhereInput } from "./CommentAnalyticsWhereInput";
import { CommentAnalyticsOrderByInput } from "./CommentAnalyticsOrderByInput";

export type CommentAnalyticsFindManyArgs = {
  where?: CommentAnalyticsWhereInput;
  orderBy?: Array<CommentAnalyticsOrderByInput>;
  skip?: number;
  take?: number;
};
