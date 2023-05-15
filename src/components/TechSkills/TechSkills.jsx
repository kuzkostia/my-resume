import css from './TechSkills.module.css';

export const TechSkills = ({ label }) => {
  return (
    <li className={css.techskill}>
      <span className={css.label}>{label}</span>
    </li>
  );
};
