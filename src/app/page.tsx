'use client'
// import Image from 'next/image'
import styles from './page.module.css'
import Typed from 'typed.js';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    <div style={{margin: 'auto', width: '100%', justifyContent: 'center', display: 'flex', marginTop: '5rem'}}>
        <span id="typed" className={styles.typed} />
    </div>
      <div className={styles.wrapper}>

        <div style={{margin: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '10rem'}}>
          <a href="https://github.com/Haeven" style={{textAlign: 'center', color: '#008796', cursor: 'pointer'}}>github.com/Haeven</a>
          <img src="https://github-readme-stats.vercel.app/api?username=Haeven&theme=react&show_icons=true&hide_border=true&count_private=true" alt="me" width={467} height={195} />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=Haeven&theme=react&hide_border=true" alt="me" width={467} height={195} />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Haeven&theme=react&show_icons=true&hide_border=true&layout=compact" alt="me" width={467} height={195} />
        </div>
      </div>
    </>
  )
}
