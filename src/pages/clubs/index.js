import { Fragment } from 'react';
import Head from 'next/head';

import AllClubs from '../../components/clubs/all-clubs';
import {getAllClubs}  from '@/lib/club-util';


export default function AllClubsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>View All Book Clubs</title>
                <meta name="description" content="A list of all book clubs" />
            </Head>
            <AllClubs clubs={props.clubs}/>
        </Fragment>
    )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:5555/bookclubs')
  const clubs = await res.json()
  return { props: { clubs } }
}
 
