import PropTypes from 'prop-types';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
