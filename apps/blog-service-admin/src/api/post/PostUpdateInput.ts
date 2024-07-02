import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  published?: boolean | null;
  title?: string | null;
};
