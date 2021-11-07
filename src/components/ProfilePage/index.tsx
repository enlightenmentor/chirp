import type { FC } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { BiLogOutCircle } from "react-icons/bi";
import type { User } from "../../../src/graphql/sdk";

type Props = {
  user: User | null;
};

const ProfilePage: FC<Props> = ({ user }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Flex direction="column">
      <AspectRatio ratio={3} minH="120px">
        <Box w="100%" bg="blue.100" />
      </AspectRatio>
      <VStack mx="4" align="stretch">
        <Flex mt={{ base: "-14vw", sm: "-44px", md: "-60px" }} align="center">
          <Avatar
            borderWidth="4px"
            borderColor="white"
            src={user?.image as string}
            boxSize={{ base: "28vw", sm: "88px", md: "120px" }}
          />
          <Spacer />
          <Button
            variant="outline"
            colorScheme="blue"
            borderRadius="full"
            bg="white"
            leftIcon={<Icon as={BiLogOutCircle} boxSize={6} />}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        </Flex>
        <Heading size="lg">@{user?.name}</Heading>
      </VStack>
    </Flex>
  );
};

export default ProfilePage;
