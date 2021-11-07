import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Post {
  @Field(() => String)
  id!: string

  @Field(() => String)
  content!: string

  @Field(() => Date)
  createdAt!: Date
}
