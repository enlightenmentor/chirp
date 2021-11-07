import { FC } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
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
  useToast
} from "@chakra-ui/react";
import { BiUserPlus, BiMessageDots } from "react-icons/bi";
import { LINK } from "../../src/constants";
import { gql } from "../../src/graphql/sdk";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Register: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const handleRegister = handleSubmit(async (user) => {
    await gql.RegisterUser({ user });
    toast({
      title: "New User Created",
      description: `User ${user.name} successully created`,
      status: 'success',
      isClosable: true
    });
    router.push(LINK.SIGNIN);
  });

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
                  autoComplete="off"
                  {...register("name", { required: true })}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="text"
                  placeholder="Email address"
                  autoComplete="off"
                  {...register("email", { required: true })}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
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
                isLoading={isSubmitting}
              >
                Create account
              </Button>
              <NextLink href={LINK.SIGNIN}>
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
