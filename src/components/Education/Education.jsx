import css from './Education.module.css';

export const Education = ({ university, label, time, link }) => {
  return (
    <li className={css.item}>
      <p className={css.university}>{university}</p>
      <a href={link} className={css.education} target="_blank" rel="noreferrer">
        {label}
      </a>
      <br />
      <span className={css.time}>
        {time}
        <span className={css.divider}> |</span> Ukraine
      </span>
    </li>
  );
};
