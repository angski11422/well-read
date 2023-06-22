
// grid layout for all clubs
// attached to all clubs comp
import ClubItem from './club-item';
import styles from './clubs-grid.module.scss'


export default function ClubsGrid(props) {
    const { clubs } = props;
    

    return (
        <ul className={styles.grid}>
            {clubs.map((club) => (
                <ClubItem key={club.id} club={club}/>
            ))}
        </ul>
    )
}