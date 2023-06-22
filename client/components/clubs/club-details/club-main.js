// book club name and headline
// attached to content comp
import Image from 'next/image';

import styles from './club-main.module.scss';

export default function ClubMain(props) {
    
    return (
        <section className={styles.header}>
            <h1>{props.club_name}</h1>
            <div className={styles.image}>
                <Image src={props.image} alt={props.club_name} width={400} height={300} />
            </div>
        </section>
    )
}