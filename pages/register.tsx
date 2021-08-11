import type { FC } from "react";
import Head from "next/head";
import NextLink from "next/link";
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
import { BiUserPlus, BiMessageDots } from "react-icons/bi";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleRegister = handleSubmit((data) => console.log(data));

  return (
    <>
      <Head>
        <title>Create account / Chirp</title>
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
            <Heading>Create Chirp account</Heading>
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
                <FormLabel>Email address</FormLabel>
                <Input
                  type="text"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
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
                leftIcon={<Icon as={BiUserPlus} boxSize={6} />}
              >
                Create account
              </Button>
              <NextLink href="/login">
                <Link color="blue.500">Already have an account? Sign in</Link>
              </NextLink>
            </VStack>
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export default Register;
