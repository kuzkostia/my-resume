import { Projects } from 'components/Projects/Projects';
import css from './MainPart.module.css';

export const MainPart = ({ projects }) => {
  return (
    <div>
      <div className={css.section}>
        <h1 className={css.title}>Kuz Kostia</h1>
        <h2 className={css.position}>Fullstack Developer</h2>
        <h2 className={css.summary}>Summary</h2>
      </div>
      <div className={css.section}>
        <h2 className={css.projects}>Projects</h2>
        <ul>
          {projects.map(({ id, link, text }) => (
            <Projects key={id} text={text} link={link} />
          ))}
        </ul>
      </div>
    </div>
  );
};
