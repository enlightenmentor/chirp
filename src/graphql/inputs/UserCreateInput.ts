import { InputType, Field } from "type-graphql";
import { User } from "../models";

@InputType()
export class UserCreateInput implements Partial<User> {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  password!: string;

  @Field(() => String, { nullable: true })
  displayName?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  cover?: string;
}
