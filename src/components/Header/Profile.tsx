import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Tiago Santos</Text>
          <Text color="gray.300" fontSize="small">
            tiagosan040@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Tiago Santos"
        src="https://github.com/jtiagosantos.png"
      />
    </Flex>
  );
}
