'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../page.module.css';
import '../globals.css';
import { ThemeChanger } from '../components/themeChanger';
import { Card } from '../components/card.js';
import { useEffect, useState } from 'react';
import { TitleCard } from '../components/titleCard';
import Image from 'next/image';
import japaneseRamenNoodles from '../assets/images/japanese_ramen_noodles.png';

export default function Recipes() {
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
          title='Recipes'
          paragraphs={[
            "Who doesn't love food? I do! I'll try to share some of my favorite recipes here."
          ]}
        />
      </Row>
      <Row>
        <Card scrollDir={scrollDir} button>
          <div className='w-100 d-flex justify-content-center mt-5'>
            <Image src={japaneseRamenNoodles} alt="Japanese Ramen Noodles" />
          </div>
        </Card>
      </Row>
    </Container>
  );
}