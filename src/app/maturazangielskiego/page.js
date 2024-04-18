'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../page.module.css';
import '../globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGooglePlay,
  faAppStoreIos
} from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';

export default function Docs() {
  return (
    <Container className='w-100 h-100 overflow-hidden' style={{ backgroundColor: '#080808' }} >
      <Row>
        <Col xs={12} xl={6}>
          <Row className="w-100 h-100 mt-3 mt-xl-0" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem'}}>
            <h1 className="display-1" style={{color: '#bb86fc', fontWeight: 'bold'}}>Matura z angielskiego</h1>
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
        <Col xs={12} xl={6} className='text-center mt-3 mt-xl-0' style={{display: 'flex', justifyContent: 'center', height: '100vh'}}>
          <video width="100%" preload="none" autoPlay muted playsInline>
            <source src="/English Matura.webm" type="video/webm" />
            <source src="/English Matura.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  );
}