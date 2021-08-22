import type { FC } from "react";
import Head from "next/head";
import NextLink from "next/link";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import type { Session } from "next-auth";
import { signIn, getSession } from "next-auth/client";
import { useForm } from "react-hook-form";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  VStack,
  Link,
} from "@chakra-ui/react";
import { BiLogInCircle, BiMessageDots } from "react-icons/bi";
import { LINK } from "../../src/constants";

type Props = {
  session: Session | null;
};

type FormData = {
  username: string;
  password: string;
};

const Login: FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleRegister = handleSubmit(async ({ username, password }) => {
    console.log({ username, password });
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (!res?.error && res?.ok) {
      router.replace(LINK.HOME);
    }
  });

  return (
    <>
      <Head>
        <title>Sign in / Chirp</title>
      </Head>
      <Container>
        <Center pt={8}>
          <VStack
            as="form"
            w="sm"
            align="stretch"
            spacing={8}
            onSubmit={handleRegister}
          >
            <Icon as={BiMessageDots} color="blue.500" boxSize={10} />
            <Heading>Sign into Chirp</Heading>
            <VStack width="100%">
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
            </VStack>
            <VStack>
              <Button
                type="submit"
                colorScheme="blue"
                borderRadius="full"
                size="lg"
                w="100%"
                leftIcon={<Icon as={BiLogInCircle} boxSize={6} />}
              >
                Sign in
              </Button>
              <NextLink href={LINK.REGISTER}>
                <Link color="blue.500">
                  Don&lsquo;t have an account yet? Create one
                </Link>
              </NextLink>
            </VStack>
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const session = await getSession({ req: context.req });

  if (session?.user) {
    return {
      redirect: {
        destination: LINK.HOME,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
