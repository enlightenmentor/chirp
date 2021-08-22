import type { FC } from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";
import { Avatar, HStack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { BREAKPOINT, LINK } from "../../../constants";

const ProfileNavCard: FC = () => {
  const [session] = useSession();
  const [isLGWide] = useMediaQuery(`(min-width: ${BREAKPOINT.LG})`);
  const user = session?.user;

  return user ? (
    <Link href={LINK.PROFILE(user.name as string)}>
      <a>
        <HStack
          p={2}
          _hover={{ background: "blue.50" }}
          borderRadius="full"
          w="max-content"
        >
          <Avatar size="sm" src={user.image as string} />
          {isLGWide && (
            <VStack>
              <Text fontSize={14}>@{user.name}</Text>
            </VStack>
          )}
        </HStack>
      </a>
    </Link>
  ) : null;
};

export default ProfileNavCard;
