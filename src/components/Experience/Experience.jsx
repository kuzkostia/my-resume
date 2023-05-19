import css from './Experience.module.css';

export const Experience = ({ profession, company, time, country }) => {
  return (
    <li className={css.item}>
      <h4 className={css.title}>
        {profession} <span className={css.company}>{company}</span>
      </h4>
      <span className={css.time}>
        {time}
        <span className={css.divider}> |</span> {country}
      </span>
    </li>
  );
};
