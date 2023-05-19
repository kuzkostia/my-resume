import css from './Education.module.css';

export const Education = ({ university, label, time }) => {
  <li className={css.item}>
    <p className={css.university}>{university}</p>
    <p className={css.education}>{label}</p>
    <span className={css.time}>
      {time}
      <span className={css.divider}> |</span> Ukraine
    </span>
  </li>;
};
