import Link from 'next/link';
import Image from 'next/image';

import Logo from './logo';
import styles from './main-nav.module.scss';


export default function MainNav() {
    return (
        <header className={styles.header}>
            <Link href='/' >
                <Logo />
            </Link>
            <form action="/" className={styles.search}>
                <input type="text" className={styles.search__input} placeholder="Search" />
                {/* <button className={styles.search__button}>
                    <Image src={"client/public/images/site/sprites/magnifying-glass.svg"} alt='search' className={styles.search__icon} width={25} height={25}/>
                </button> */}
            </form>
            <div className={styles.usernav}>
                <div className={styles.usernav__iconbox}>
                    <button className={styles.usernav__button}>Sign In</button>
                </div>  
            </div>
        </header> 
    )
}