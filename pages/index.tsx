import type { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Center, Heading, HStack, Icon, Stack, VStack } from "@chakra-ui/react";
import { BiLogInCircle, BiUserPlus } from 'react-icons/bi';
import { FiTwitter } from 'react-icons/fi';

const Root: FC = () => (
  <>
    <Head>
      <title>Chirp</title>
    </Head>
    <HStack h="100vh" align="stretch">
      <Center bg="blue.400" p={4} flex={1} display={{ base: 'none', md: 'flex' }}>
        <Icon as={FiTwitter} color="white" boxSize="60%"/>
      </Center>
      <VStack
        align="start"
        p={{ base: 4, sm: 8 }}
        pt={{ base: 16, sm: 16, md: 32 }}
        spacing={6}
        w={{ base: 'none', md: 'md', lg: 'lg', xl: 'xl' }}
        minW="50vw">
        <Icon as={FiTwitter} color="blue.500" boxSize={12}/>
        <Heading size="3xl">Here and Now</Heading>
        <Heading size="lg">Join Chirp today</Heading>
        <Stack
          align="start"
          direction={{ base: 'column', sm: 'row' }}
          spacing={4}
          pt={8}>
          <Link href="/login">
            <a>
              <Button
                size="lg"
                variant="outline"
                colorScheme="blue"
                borderRadius="full"
                leftIcon={<Icon as={BiLogInCircle} boxSize={6}/>}>
                Sign in
              </Button>
            </a>
          </Link>
          <Link href="/register">
            <a>
              <Button
                size="lg"
                variant="outline"
                colorScheme="blue"
                borderRadius="full"
                leftIcon={<Icon as={BiUserPlus} boxSize={6}/>}>
                Create account
              </Button>
            </a>
          </Link>
        </Stack>
      </VStack>
    </HStack>
  </>
);

export default Root;
