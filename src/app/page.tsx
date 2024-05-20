'use client'
import styles from './page.module.css'
import Typed from 'typed.js';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import { useEffect, useState } from 'react';
import { ReactImageCarouselViewer } from "react-image-carousel-viewer";
import Image from 'next/image';
import { animated } from '@react-spring/web'
import TextTransition from './TextTransition';
import Links from './links';
import 'react-slideshow-image/dist/styles.css'

export default function Home() {
  const [initialLoad, setInitialLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!initialLoad)
      var typed = new Typed('#typed', {
        strings: ['Engineer. Designer. Leader.', 'Student. Dreamer. Mentor.', 'Brother. Husband. Friend.'],
        typeSpeed: 90
      });

      setInitialLoad(true);
  }, [setInitialLoad, initialLoad]);
  const images = [{src: '/1.png'},
    {src: '/2.png'},
    {src: '/3.png'},
    {src: '/4.png'},
    {src: '/5.png'},
    {src: '/6.png'},
    {src: '/7.png'},
    {src: '/8.png'},
    {src: '/9.png'},
    {src: '/0.png'},
    {src: '/1.png'}
  ];
  return (
    <>
    <div className={styles.typedContainer} style={{margin: 'auto', width: '100%', justifyContent: 'center', display: 'flex', marginTop: '5rem'}}>
      <span>
        <span id="typed" className={styles.typed} />
      </span>
    </div>
      <div className={styles.wrapper}>
        <div style={{margin: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem'}}>
          {/* <Image src="/profile-pic.png" sizes="(max-width: 2000px) 10vw, 10vw" alt="me" width={312} height={312} style={{borderRadius: '300px', marginBottom: '3rem'}}/> */}
          <a target='0' href="https://github.com/Haeven" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>View GitHub</a><br></br>
          <a target='0' href="https://x.com/hvndevs" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>Follow on 𝕏</a><br></br>
          <a target='0' href="mailto:haevendevs@gmail.com?subject=👋%20Let%27s%20Connect!" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>Contact Email</a><br></br>
          <a target='0' href="sms:+16082082300?body=👋%20Let%27s%20Connect!" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>Contact SMS</a><br></br>
        <p onClick={() => setIsOpen(true)} style={{ cursor: 'pointer',marginLeft: 'auto', marginRight: 'auto', }}>view recent work</p>
        </div>

                {/* {loopArray.map((i, indx)=> 
                <div style={{ 'backgroundImage': `url(/${indx}.png)`, minHeight: '100%', backgroundRepeat: 'no-repeat' }}></div>
                )} */}
                        <ReactImageCarouselViewer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          images={images}
          startIndex={index}
        />
        {/* <Slide> */}
        {/* </Slide> */}
          {/* <div style={{display: 'flex'}}>
            <Image src="/1.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/2.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/3.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/4.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/5.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/6.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/7.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/8.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/9.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/10.png" width={500} height={500} alt="portfolio pic"></Image>
            <Image src="/11.png" width={500} height={500} alt="portfolio pic"></Image>
          </div> */}
        {/* <animated.div style={{margin: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem', justifyContent: 'center', textAlign: 'center'}}> */}
          {/* <Links></Links> */}
            {/* <a target='0' href="/me.cv.pdf" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>View CV</a><br></br>
          {/* <Image className={styles.githubStat} sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="/stats1.svg" alt="me" width="467" height="195"/> */}
          {/* <Image className={styles.githubStat} sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="/stats2.svg" alt="me" width="467" height="195"/> */}
          {/* <Image className={styles.githubStat} sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="/stats3.svg" alt="me" width="467" height="195"/> */}
          {/* <a href="https://github.com/Haeven" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>subhire.app</a> */}
          {/* <Image sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="https://github-readme-streak-stats.herokuapp.com/?user=Haeven&theme=react&hide_border=true" alt="me" width="467" height="195"/>*/}
          {/* <Image sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Haeven&theme=react&show_icons=true&hide_border=true&layout=compact" alt="me" width="467" height="195"/>  */}
        {/* </animated.div> */}
        
      </div>
    </>
  )
}
