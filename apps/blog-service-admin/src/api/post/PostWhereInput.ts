import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  published?: BooleanNullableFilter;
  title?: StringNullableFilter;
};
