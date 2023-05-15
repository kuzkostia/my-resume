import { Container } from './Container/Container';
import { SideBar } from './SideBar/SideBar';
import contacts from '../data/contacts.json';
import techskills from '../data/techSkills.json';
import softskills from '../data/softSkills.json';

export const App = () => {
  return (
    <Container>
      <SideBar
        contacts={contacts}
        techskills={techskills}
        softskills={softskills}
      />
    </Container>
  );
};
