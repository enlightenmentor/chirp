import type { FC } from "react";
import { useSession } from "next-auth/client";
import {
  Box,
  Flex,
  Spacer,
  Stack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import {
  BiHomeAlt,
  BiBell,
  BiMessageSquareDetail,
  BiUser,
} from "react-icons/bi";
import { BREAKPOINT, LINK } from "../../constants";
import HomeLink from "../HomeLink";
import MainNavItem from "./MainNavItem";
import CreatePostButton from "./CreatePostButton";
import ProfileNavCard from "./ProfileNavCard";

const MainNav: FC = () => {
  const [session] = useSession();
  const [isSMWide, isLGWide] = useMediaQuery([
    `(min-width: ${BREAKPOINT.SM})`,
    `(min-width: ${BREAKPOINT.LG})`,
  ]);
  const user = session?.user;

  return (
    <Flex
      w="220px"
      direction="column"
      pt={{ base: 0, sm: 2 }}
      pb={{ base: 0, sm: 4 }}
      pr={{ base: 0, sm: 4 }}
    >
      <VStack align="stretch" spacing={{ base: 0, sm: 4 }}>
        {isSMWide && <HomeLink size={isLGWide ? 8 : 6} withText={isLGWide} />}
        <Stack
          direction={{ base: "row", sm: "column" }}
          align="start"
          justify="space-evenly"
          spacing={0}
          py={{ base: 1, sm: 0 }}
        >
          {user && (
            <>
              <MainNavItem href={LINK.HOME} icon={BiHomeAlt}>
                Home
              </MainNavItem>
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
      {isSMWide && (
        <>
          <Spacer />
          <ProfileNavCard />
        </>
      )}
    </Flex>
  );
};

export default MainNav;
