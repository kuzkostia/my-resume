import css from './Projects.module.css';

export const Projects = ({ text, link, tech, github, description }) => {
  return (
    <li className={css.project}>
      <a className={css.project_link} href={link}>
        {text}
      </a>
      <a className={css.project_github} href={github}>
        , github
      </a>
      <p>Description: {description}</p>
    </li>
  );
};
