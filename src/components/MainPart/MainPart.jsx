import { Education } from 'components/Education/Education';
import { Experience } from 'components/Experience/Experience';
import { Projects } from 'components/Projects/Projects';
import css from './MainPart.module.css';

export const MainPart = ({ projects, experience, education }) => {
  return (
    <div className={css.main}>
      <div className={css.about_me}>
        <h1 className={css.name}>Kostiantyn Kuz</h1>
        <h2 className={css.position}>Fullstack Developer</h2>
      </div>
      <div className={css.mainpart}>
        <h2 className={css.title}>Summary</h2>
        <p className={css.summary}>
          Excellent communication and problem-solving skills, with a strong
          commitment to providing exceptional IT support. Seeking a challenging
          position in a dynamic IT environment where I can utilize my skills and
          contribute to the success of the organization.
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

        <div className={css.experience}>
          <ul className={css.experience_list}>
            {experience.map(({ id, profession, company, time, country }) => (
              <Experience
                key={id}
                profession={profession}
                company={company}
                time={time}
                country={country}
              />
            ))}
          </ul>
        </div>

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
