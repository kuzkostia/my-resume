import css from './Projects.module.css';

export const Projects = ({ text, link }) => {
  return (
    <li className={css.project}>
      <a className={css.link} href={link}>
        {text}
      </a>
    </li>
  );
};
