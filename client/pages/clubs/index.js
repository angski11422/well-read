import { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';

import AllClubs from '../../components/clubs/all-clubs';



export default function AllClubsPage() {
    const [clubs, setClubs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5555/bookclubs')
        .then(r => r.json())
        .then(clubs => setClubs(clubs))
    }, [])


    return (
        <Fragment>
            <Head>
                <title>View All Book Clubs</title>
                <meta name="description" content="A list of all book clubs" />
            </Head>
            <AllClubs clubs={clubs}/>
        </Fragment>
    )
}

 
