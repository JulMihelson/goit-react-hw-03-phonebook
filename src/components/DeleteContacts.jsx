import React from 'react';
import PropTypes from 'prop-types';
export const DeleteContacts = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};
DeleteContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
