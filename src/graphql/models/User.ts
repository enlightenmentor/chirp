import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  username!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  hash!: string;

  @Field(() => String)
  salt!: string;

  @Field(() => String, { nullable: true })
  displayName?: string;

  @Field(() => String, { nullable: true })
  profilePhoto?: string;

  @Field(() => String, { nullable: true })
  coverPhoto?: string;

  @Field(() => Date)
  createdAt!: Date;
}
