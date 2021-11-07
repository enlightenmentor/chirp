import type { FC } from 'react'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import MainLayout from '../../src/components/MainLayout'
import PostCard from '../../src/components/PostCard'
import { gql, Post } from '../../src/graphql/sdk'

type Props = {
  post: Post | null
}

const PostPage: FC<Props> = ({ post }) => (
  <>
    <Head>
      <title>Post &quot;{post?.content}&quot; / Chirp</title>
    </Head>
    <MainLayout>
      <PostCard post={post} />
    </MainLayout>
  </>
)

export const getServerSideProps: GetServerSideProps<Props, { postId: string }> =
  async (context) => {
    const id = context.params?.postId
    const { post = null } = id ? await gql.Post({ id }) : {}

    return {
      props: {
        post,
      },
    }
  }

export default PostPage
