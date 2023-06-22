


import styles from './auth-form.module.scss';


export default function AuthForm() {


    return (
        <section className={styles.form}>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div className={styles.control}>
                    <label htmlFor='username'>Username</label>
                    <input type='text'id='username' required ref={usernameInput}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='text'id='password' required ref={passwordInput}/>
                </div>
                <div className={styles.action}>
                    <button>Log In</button>
                </div>
            </form>
        </section>
    )
}