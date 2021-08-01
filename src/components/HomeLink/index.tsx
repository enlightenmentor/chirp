import type { FC } from "react";
import Link from "next/link";
import { Box, Icon } from "@chakra-ui/react";
import { FiTwitter } from 'react-icons/fi';

type Props = {
  size?: number
}

const HomeLink: FC<Props> = ({ size = 8 }) => (
  <Link href="/home">
    <a>
      <Box p={3} _hover={{ background: "blue.50" }} borderRadius="full">
        <Icon as={FiTwitter} boxSize={size} color="blue.500"/>
      </Box>
    </a>
  </Link>
);

export default HomeLink;
