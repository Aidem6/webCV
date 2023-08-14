import styles from '../page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faSquareJs,
  faGitAlt,
  faHtml5,
  faPython
} from '@fortawesome/free-brands-svg-icons';

export function SkillsCard() {
  return (
    <div className={styles.card}>
      <h2 className={styles.secondaryTitle}>
        Skills
      </h2>
      <h3 className={styles.listH3}>Hard skills</h3>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon icon={faReact} />
          <span>React.js</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} />
          <span>React Native</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faSquareJs} />
          <span>Javascript</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faGitAlt} />
          <span>Git</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHtml5} />
          <span>HTML/CSS</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPython} />
          <span>Python</span>
        </li>
      </ul>
      <h3 className={styles.listH3}>Soft skills</h3>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <span>Good communication</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <span>Problem-Solving</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <span>Adaptability</span>
        </li>
      </ul>
      <h3 className={styles.listH3}>Languages</h3>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <span>Polish - native</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <span>English B2/C1</span>
        </li>
      </ul>
    </div>
  );
}