import { Fragment } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import Hero from '../components/homepage/hero';
import FeaturedClubs from '../components/homepage/featured-clubs';
import SideNav from '../components/homepage/side-nav';

const DUMMY_CLUBS = [
  {
    id: 1, 
    title: 'Fake Club #1', 
    image:'https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80', 
    location: 'Virtual', 
    description: 'Fake club description'
  },
  {
    id: 2, 
    title: 'Fake Club #2', 
    image:'https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80', 
    location: 'Virtual', 
    description: 'Fake club description'
  },
  {
    id: 3, 
    title: 'Fake Club #3', 
    image:'https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80', 
    location: 'Virtual', 
    description: 'Fake club description'
  },
  {
    id: 4, 
    title: 'Fake Club #4', 
    image:'https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80', 
    location: 'Virtual', 
    description: 'Fake club description'
  }
]
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
        <FeaturedClubs clubs={DUMMY_CLUBS}/>
      </main>
    </Fragment>
  )
  
}
