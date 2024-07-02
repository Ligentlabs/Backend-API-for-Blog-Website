import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  published?: boolean | null;
  title?: string | null;
};
