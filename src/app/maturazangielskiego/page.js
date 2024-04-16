'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../page.module.css';
import '../globals.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGooglePlay,
  faAppStoreIos
} from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';

export default function Docs() {
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

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <Container className='w-100 overflow-hidden' style={{ backgroundColor: '#080808' }} >
      <Row>
        <Col xs={12} xl={6}>
          <Row className="w-100 h-100" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem'}}>
            <h1 style={{color: '#bb86fc', fontWeight: 'bold', fontSize: '5rem'}}>Matura z angielskiego</h1>
            <p style={{fontSize: '1.4rem', lineHeight: '2.4rem', fontWeight: 500}}>W autobusie, na kanapie, gdziekolwiek chcesz - sprawdź się przed maturą za pomocą wygodnej aplikacji.</p>

            <div style={{display: 'flex'}}>
              <a target="_blank" href={'https://apps.apple.com/pl/app/matura-z-angielskiego/id1559243411'}>
                <Button variant="matzangButton" className={`${styles.button} ms-0`} >
                  <FontAwesomeIcon size='xl' icon={faAppStoreIos} />
                  {'App Store '}
                </Button>
              </a>
              <a target="_blank" href={'https://play.google.com/store/apps/details?id=com.korepetycje2&pcampaignid=web_share'}>
                <Button variant="matzangButton" className={styles.button}>
                  <FontAwesomeIcon size='xl' icon={faGooglePlay} />
                  {'Google Play Store '}
                </Button>
              </a>
            </div>
          </Row>
        </Col>
        <Col xs={12} xl={6} className='text-center'>
          <video height="auto" preload="none" autoPlay muted>
            <source src="/English Matura.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  );
}