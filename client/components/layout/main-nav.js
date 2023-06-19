import Link from 'next/link';


import Logo from './logo';
import styles from './main-nav.module.scss';


export default function MainNav() {
    return (
        <header className={styles.header}>
            <Link href='/' >
                <Logo />
            </Link>
            {/* about us, faq */}
            <div className={styles.usernav}>
                <div className={styles.usernav__iconbox}>
                    <button className={styles.usernav__button}>Sign In</button>
                </div>  
            </div>
        </header> 
    )
}