import type { FC } from 'react'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import MainLayout from '../src/components/MainLayout'
import ProfilePage from '../src/components/ProfilePage'
import { gql, User } from '../src/graphql/sdk'

type Props = {
  user: User | null
}

const Profile: FC<Props> = ({ user }) => {
  return (
    <>
      <Head>
        <title>@{user?.name} / Chirp</title>
      </Head>
      <MainLayout>
        <ProfilePage user={user} />
      </MainLayout>
    </>
  )
}

export default Profile

export const getServerSideProps: GetServerSideProps<
  Props,
  { username: string }
> = async (context) => {
  const username = context.params?.username
  const { user = null } = username ? await gql.User({ username }) : {}

  return {
    props: {
      user,
    },
  }
}
