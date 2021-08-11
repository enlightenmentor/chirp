import type { FC } from "react";
import { Stack, VStack } from "@chakra-ui/react";
import {
  BiHomeAlt,
  BiBell,
  BiMessageSquareDetail,
  BiUser,
} from "react-icons/bi";
import MainNavItem from "./MainNavItem";
import HomeLink from "../HomeLink";
import CreatePostButton from "./CreatePostButton";

const MainNav: FC = () => (
  <VStack
    align="stretch"
    pt={{ base: 0, sm: 2 }}
    pr={{ base: 0, sm: 4 }}
    spacing={{ base: 0, sm: 2 }}>
    <HomeLink display={{ base: "none", sm: "flex" }}/>
    <Stack
      direction={{ base: "row", sm: "column" }}
      align="start"
      justify="space-evenly"
      spacing={0}
      py={{ base: 1, sm: 0 }}>
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
    </Stack>
    <CreatePostButton/>
  </VStack>
);

export default MainNav;
