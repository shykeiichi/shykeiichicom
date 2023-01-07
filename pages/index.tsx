import Head from 'next/head'
import styles from '../styles/Home.module.css'
import IconButton from '../src/components/IconButton'
import { ExpandMore } from '@mui/icons-material'
import { useRef } from 'react'

export default function Home() {

  let ref = useRef(null)

  return (
    <>
      <Head>
        <title>shykeiichi</title>
        <meta name="description" content="my own little page on the web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.page}>
        <div className={styles.header}>
          Hello, Traveler
        </div>
        <div className={styles.spacer} />
        <div className={styles.subheader}>
          <div className={styles.text}>
            Welcome to my little side of the internet
          </div>
          <IconButton click={() => ref.current.scrollIntoView({ behavior: 'smooth' })} icon={<ExpandMore />}/>
        </div>
      </div>
      <div className={styles.page} ref={ref}>
        <div className={styles.text}>
          Coming Soon...
        </div>
      </div>
    </>
  )
}
