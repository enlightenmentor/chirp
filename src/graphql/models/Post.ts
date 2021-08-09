import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Post {
  @Field(type => String)
  id!: string;

  @Field(type => String)
  content!: string;

  @Field(type => Date)
  createdAt!: Date;
}
