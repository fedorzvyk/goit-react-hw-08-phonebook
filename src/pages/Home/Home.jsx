import { Box } from 'commonStyles/Box';
import { About } from './Home.styled';

export default function Home() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      minHeight="100%"
      display="flex"
    >
      <About>
        Phonebook is a specialized application designed specifically for storing
        and managing phone numbers, featuring a filter option that allows users
        to easily find and retrieve specific contacts. It provides a convenient
        and organized way to keep track of important contacts and their
        associated phone numbers.
      </About>
    </Box>
  );
}
