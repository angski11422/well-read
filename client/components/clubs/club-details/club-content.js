// book club details
// attached to slug page
import {Fragment} from 'react';
import ClubMain from './club-main';
import styles from './club-content.module.scss';


export default function ClubContent(props) {
    const { club } = props; 

    return (
        <Fragment>
            <article className={styles.content}>
                <ClubMain club_name={club.club_name} image={club.image} />
                <h4>{club.location}</h4>
                <h5>{club.genre}</h5>
                <p>{club.description}</p>
                <p>{club.meeting_day}</p>
                <p>{club.book_id}</p>
            </article>
            <div className={styles.button}>
                <button>Join Book Club</button>
            </div>
        </Fragment>
    )
}

