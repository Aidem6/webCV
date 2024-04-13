'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../page.module.css';
import '../globals.css';
import { ThemeChanger } from '../components/themeChanger';
import { Card } from '../components/card.js';
import { useEffect, useState } from 'react';
import { TitleCard } from '../components/titleCard';

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
    <Container className='w-100 mw-100 overflow-hidden pb-5'>
      <Row>
        <ThemeChanger />
      </Row>
      <Row>
        <TitleCard
          scrollDir={scrollDir}
          title='Docs with everything I know'
          paragraphs={[
            'Docs with everything I know should be a page with a list of things that I had a problem with but researched and posted the path here. Basically a blog.',
            'It should hava a nice search bar that you can access with command+k. A good example wouuld be a "how to delete a certain commit from a git repository" or "how to upload an app to appstore" or even "good techniques on how to build clean code in next.js" (with graphics and all that)',
            'Writing post here are aimed at improving my learning because if I can explain something here I will better understand the topic. Also it may interest future recruters and help me get new exciting jobs. Not mentioning getting more comfortable in writing in English.'
          ]}
        />
      </Row>
    </Container>
  );
}