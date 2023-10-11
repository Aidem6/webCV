import styles from '../page.module.css';
import { InfoChunk } from './infoChunk.js';
import teaamupLogo from '../assets/teamup.png';
import maturaLogo from '../assets/matura.png';

export function OwnProjects() {
  return (
    <div>
      <h2 className={styles.secondaryTitle}>
        Own Projects
      </h2>
      <InfoChunk
        h3='Matura z Angielskiego (eng. "English final exams")'
        logo={maturaLogo}
        description="This app is tailored specifically for secondary school students to prepare for their final English exams. Creating this app I learned how to publish apps into App Store and Google Play Store. (7.5k downloads)"
        googlePlayLink='https://play.google.com/store/apps/details?id=com.korepetycje2&pcampaignid=web_share'
        appStoreLink="https://apps.apple.com/pl/app/matura-z-angielskiego/id1559243411"
      />
      <InfoChunk
        h3='TeamUp'
        logo={teaamupLogo}
        description="App that is designed to solve my real life problem which is to connect with other people to do sports together. Through this app it’s easy to collect 2 teams to play football or find a sparring partner to play tennis. Developing this app I learned how to use firebase and Google Maps API."
        googlePlayLink='https://play.google.com/store/apps/details?id=com.sportsappAndroid&pcampaignid=web_share'
        appStoreLink="https://apps.apple.com/pl/app/teamup/id1641003931"
      />
    </div>
  );
}