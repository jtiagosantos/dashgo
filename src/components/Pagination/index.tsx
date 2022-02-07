<<<<<<< HEAD
import { HStack, Box } from '@chakra-ui/react';
=======
import { HStack, Button, Box } from '@chakra-ui/react';
>>>>>>> a9cc904940441bfa63d60ac3774fb7f299d81904
import { PaginationItem } from './PaginationItem';

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </HStack>
    </HStack>
  );
}
