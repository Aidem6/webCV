'use client'
import styles from '../page.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGooglePlay,
  faAppStoreIos
} from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';

export function InfoChunk(props) {
  return (
    <div className={styles.infoChunk}>
      <div className={styles.additionalInfo}>
        { props.additionalInfo && <p className={styles.p}>{ props.additionalInfo }</p> }
        { props.date && <p className={styles.p}>{ props.date }</p> }
      </div>
      <div className='d-flex' style={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <h3 className={styles.h3}>{ props.h3 }</h3>
        { props.logo &&
          <div className={'rounded overflow-hidden'} style={{minWidth: '64px'}}>
            <Image
              alt={'app logo'}
              src={props.logo}
              width={64}
              height={64}
            />
          </div>
        }
      </div>
      <p className={styles.paragraph}>
        { props.description }
      </p>
      <div style={{display: 'flex'}}>
        { props.appStoreLink &&
          <a target="_blank" href={props.appStoreLink}>
            <Button  variant="primary" className={styles.button}>
              <FontAwesomeIcon size='xl' icon={faAppStoreIos} />
              {'App Store '}
            </Button>
          </a>
        }
        { props.googlePlayLink &&
          <a target="_blank" href={props.googlePlayLink}>
            <Button  variant="primary" className={styles.button}>
              <FontAwesomeIcon size='xl' icon={faGooglePlay} />
              {'Google Play Store '}
            </Button>
          </a>
        }
      </div>
    </div>
  )
}
