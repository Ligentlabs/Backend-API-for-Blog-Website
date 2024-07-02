import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";
import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  comments?: CommentCreateNestedManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};
