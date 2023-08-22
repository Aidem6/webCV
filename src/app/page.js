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
import { ThemeChanger } from './components/themeChanger';
import { useTheme } from 'next-themes'
import { Card } from './components/card.js';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <Container className='w-100 mw-100 overflow-hidden pb-5'>
      <Row>
        <ThemeChanger />
      </Row>
      <Row>
        <Col xs={12} md={8} className='d-flex flex-column'>
          <Row xs={12} className={styles.cardWrapper}>
            <Card scrollDir={scrollDir}>
              <div style={{position: 'relative'}}>
                <div className={styles.imageWrapper}>
                  <Image src={myFace} fill alt='my face' />
                </div>
                <div className={styles.title}>Adam Tomczyk</div>
              </div>
            </Card>
          </Row>
          <Row xs={12} className={styles.cardWrapper}>
            <Card scrollDir={scrollDir}>
              <div>
                <h2 className={styles.secondaryTitle}>
                  About me
                </h2>
                <p className={styles.paragraph}>
                  Hi! I’m a React Developer passionate about creating new web apps that are beautiful and useful. I have more than 2 years of experience in React.js. I have also used React Native technology to create multiple mobile apps. I’m moving to Amsterdam to further develop my skills and jump into new exciting projects.
                </p>
              </div>
            </Card>
          </Row>
          <Row xs={12} className={[styles.cardWrapper, 'flex-grow-1']}>
            <Card scrollDir={scrollDir}>
              <WorkExperienceCard />
            </Card>
          </Row>
        </Col>
        <Col xs={12} md={4} className='d-flex flex-column'>
          <Row xs={12} className={styles.cardWrapper}>
            <Card scrollDir={scrollDir}>
              <ContactCard />
            </Card>
          </Row>
          <Row xs={12} className={[styles.cardWrapper, 'flex-grow-1']}>
            <Card scrollDir={scrollDir}>
              <SkillsCard />
            </Card>
          </Row>
          <Row xs={12} className={styles.cardWrapper}>
            <Card scrollDir={scrollDir} button>
              <a href={'/Adam_Tomczyk_CV.pdf'} download={'Adam_Tomczyk_CV.pdf'} className='p-0'>
                <Button variant="primary" className={`${styles.card} ${styles.accentBacground}`}>
                  <h2 className={styles.secondaryTitle}>
                    {'Download CV '}
                    <FontAwesomeIcon icon={faDownload} style={{marginLeft: '5px'}} />
                  </h2>
                </Button>
              </a>
            </Card>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Row xs={12} className={[styles.cardWrapper, 'h-100']}>
            <Card scrollDir={scrollDir}>
              <EducationCard />
            </Card>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row xs={12} className={[styles.cardWrapper, 'h-100']}>
            <Card scrollDir={scrollDir}>
              <OwnProjects />
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
