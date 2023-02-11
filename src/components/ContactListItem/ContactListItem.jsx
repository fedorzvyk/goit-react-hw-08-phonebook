import { Button } from 'commonStyles/coommonStyles.styled';
import { ContactWrap, Item, ItemName } from './ContactListItem.styled';
import { FaPhoneAlt, FaUserAlt, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
// import { Box } from 'commonStyles/Box';

const ContactListItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <ContactWrap>
        <ItemName>
          <FaUserAlt fill="orange" /> {name}:
        </ItemName>
        <span>
          <FaPhoneAlt fill="orange" /> {number}
        </span>
      </ContactWrap>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <FaTrash /> Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
