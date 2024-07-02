import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostAnalyticsWhereInput = {
  comments?: IntNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
  postId?: StringNullableFilter;
  shares?: IntNullableFilter;
  views?: IntNullableFilter;
};
