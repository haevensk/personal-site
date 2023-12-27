'use client'
// import Image from 'next/image'
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
    <div className={styles.wrapper}>
        <span id="typed" className={styles.typed} />
        <a>github.com/Haeven</a>
    </div>
  )
}

