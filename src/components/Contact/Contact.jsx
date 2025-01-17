import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <li className={css.contactItem}>
        <div className={css.contactBox}>
          <p className={css.contactName}>
            <IoPersonSharp />
            <span className={css.wrapName}>{name}</span>
          </p>
          <p className={css.contactPhone}>
            <FaPhoneAlt />
            <span className={css.wrapPhone}>{number}</span>
          </p>
        </div>

        <button
          className={css.delContactBtn}
          onClick={() => {
            onDelete(id);
          }}
          type="button"
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
