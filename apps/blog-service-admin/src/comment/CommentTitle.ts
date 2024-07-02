import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "id";

export const CommentTitle = (record: TComment): string => {
  return record.id?.toString() || String(record.id);
};
