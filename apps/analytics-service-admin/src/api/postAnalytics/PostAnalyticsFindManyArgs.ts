import { PostAnalyticsWhereInput } from "./PostAnalyticsWhereInput";
import { PostAnalyticsOrderByInput } from "./PostAnalyticsOrderByInput";

export type PostAnalyticsFindManyArgs = {
  where?: PostAnalyticsWhereInput;
  orderBy?: Array<PostAnalyticsOrderByInput>;
  skip?: number;
  take?: number;
};
