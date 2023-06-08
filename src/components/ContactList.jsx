import React from 'react';
import PropTypes from 'prop-types';
import { DeleteContacts } from './DeleteContacts';

export const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <div>
      <span>Contacts</span>
      <ul>
        {contacts.map(contact => (
          <DeleteContacts
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
