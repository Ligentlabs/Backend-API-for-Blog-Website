import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
};
