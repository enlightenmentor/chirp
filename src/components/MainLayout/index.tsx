import type { FC } from "react";
import { Box, Container, Stack, StackDivider } from "@chakra-ui/react";
import MainNav from "../MainNav";
import { BREAKPOINT } from "../../constants";

const MainLayout: FC = ({ children }) => (
  <Container
    maxW={{
      base: "container.sm",
      md: "container.md",
      lg: "container.lg",
      xl: "container.xl",
    }}
    px={{ base: 0, sm: 4 }}
  >
    <Stack
      direction={{ base: "column-reverse", sm: "row" }}
      divider={<StackDivider borderColor="gray.100" />}
      spacing={0}
      align="stretch"
      minH="100vh"
    >
      <MainNav />
      <Box as="main" flex="1">
        {children}
      </Box>
      <Box w="220px" display={{ base: "none", xl: "flex" }} />
    </Stack>
  </Container>
);

export default MainLayout;
