import css from './Contacts.module.css';

export const Contacts = ({ link, text }) => {
  return (
    <li className={css.contact}>
      <a className={css.link} href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
};
