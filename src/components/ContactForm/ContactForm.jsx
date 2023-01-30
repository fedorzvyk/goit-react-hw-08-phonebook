import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { Form } from './ContactForm.styled';
import { Input, Label, Button } from 'commonStyles/coommonStyles.styled';
import { FaPhoneSquareAlt } from 'react-icons/fa';
// import { nanoid } from '@reduxjs/toolkit';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  //  console.log('first')
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;

    const repeatingName = contacts.items.find(contact => contact.name === name);

    if (repeatingName) {
      alert(`${name} is already in contacts.`);
      return null;
    }
    const newContact = {
      // id: '',
      name,
      phone,
    };

    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          // value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          // value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">
        <FaPhoneSquareAlt /> Add contact
      </Button>
    </Form>
  );
}
