import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Tiago Santos</Text>
        <Text color="gray.300" fontSize="small">
          tiagosan040@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Tiago Santos"
        src="https://github.com/jtiagosantos.png"
      />
    </Flex>
  );
}
