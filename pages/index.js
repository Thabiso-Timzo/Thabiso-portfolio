import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Developer from './components/Developer'
import Hobbies from './components/Hobbies'
import Self from './components/Self'

export default function Home() {
  return (
    <div className='page-container'>
      <div className={styles.container}>
        <h3>Thabiso's mini profile</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>About myself</h3>
          <Developer />
        </div>
        <div className={styles.aside}>
          <h3>My hobbies</h3>
          <Hobbies />
        </div>
        <div className={styles.content}>
          <h3>Why do you want to be a developer at SovTech?</h3>
          <Self />
        </div>
        <div className={styles.footer}>
          <p>Copyright © {new Date().getFullYear()} Thabiso Hlatshwayo</p>
        </div>
      </div>
    </div>
  )
}
