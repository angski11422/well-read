import  { Fragment } from 'react';
// import Head from 'next/head';

import ClubContent from '../../components/clubs/club-details/club-content'


export default function ClubPage() {
    return (
        <Fragment>
            {/* <Head>
                <title>{props..title}</title>
                <meta name="description" content={props.club.description} />
            </Head> */}
            <ClubContent />
        </Fragment>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:5555/bookclubs')
    const clubs = await res.json()
    return { props: { clubs } }
  }