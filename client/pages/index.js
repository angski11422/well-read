import { Fragment } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import Hero from '../components/homepage/hero';
import FeaturedClubs from '../components/homepage/featured-clubs';
import SideNav from '../components/homepage/side-nav';


export default function Home() {
  
  return (
    <Fragment>
      <Head>
        <title>Well Read</title>
        <meta name="description" content="A place to find a book club with like-minded readers."/>
      </Head>
      <main className={styles.grid}>
        <Hero />
        <SideNav />
        <FeaturedClubs />
      </main>
    </Fragment>
  )
  
}
