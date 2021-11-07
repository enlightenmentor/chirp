import type { FC } from "react";
import { useSession } from "next-auth/react";
import {
  Box,
  Flex,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";
import {
  BiHomeAlt,
  BiBell,
  BiMessageSquareDetail,
  BiUser,
} from "react-icons/bi";
import { LINK } from "../../constants";
import HomeLink from "../HomeLink";
import MainNavItem from "./MainNavItem";
import CreatePostButton from "./CreatePostButton";
import ProfileNavCard from "./ProfileNavCard";
import { useBreakpointsContext } from "../BreakpointsProvider";

const MainNav: FC = () => {
  const { data: session } = useSession({ required: false });
  const { lg } = useBreakpointsContext();
  const user = session?.user;

  return (
    <Flex
      w={{ base: "100%", sm: "max-content", lg: "220px" }}
      direction="column"
      pt={{ base: 0, sm: 2 }}
      pb={{ base: 0, sm: 4 }}
      pr={{ base: 0, sm: 4 }}
      borderRightWidth={{ base: "0", sm: "1px" }}
      borderTopWidth={{ base: "1px", sm: "0" }}
      borderColor="gray.100"
    >
      <VStack align="stretch" spacing={{ base: 0, sm: 4 }}>
        <Box display={{ base: "none", sm: "flex" }}>
          <HomeLink size={lg ? 8 : 6} withText={lg} />
        </Box>
        <Stack
          direction={{ base: "row", sm: "column" }}
          align="start"
          justify="space-evenly"
          spacing={0}
          py={{ base: 1, sm: 0 }}
        >
          <MainNavItem href={user ? LINK.HOME : LINK.SIGNIN} icon={BiHomeAlt}>
            Home
          </MainNavItem>
          {user && (
            <>
              <MainNavItem href={LINK.NOTIFICATIONS} icon={BiBell}>
                Notifications
              </MainNavItem>
              <MainNavItem href={LINK.MESSAGES} icon={BiMessageSquareDetail}>
                Messages
              </MainNavItem>
              <MainNavItem
                href={LINK.PROFILE(user.name as string)}
                icon={BiUser}
              >
                Profile
              </MainNavItem>
            </>
          )}
        </Stack>
        <CreatePostButton />
      </VStack>
      <Spacer display={{ base: "none", sm: "flex" }} />
      <Box display={{ base: "none", sm: "flex" }} width="100%">
        <ProfileNavCard />
      </Box>
    </Flex>
  );
};

export default MainNav;
