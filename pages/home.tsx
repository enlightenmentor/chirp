import type { FC } from 'react'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../src/components/MainLayout'
import { LINK } from '../src/constants'
import { gql, Post } from '../src/graphql/sdk'

type Props = {
  posts: Post[]
}

const Home: FC<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Home / Chirp</title>
    </Head>
    <MainLayout>
      {posts.map(({ id, content }) => (
        <Link href={LINK.STATUS('', id)} key={id}>
          <a>{content}</a>
        </Link>
      ))}
    </MainLayout>
  </>
)

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { posts = [] } = await gql.Posts()

  return {
    props: {
      posts,
    },
  }
}
