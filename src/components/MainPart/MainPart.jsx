import { Education } from 'components/Education/Education';
import { Experience } from 'components/Experience/Experience';
import { Projects } from 'components/Projects/Projects';
import css from './MainPart.module.css';

export const MainPart = ({ projects, experience, education}) => {
  return (
    <div className={css.main}>
      <div className={css.about_me}>
        <h1 className={css.name}>Kostiantyn Kuz</h1>
        <h2 className={css.position}>Fullstack Developer</h2>
      </div>
      <div className={css.mainpart}>
        <h2 className={css.summary_title}>Summary</h2>
        <p className={css.summary}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          quas odit, repudiandae veritatis pariatur ipsa similique porro
          necessitatibus omnis tenetur nobis quam facere nam optio consequatur
          laborum aut aliquid molestiae?
        </p>
        <h2 className={css.projects}>Projects</h2>
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
      </div>
      <div className={css.section}>
        <h3 className={css.title}>Work Experience</h3>
        <ul>
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

      <div className={css.section}>
        <h3 className={css.title}>Education</h3>
        <ul>
          {education.map(({ id, university, label, time}) => (
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
  );
};
