import css from './Languages.module.css';

export const Languages = ({ language }) => {
  return (
    <li className={css.language}>
      <span className={css.label}>{language}</span>
    </li>
  );
};
