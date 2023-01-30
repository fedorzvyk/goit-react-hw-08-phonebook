import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';
import { selectvisibleContacts } from 'redux/selectors';

const ContactList = () => {
  // console.log('object');
  const contacts = useSelector(selectvisibleContacts);

  return (
    <List>
      {contacts.map(({ id, phone, name }) => (
        <ContactListItem key={id} id={id} phone={phone} name={name} />
      ))}
    </List>
  );
};

export default ContactList;
