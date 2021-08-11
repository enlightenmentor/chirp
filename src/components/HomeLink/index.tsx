import type { FC } from "react";
import Link from "next/link";
import type { ChakraProps } from "@chakra-ui/react";
import { Box, Icon } from "@chakra-ui/react";
import { BiMessageDots } from "react-icons/bi";

type Props = ChakraProps & {
  size?: number;
};

const HomeLink: FC<Props> = ({ size = 8, ...props }) => (
  <Box {...props}>
    <Link href="/home">
      <a>
        <Box p={3} _hover={{ background: "blue.50" }} borderRadius="full">
          <Icon as={BiMessageDots} boxSize={size} color="blue.500" />
        </Box>
      </a>
    </Link>
  </Box>
);

export default HomeLink;
