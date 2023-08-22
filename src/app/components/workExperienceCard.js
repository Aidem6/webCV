import styles from '../page.module.css';
import { InfoChunk } from './infoChunk.js';

export function WorkExperienceCard() {
  return (
    <div>
      <h2 className={styles.secondaryTitle}>
        Work experience
      </h2>
      <InfoChunk
        additionalInfo='Programmer Analyst'
        date='2021 - today'
        h3='Poznan Supercomputing and Networking Center'
        description="As a Programmer Analyst at PSNC, I initially joined the Quantum Computing team. Based on the knowledge and insights gained from this role, I along with other 2 students working there, decided to base our bachelor's thesis on quantum computing advancements. Subsequently, I transitioned to the Frontend Team, where I focused on frontend development. Currently, I continue to actively engage in challenging projects, further developing my skillset in React and related technologies."
      />
      <InfoChunk
        additionalInfo='React Native Developer'
        date='2019 - 2020'
        h3='Sysmo'
        description="During my time as a React Native developer, I took on the responsibility of creating innovative mobile apps using React Native technology. Moreover, I actively collaborated with diverse teams of programmers to enhance existing applications. This involvement allowed me to learn how to collaborate effectively within a team and aided me in producing high-quality code"
      />
    </div>
  );
}