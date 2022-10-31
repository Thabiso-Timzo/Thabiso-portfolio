import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>
      <div className={styles.container}>
        <h3>Thabiso's mini profile</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>About myself</h3>
          <p>
            We'll I'm an introvert, I always try smiling, even though I am sad. I always challange myself through coding
            and life in general. I spend most of my time coding or practicing maths. I'm person who likes to chill with his
            family and friends. 
          </p>
          <p>
            After high school, I furthered my studies in System Development and Software Engineering. I like upskilling myself
            in the following frameworks and programming languages, React, Node.js, Flask, Javascript, and Python.
          </p>
          <p>
            I like cooking, and Mountain hiking those are some of my hobbies.
          </p>
        </div>
        <div className={styles.aside}>
          <h3>My hobbies</h3>
          <p>Cooking</p>
          <p>Mountain Hiking</p>
          <p>Stretching</p>
          <p>Bowling</p>
          <p>Cycling</p>
          <p>designing</p>
        </div>
        <div className={styles.content}>
        <h3>Why do you want to be a developer at SovTech?</h3>
          <p>
            Besides the fact that 'SovTech' is a software development company. When I did my research about 
            the company, different sources, and employees all say positive things about the company. Weather young or old 
            people treat each other with respect. There's room for improvement and/or growth. That is one of the things I like
            about <span>SovTech</span>. The research i conducted states that there is a great company culture.
          </p>
          <br />
          <p>
            My former employer had an open office plan, from the pictures I saw online i can tell that SovTech has an open office 
            plan. Having everyone working within an open space can be great for turning an office into a productive hub of 
            communication and collaboration. It would be a great learning enviroment surrounding myself with everyone in the office.
          </p> 
        </div>
        <div className={styles.footer}>
          <p>Copyright © {new Date().getFullYear()} Thabiso Hlatshwayo</p>
        </div>
      </div>
    </div>
  )
}
