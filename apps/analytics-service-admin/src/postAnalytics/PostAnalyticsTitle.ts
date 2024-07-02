import { PostAnalytics as TPostAnalytics } from "../api/postAnalytics/PostAnalytics";

export const POSTANALYTICS_TITLE_FIELD = "postId";

export const PostAnalyticsTitle = (record: TPostAnalytics): string => {
  return record.postId?.toString() || String(record.id);
};
