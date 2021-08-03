import type { FC } from "react";
import { Button, VStack } from "@chakra-ui/react";
import {
  BiHomeAlt,
  BiBell,
  BiMessageSquareDetail,
  BiUser,
} from "react-icons/bi";
import MainNavItem from "./MainNavItem";
import HomeLink from "../HomeLink";

const MainNav: FC = () => (
  <VStack align="start" pr={4}>
    <HomeLink />
    <VStack align="start" spacing={0}>
      <MainNavItem href="/home" icon={BiHomeAlt}>
        Home
      </MainNavItem>
      <MainNavItem href="/notifications" icon={BiBell}>
        Notifications
      </MainNavItem>
      <MainNavItem href="/messages" icon={BiMessageSquareDetail}>
        Messages
      </MainNavItem>
      <MainNavItem href="/profile" icon={BiUser}>
        Profile
      </MainNavItem>
    </VStack>
    <Button
      borderRadius="full"
      colorScheme="blue"
      variant="solid"
      size="lg"
      w="100%"
    >
      Chirp
    </Button>
  </VStack>
);

export default MainNav;
