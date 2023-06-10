import { Education } from 'components/Education/Education';
import { Projects } from 'components/Projects/Projects';
import css from './MainPart.module.css';

export const MainPart = ({ projects, education }) => {
  return (
    <div className={css.main}>
      <div className={css.about_me}>
        <h1 className={css.name}>Kostiantyn Kuz</h1>
        <h2 className={css.position}>Fullstack Developer</h2>
      </div>
      <div className={css.mainpart}>
        <h2 className={css.title}>Summary</h2>
        <p className={css.summary}>
          I'm a Front-end Developer with knowledge HTML5, SASS, JS, React and
          other technologies. I'm looking for an interesting job and want to be
          in a good team to improve my skills and use them for interesting
          tasks. I am a fast learner, responsible, ready for hard tasks.I am
          open to feedback, share knowledge and ideas and resolve conflicts
          constructively.
        </p>

        <h2 className={css.title}>Project Experience</h2>
        <ol className={css.projects_list}>
          {projects.map(({ id, link, text, tech, github, description }) => (
            <Projects
              key={id}
              text={text}
              link={link}
              tech={tech}
              github={github}
              description={description}
            />
          ))}
        </ol>

        <div className={css.education}>
          <h3 className={css.title}>Education</h3>
          <ul className={css.education__list}>
            {education.map(({ id, university, label, time }) => (
              <Education
                key={id}
                university={university}
                label={label}
                time={time}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
