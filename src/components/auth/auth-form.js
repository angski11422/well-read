
import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import styles from './auth-form.module.scss';


export default function AuthForm() {
    const usernameInput = useRef();
    const passwordInput = useRef();
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    async function handleSignIn(e) {
        e.preventDefault();

        const enteredUsername = usernameInput.current.value;
        const enteredPassword = passwordInput.current.value;

        if (isLogin) {
            await signIn('credentials', {
              redirect: false,
              username: enteredUsername,
              password: enteredPassword,
            });
            router.replace('/profile');
        }
    }

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