'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './page.module.css';
import './globals.css';
import { EducationCard } from './components/educationCard.js';
import { OwnProjects } from './components/ownProjects.js';
import { SkillsCard } from './components/skillsCard.js';
import { ContactCard } from './components/contactCard.js';
import { WorkExperienceCard } from './components/workExperienceCard.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import myFace from './assets/cvface.png';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <Container className='w-100 mw-100'>
      <Row>
        <Col xs={12} md={8} className='d-flex flex-column'>
          <Row xs={12} className={styles.cardWrapper}>
            <div className={`${styles.card}`} style={{position: 'relative'}}>
              <div className={styles.title}>Adam Tomczyk</div>
              <div className={styles.imageWrapper}>
                <Image src={myFace} fill />
              </div>
            </div>
          </Row>
          <Row xs={12} className={styles.cardWrapper}>
            <div className={styles.card}>
              <h2 className={styles.secondaryTitle}>
                About me
              </h2>
              <p className={styles.paragraph}>
                Hi! I’m a React Developer passionate about creating new web apps that are beautiful and useful. I have more than 2 years of experience in React.js. I have also used React Native technology to create multiple mobile apps. I’m moving to Amsterdam to further develop my skills and jump into new exciting projects.
              </p>
            </div>
          </Row>
          <Row xs={12} className={[styles.cardWrapper, 'flex-grow-1']}>
            <WorkExperienceCard />
          </Row>
        </Col>
        <Col xs={12} md={4} className='d-flex flex-column'>
          <Row xs={12} className={styles.cardWrapper}>
            <ContactCard />
          </Row>
          <Row xs={12} className={[styles.cardWrapper, 'flex-grow-1']}>
            <SkillsCard />
          </Row>
          <Row xs={12} className={styles.cardWrapper}>
            <a href={'/Adam_Tomczyk_CV.pdf'} download={'Adam_Tomczyk_CV.pdf'} className='p-0'>
              <Button variant="primary" className={`${styles.card} ${styles.accentBacground}`}>
                <h2 className={styles.secondaryTitle}>
                  {'Download CV '}
                  <FontAwesomeIcon icon={faDownload} style={{marginLeft: '5px'}} />
                </h2>
              </Button>
            </a>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Row xs={12} className={[styles.cardWrapper, 'h-100']}>
            <EducationCard />
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row xs={12} className={[styles.cardWrapper, 'h-100']}>
            <OwnProjects />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
