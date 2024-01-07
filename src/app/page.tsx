'use client'
import styles from './page.module.css'
import Typed from 'typed.js';
import { useEffect, useState } from 'react';

export default function Home() {
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    if (!initialLoad)
      var typed = new Typed('#typed', {
        strings: ['Engineer. Designer. Leader.', 'Student. Dreamer. Mentor.', 'Brother. Husband. Friend.'],
        typeSpeed: 90
      });

      setInitialLoad(true);
  }, [setInitialLoad, initialLoad]);

  return (
    <>
    <div className={styles.typedContainer} style={{margin: 'auto', width: '100%', justifyContent: 'center', display: 'flex', marginTop: '5rem'}}>
      <span>
        <span id="typed" className={styles.typed} />
      </span>
    </div>
      <div className={styles.wrapper}>

        <div style={{margin: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '7rem'}}>
          <a target='0' href="/me.cv.pdf" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>View my CV</a>
          <a target='0' href="https://github.com/Haeven" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>View my GitHub</a>
          <a target='0' href="https://x.com/hvndevs" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>Follow my 𝕏</a>
          <a target='0' href="mailto:haevendevs@gmail.com?subject=👋%20Let%27s%20Connect!" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>Contact Email</a>
          <a target='0' href="sms:+16082082300?body=👋%20Let%27s%20Connect!" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>Contact SMS</a>
          {/* <Image className={styles.githubStat} sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="/stats1.svg" alt="me" width="467" height="195"/> */}
          {/* <Image className={styles.githubStat} sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="/stats2.svg" alt="me" width="467" height="195"/> */}
          {/* <Image className={styles.githubStat} sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="/stats3.svg" alt="me" width="467" height="195"/> */}
          {/* <a href="https://github.com/Haeven" style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>subhire.app</a> */}
          {/* <Image sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="https://github-readme-streak-stats.herokuapp.com/?user=Haeven&theme=react&hide_border=true" alt="me" width="467" height="195"/>*/}
          {/* <Image sizes={'(max-width: 768px) 100vw, auto (max-width: 1200px) 467px, 195px'} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Haeven&theme=react&show_icons=true&hide_border=true&layout=compact" alt="me" width="467" height="195"/>  */}
        </div>
      </div>
    </>
  )
}
