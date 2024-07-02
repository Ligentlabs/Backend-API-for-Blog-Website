import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
};
