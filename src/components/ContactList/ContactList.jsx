import React from "react";

const ContactList = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
