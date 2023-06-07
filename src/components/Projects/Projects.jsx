import css from './Projects.module.css';

export const Projects = ({ text, link, tech, github, description }) => {
  return (
    <li className={css.project}>
      <a className={css.project_link} href={link}>
        {text}
      </a>
      <br />
      <a className={css.project_github} href={github}>
        Github link
      </a>
      <p>Technologies: [{tech}]</p>
      <p>Description: {description}</p>
    </li>
  );
};
