import type { FC } from "react";
import {
  Box,
  Container,
  Stack,
  StackDivider,
  useMediaQuery,
} from "@chakra-ui/react";
import MainNav from "../MainNav";
import { BREAKPOINT } from "../../constants";

const MainLayout: FC = ({ children }) => {
  const [isXLWide] = useMediaQuery(`(min-width: ${BREAKPOINT.XL})`);

  return (
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
        {isXLWide && <Box w="xs" />}
      </Stack>
    </Container>
  );
};

export default MainLayout;
