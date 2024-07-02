import { CommentAnalytics as TCommentAnalytics } from "../api/commentAnalytics/CommentAnalytics";

export const COMMENTANALYTICS_TITLE_FIELD = "commentId";

export const CommentAnalyticsTitle = (record: TCommentAnalytics): string => {
  return record.commentId?.toString() || String(record.id);
};
