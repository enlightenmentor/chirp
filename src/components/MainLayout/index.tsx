import type { FC } from "react";
import { Box, Container, HStack, StackDivider } from "@chakra-ui/react";
import MainNav from "../MainNav";

const MainLayout: FC = ({ children }) => (
  <Container
    maxW={{
      base: "container.sm",
      md: "container.md",
      lg: "container.lg",
      xl: "container.xl",
    }}
  >
    <HStack
      divider={<StackDivider borderColor="gray.100" />}
      spacing={0}
      align="start"
      minH="100vh"
    >
      <MainNav />
      <Box as="main" flex="1">
        {children}
      </Box>
    </HStack>
  </Container>
);

export default MainLayout;
