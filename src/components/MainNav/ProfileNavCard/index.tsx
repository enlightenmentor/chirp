import type { FC } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'
import { LINK } from '../../../constants'

const ProfileNavCard: FC = () => {
  const { data: session } = useSession({ required: false })
  const user = session?.user

  return user ? (
    <Link href={LINK.PROFILE(user.name as string)}>
      <a>
        <HStack
          p={2}
          _hover={{ background: 'blue.50' }}
          borderRadius="full"
          w="max-content"
        >
          <Avatar size="sm" src={user.image as string} />
          <VStack display={{ base: 'none', lg: 'flex' }}>
            <Text fontSize={14}>@{user.name}</Text>
          </VStack>
        </HStack>
      </a>
    </Link>
  ) : null
}

export default ProfileNavCard
