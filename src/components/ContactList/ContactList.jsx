import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';
import { selectvisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  // console.log('object');
  const contacts = useSelector(selectvisibleContacts);

  return (
    <List>
      {contacts.map(({ id, number, name }) => (
        <ContactListItem key={id} id={id} number={number} name={name} />
      ))}
    </List>
  );
};

export default ContactList;
