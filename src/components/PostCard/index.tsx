import type { FC } from "react";
import { VStack, StackDivider, Text, HStack, IconButton } from "@chakra-ui/react";
import { BiComment, BiRepost, BiHeart, BiUpload } from 'react-icons/bi';

type PostType = {
  id: string
  content: string
  createdAt: string
}

type Props = {
  post?: PostType;
};

const PostCard: FC<Props> = ({ post }) => (
  <VStack p={4} divider={<StackDivider/>} align="stretch">
    <VStack align="stretch">
      <Text fontSize="2xl">
        {post?.content}
      </Text>
      <Text color="gray.600" fontSize="sm" pb="2">
        {post?.createdAt}
      </Text>
    </VStack>
    <HStack justify="space-around">
      <IconButton
        aria-label="Comment"
        icon={<BiComment/>}
        variant="ghost"
        borderRadius="full"
        fontSize="xl"
        color="gray.600"
        _hover={{ background: "blue.50", color: "blue.500" }}
      />
      <IconButton
        aria-label="Rechirp"
        icon={<BiRepost/>}
        variant="ghost"
        borderRadius="full"
        fontSize="xl"
        color="gray.600"
        _hover={{ background: "blue.50", color: "blue.500" }}
      />
      <IconButton
        aria-label="Like"
        icon={<BiHeart/>}
        variant="ghost"
        borderRadius="full"
        fontSize="xl"
        color="gray.600"
        _hover={{ background: "blue.50", color: "blue.500" }}
      />
      <IconButton
        aria-label="Like"
        icon={<BiUpload/>}
        variant="ghost"
        borderRadius="full"
        fontSize="xl"
        color="gray.600"
        _hover={{ background: "blue.50", color: "blue.500" }}
      />
    </HStack>
    <div/>
  </VStack>
);

export default PostCard;
