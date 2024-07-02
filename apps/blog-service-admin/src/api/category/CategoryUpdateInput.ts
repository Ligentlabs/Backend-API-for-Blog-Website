import { PostUpdateManyWithoutCategoriesInput } from "./PostUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  posts?: PostUpdateManyWithoutCategoriesInput;
};
