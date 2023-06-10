import { Contacts } from 'components/Contacts/Contacts';
import { SoftSkills } from 'components/SoftSkills/SoftSkills';
import { TechSkills } from 'components/TechSkills/TechSkills';
import css from './SideBar.module.css';
import myPhoto from '../../images/myphoto.jpeg';
import { Languages } from 'components/Languages/Languages';

export const SideBar = ({ contacts, techskills, softskills, languages }) => {
  return (
    <aside className={css.sidebar}>
      <img src={myPhoto} alt="Kuz Kostia" className={css.myphoto} />
      <div className={css.section}>
        <h3 className={css.title}>Contacts</h3>
        <ul className={css.contacts_list}>
          {contacts.map(({ id, link, text }) => (
            <Contacts key={id} link={link} text={text} />
          ))}
        </ul>
        <span className={css.city}>Chernivtsi, Ukraine</span>
      </div>

      <div className={css.section}>
        <h3 className={css.title}>Tech Skills</h3>
        <ul>
          {techskills.map(({ id, label }) => (
            <TechSkills key={id} label={label} />
          ))}
        </ul>
      </div>

      <div className={css.section}>
        <h3 className={css.title}>Soft Skills</h3>
        <ul className={css.softskills_list}>
          {softskills.map(({ id, label }) => (
            <SoftSkills key={id} label={label} />
          ))}
        </ul>
      </div>

      <div className={css.section}>
        <h3 className={css.title}>Languages</h3>
        <ul className={css.languages_list}>
          {languages.map(({ id, language }) => (
            <Languages key={id} language={language} />
          ))}
        </ul>
      </div>
    </aside>
  );
};
