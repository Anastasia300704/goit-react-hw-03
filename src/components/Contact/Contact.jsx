import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      <span>{name}: {number}</span>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;