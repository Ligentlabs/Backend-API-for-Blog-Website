import { Author } from "../author/Author";
import { Post } from "../post/Post";

export type Comment = {
  author?: Author | null;
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  updatedAt: Date;
};
