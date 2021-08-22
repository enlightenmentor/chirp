import type { FC } from "react";
import { As, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Text, HStack, Icon } from "@chakra-ui/react";
import { BREAKPOINT } from "../../../constants";

type Props = {
  icon: As;
  href: string;
};

const MainNavItem: FC<Props> = ({ children, icon, href }) => {
  const { asPath } = useRouter();
  const [isLGWide] = useMediaQuery(`(min-width: ${BREAKPOINT.LG})`);
  const isActive = asPath === href;

  return (
    <Link href={href}>
      <a>
        <HStack
          spacing={4}
          py={3}
          pl={3}
          pr={{ base: 3, lg: 6 }}
          borderRadius="full"
          color={isActive ? "blue.500" : "gray.700"}
          _hover={{ background: "blue.50" }}
        >
          <Icon as={icon} boxSize={6} />
          {isLGWide && (
            <Text size="sm" fontWeight={isActive ? "bold" : "normal"}>
              {children}
            </Text>
          )}
        </HStack>
      </a>
    </Link>
  );
};

export default MainNavItem;
