import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {Link} from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";


import logoUrl from '../../../assets/master-sai-logo.svg';
import styles from "./login.module.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in:', userCredential.user);
            // Navigate to another page or update state
            navigate('/bon-appetit/home')
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Welcome back!</h1>
            <h2>We really missed you</h2>
            <div className={styles.formContainer}>
                <img className={styles.logo} src={logoUrl} alt="Site Logo"/>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        id="email"
                    />
                    <label htmlFor="email">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        id="password"
                    />
                    <button type="submit">Login</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
                <p>Don't have an account? <Link to={'/bon-appetit/register'}>Sign Up!</Link></p>
            </div>
        </div>
    );
}

export default Login;