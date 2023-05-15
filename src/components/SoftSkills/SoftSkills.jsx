import css from './SoftSkills.module.css';

export const SoftSkills = ({ label }) => {
  return (
    <li className={css.softskill}>
      <span className={css.label}>{label}</span>
    </li>
  );
};
