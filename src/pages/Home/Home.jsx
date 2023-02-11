import { Box } from 'commonStyles/Box';
import { Tiitle } from './Home.styled';

export default function Home() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      minHeight="100%"
      display="flex"
    >
      <Tiitle>
        Welcome to the Phonebook
        <span role="img" aria-label="Greeting icon"></span>
      </Tiitle>
    </Box>
  );
}
