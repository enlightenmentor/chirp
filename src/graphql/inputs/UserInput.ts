import { InputType, Field } from "type-graphql";
import { User } from "../models";

@InputType()
export class UserInput implements Partial<User> {
  @Field(() => String)
  username!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  password!: string;

  @Field(() => String, { nullable: true })
  displayName?: string;

  @Field(() => String, { nullable: true })
  profilePhoto?: string;

  @Field(() => String, { nullable: true })
  coverPhoto?: string;
}
