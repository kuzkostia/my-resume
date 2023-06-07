import { Container } from './Container/Container';
import { SideBar } from './SideBar/SideBar';
import { MainPart } from './MainPart/MainPart';

import contacts from '../data/contacts.json';
import techskills from '../data/techSkills.json';
import softskills from '../data/softSkills.json';
import projects from '../data/projects.json';
import experience from '../data/experience.json';
import education from '../data/education.json';
import languages from '../data/languages.json';

export const App = () => {
  return (
    <Container>
      <SideBar
        contacts={contacts}
        techskills={techskills}
        softskills={softskills}
        languages={languages}
      />
      <MainPart
        projects={projects}
        experience={experience}
        education={education}
      />
    </Container>
  );
};
