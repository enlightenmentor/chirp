import type { FC } from 'react'
import Link from 'next/link'
import { Heading, HStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BiMessageDots } from 'react-icons/bi'
import { LINK } from '../../constants'

type Props = {
  size?: number
  withText?: boolean
}

const HomeLink: FC<Props> = ({ size = 8, withText = false }) => (
  <Link href={LINK.INDEX}>
    <a>
      <HStack
        p={3}
        _hover={{ background: 'blue.50' }}
        borderRadius="full"
        w="max-content"
      >
        <Icon as={BiMessageDots} boxSize={size} color="blue.500" />
        {withText && (
          <Heading size="md" color="blue.500">
            Chirp
          </Heading>
        )}
      </HStack>
    </a>
  </Link>
)

export default HomeLink
