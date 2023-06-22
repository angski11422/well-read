import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';


import styles from '../styles/Home.module.scss';
import Hero from '../components/homepage/hero';
import FeaturedClubs from '../components/homepage/featured-clubs';
import SideNav from '../components/homepage/side-nav';



export default function Home() {
  const [clubs, setClubs] = useState([])

  useEffect(() => {
    fetch('http://localhost:5555/bookclubs')
    .then(r => r.json())
    .then(clubs => setClubs(clubs))
  }, [])


  return (
    <Fragment>
      <Head>
        <title>Well Read</title>
        <meta name="description" content="A place to find a book club with like-minded readers."/>
      </Head>
      <main className={styles.grid}>
        <Hero />
        <SideNav />
        <FeaturedClubs clubs={clubs}/>
      </main>
    </Fragment>
  )
}


