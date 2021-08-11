import type { FC } from "react";
import { Center, Button, IconButton } from "@chakra-ui/react";
import { BiMessageDots } from "react-icons/bi";

const CreatePostButton: FC = () => (
  <>
    <Button
      display={{ base: "none", lg: "flex" }}
      leftIcon={<BiMessageDots />}
      borderRadius="full"
      colorScheme="blue"
      variant="solid"
      size="lg"
      w="100%"
    >
      Chirp
    </Button>
    <Center w="100%">
      <IconButton
        aria-label="Chirp"
        icon={<BiMessageDots />}
        position={{ base: "absolute", sm: "static" }}
        display={{ base: "flex", lg: "none" }}
        right="20px"
        bottom="74px"
        colorScheme="blue"
        fontSize={{ base: "xl", sm: "lg" }}
        boxSize={{ base: "56px", sm: "48px" }}
        borderRadius="full"
      />
    </Center>
  </>
);

export default CreatePostButton;
