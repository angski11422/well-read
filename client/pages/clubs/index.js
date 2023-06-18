import { Fragment } from 'react';
import Head from 'next/head';

import AllClubs from '../../components/clubs/all-clubs';

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


export default function AllClubsPage() {
    
    return (
        <Fragment>
            <Head>
                <title>View All Book Clubs</title>
                <meta name="description" content="A list of all book clubs" />
            </Head>
            <AllClubs clubs={DUMMY_CLUBS}/>
        </Fragment>
    )
}