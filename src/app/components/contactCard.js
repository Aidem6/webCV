import styles from '../page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

export function ContactCard() {
  return (
    <div>
      <h2 className={styles.secondaryTitle}>
        Contact
      </h2>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon icon={faPhone} size="sm" />
          <a href='tel:+48519115703' className={styles.contactLink}>+48 519 115 703</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href='mailto:adam.tomczyk99@gmail.com' className={styles.contactLink}>adam.tomczyk99@gmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedinIn} />
          <a target="_blank" href='https://www.linkedin.com/in/tomczyk99' className={styles.contactLink}>linkedin.com/in/tomczyk99</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          <a target="_blank" href='https://goo.gl/maps/kkLq3YoeeTwED9av9' className={styles.contactLink}>Amsterdam (in September)</a>
        </li>
      </ul>
    </div>
  );
}