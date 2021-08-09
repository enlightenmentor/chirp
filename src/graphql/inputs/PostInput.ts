import { InputType, Field } from "type-graphql";
import { Post } from "../models";

@InputType()
export class PostInput implements Partial<Post> {
  @Field(type => String)
  content!: string;
}
