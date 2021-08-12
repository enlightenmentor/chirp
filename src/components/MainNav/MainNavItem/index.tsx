import type { FC } from "react";
import type { As } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Heading, HStack, Icon } from "@chakra-ui/react";

type Props = {
  icon: As;
  href: string;
};

const MainNavItem: FC<Props> = ({ children, icon, href }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

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
          _hover={{ background: "blue.50", color: "blue.500" }}
        >
          <Icon as={icon} boxSize={{ base: 6, sm: 8 }} />
          <Heading size="md" display={{ base: "none", lg: "initial" }}>
            {children}
          </Heading>
        </HStack>
      </a>
    </Link>
  );
};

export default MainNavItem;
