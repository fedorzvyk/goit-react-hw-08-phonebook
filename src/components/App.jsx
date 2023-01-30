import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box } from '../commonStyles/Box';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={5}
      maxWidth="500px"
      my={5}
      mx="auto"
      py={6}
      px={4}
      bg="muted"
      border="normal"
      borderRadius="normal"
      as="main"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={5}
        as="section"
      >
        <h1>Phonebook</h1>
        {isLoading && !error && <b>Request in progress...</b>}
        {error && <b>{error}</b>}
        <ContactForm />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={5}
        as="section"
      >
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
}
