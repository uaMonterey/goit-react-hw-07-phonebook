import s from './ContactList.module.css';

const ContactList = ({ allContacts, onContactDelete }) => {
  //!!!
  console.log(allContacts);

  return (
    <ul className={s.list}>
      {allContacts.map(({ name, id, number }) => (
        <li className={s.item} key={id}>
          <div className={s.wrap}>
            <span className={s.name}>
              {name} : {number}
            </span>
            <button
              className={s.button}
              onClick={() => onContactDelete(id)}
              type="button"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
