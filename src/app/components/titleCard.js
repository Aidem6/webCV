import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../page.module.css';
import { Card } from './card.js';

const renderTitle = title => {
  if (title)
    return (
      <div className={styles.title}>{title}</div>
    );
};

const renderParagraphs = paragraphs => {
  if (paragraphs)
    return paragraphs.map((paragraph, index) => {
      return (
        <p key={index} className={styles.paragraph}>
          {paragraph}
        </p>
      );
    });
};

export const TitleCard = props => {
  return (
    <Col xs={12} className='d-flex flex-column'>
      <Row xs={12} className={styles.cardWrapper}>
        <Card scrollDir={props.scrollDir}>
          {renderTitle(props.title)}
          {renderParagraphs(props.paragraphs)}
        </Card>
      </Row>
    </Col>
  );
};