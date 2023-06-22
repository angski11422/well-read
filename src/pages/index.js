import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';


import styles from '../styles/Home.module.scss';
import Hero from '../components/homepage/hero';
import FeaturedClubs from '../components/homepage/featured-clubs';
import SideNav from '../components/homepage/side-nav';


export default function Home(props) {
  
  return (
    <Fragment>
      <Head>
        <title>Well Read</title>
        <meta name="description" content="A place to find a book club with like-minded readers."/>
      </Head>
      <main className={styles.grid}>
        <Hero />
        <SideNav />
        <FeaturedClubs clubs={props.clubs}/>
      </main>
    </Fragment>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('/api/bookclubs')
  const clubs = await res.json()
  return { props: { clubs } }
}
