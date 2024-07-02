import { PostCreateNestedManyWithoutCategoriesInput } from "./PostCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutCategoriesInput;
};
