import type { FC } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { signIn } from "next-auth/client";
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

type FormData = {
  username: string;
  password: string;
};

const Login: FC = () => {
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
    console.log(res);
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
              <NextLink href="/register">
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
