// book club details
// attached to slug page
import {Fragment} from 'react';
import ClubMain from './club-main';
import styles from './club-content.module.scss';

const DUMMY_CLUB = {
      id: 1, 
      title: 'Fake Club #1', 
      image:'https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80', 
      location: 'Virtual', 
      description: 'Fake club description',
      meetingDay: 'Last Tuesday of every Month',
      genre: 'Fake Genre',
      currently_reading: 'Book Title and Author and Book Cover'
}
export default function ClubContent() {

    return (
        <Fragment>
            <article className={styles.content}>
                <ClubMain title={DUMMY_CLUB.title} image={DUMMY_CLUB.image} />
                <h4>{DUMMY_CLUB.location}</h4>
                <h5>{DUMMY_CLUB.genre}</h5>
                <p>{DUMMY_CLUB.description}</p>
                <p>{DUMMY_CLUB.meetingDay}</p>
                <p>{DUMMY_CLUB.currently_reading}</p>
            </article>
            <div className={styles.button}>
                <button>Join Book Club</button>
            </div>
        </Fragment>
    )
}