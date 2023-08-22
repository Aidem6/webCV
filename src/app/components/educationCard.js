import styles from '../page.module.css';
import { InfoChunk } from './infoChunk.js';

export function EducationCard() {
  return (
    <div>
      <h2 className={styles.secondaryTitle}>
        Education
      </h2>
      <InfoChunk
        additionalInfo='Poznań University of Technology'
        date='2022 - today'
        h3='Computer science - Masters | Internet of Things'
        description="Currently, I’m in the process of writing my master thesis. I’m researching best algorithms that can determine mobile user context based on accelerometer data."
      />
      <InfoChunk
        additionalInfo='Poznań University of Technology'
        date='2018 - 2022'
        h3='Computer science - Bachelor degree'
        description="I’m proud that for our engineering diploma thesis, I along with my team have received the 2nd degree distinction in the Engineer 4 Science 2022 competition under the patronage of the Polish Section of IEEE."
      />
    </div>
  );
}