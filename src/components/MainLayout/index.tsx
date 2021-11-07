import type { FC } from 'react'
import { Box, Container, Stack } from '@chakra-ui/react'
import MainNav from '../MainNav'

const MainLayout: FC = ({ children }) => (
  <Container
    maxW={{
      base: 'container.sm',
      md: 'container.md',
      lg: 'container.lg',
      xl: 'container.xl',
    }}
    px={{ base: 0, sm: 4 }}
  >
    <Stack
      direction={{ base: 'column-reverse', sm: 'row' }}
      spacing={0}
      align="stretch"
      minH="100vh"
    >
      <MainNav />
      <Box as="main" flex="1">
        {children}
      </Box>
      <Box
        w="220px"
        display={{ base: 'none', xl: 'flex' }}
        borderLeft="1px"
        borderColor="gray.100"
      />
    </Stack>
  </Container>
)

export default MainLayout
