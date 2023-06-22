


import { useEffect } from "react"
import EditProfile from "./edit-profile"
import styles from './user-profile.module.scss'

export default function UserProfile() {
    const [editProfile, setEditProfile] = useEffect(false)

    function handleEditProfile() {
        setEditProfile((prevState) => !prevState)
    }

    return(
        <section className={styles.profile}>
            <h1>Your Profile</h1>
            <div className={styles.photo}>
                <p>Image tag</p>
            </div>
            <div className={styles.details}>
                <p>Name:</p>
                <p>Birthday:</p>
                <p>Member Since:</p>
            </div>
            <div className={styles.action}>
                <button onClick={handleEditProfile}>Edit profile</button>
            </div>
            {editProfile ? <EditProfile /> : ''}
        </section>
    )
}