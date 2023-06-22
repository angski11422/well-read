// individual club info on all club page (limited detail)
// attached to club grid
import Link from 'next/link';
import Image from 'next/image';

import styles from './club-item.module.scss';


export default function ClubItem(props) {
    const { title, image, location, description, id } = props.club;
    const linkPath = `/clubs/${id}`;
    return (
        <li className={styles.club}>
            <Link href={linkPath}>
                <div className={styles.image}>
                    <Image src={image} alt={title} width={300} height={200}/>
                </div>
                <div className={styles.content}>
                    <h4>{title}</h4>
                    <h6>{location}</h6>
                    <p>{description}</p>
                </div>
            </Link>
        </li>
    )
}