import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CommentAnalyticsWhereInput = {
  commentId?: StringNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  postId?: StringNullableFilter;
  replies?: IntNullableFilter;
};
