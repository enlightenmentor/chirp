import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class User {
  @Field(() => String)
  id!: string

  @Field(() => String)
  name!: string

  @Field(() => String)
  email!: string

  @Field(() => String, { nullable: true })
  displayName?: string

  @Field(() => String, { nullable: true })
  image?: string

  @Field(() => String, { nullable: true })
  cover?: string

  @Field(() => Date)
  createdAt!: Date
}
