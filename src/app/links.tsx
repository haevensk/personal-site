'use client';
import { animated, useTransition } from '@react-spring/web'
import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './links.module.css'

export default function Links() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<[string,string][]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set([
        ['https://x.com/hvndevs', 'Follow on 𝕏'],
    ]), 300))
    ref.current.push(setTimeout(() => set([
        ['https://x.com/hvndevs', 'Follow on 𝕏'],]), 800))
    }, [])
    ref.current.push(setTimeout(() => set([
        ['me.cv.pdf', 'View CV'],
        ['https://github.com/Haeven', 'View GitHub'],
  ['https://x.com/haduelias', 'Follow on 𝕏'],
  ['mailto:haevendevs@gmail.com?subject=👋%20Let%27s%20Connect!', 'Contact Email'],
  ['sms:+16082082300?body=👋%20Let%27s%20Connect!', 'Contact SMS'],
]), 8000))
// ref.current.push(setTimeout(() => set([
//     ['me.cv.pdf', 'View CV'],
//     ['https://github.com/Haeven', 'View GitHub'],
// ['https://x.com/hvndevs', 'Follow on 𝕏'],
// ['mailto:haevendevs@gmail.com?subject=👋%20Let%27s%20Connect!', 'Contact Email'],
// ['sms:+16082082300?body=👋%20Let%27s%20Connect!', 'Contact SMS'],
// ]), 500))
  
  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight, textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <a target='0' href={`/${item[0]}`} style={{textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>{item[1]}</a>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
