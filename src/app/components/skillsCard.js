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
          <a>React.js</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} />
          <a>React Native</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faSquareJs} />
          <a>Javascript</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGitAlt} />
          <a>Git</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faHtml5} />
          <a>HTML/CSS</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faPython} />
          <a>Python</a>
        </li>
      </ul>
      <h3 className={styles.listH3}>Soft skills</h3>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <a>Good communication</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <a>Problem-Solving</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <a>Adaptability</a>
        </li>
      </ul>
      <h3 className={styles.listH3}>Languages</h3>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <a>Polish - native</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircle} size='2xs' />
          <a>English B2/C1</a>
        </li>
      </ul>
    </div>
  );
}