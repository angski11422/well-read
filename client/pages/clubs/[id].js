import  { Fragment, useEffect, useState } from 'react';
// import Head from 'next/head';

import ClubContent from '../../components/clubs/club-details/club-content'


export default function ClubPage() {
    

    return (
        <Fragment>
            {/* <Head>
                <title>{props..title}</title>
                <meta name="description" content={props.club.description} />
            </Head> */}
            <ClubContent club={club}/>
        </Fragment>
    )
}
