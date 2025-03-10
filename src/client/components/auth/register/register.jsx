import React, { useState } from 'react';

import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";

import logoUrl from "/public/master-sai-logo.svg?url";
import styles from "./register.module.css";
import {useNavigate} from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created:', userCredential.user);
            // Navigate to another page or update state
            navigate('/bon-appetit/home')
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={styles.container}>
            <h1>New here?</h1>
            <h2>Let's make an account!</h2>
            <div className={styles.formContainer}>
                <img className={styles.logo} src={logoUrl} alt="Site Logo"/>
                <form onSubmit={handleSignUp}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        id="email"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        id="password"
                    />
                    <p style={{ color: 'red' }}>This is an educational project. DO NOT enter your real credentials</p>
                    <button type="submit">Sign Up</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default SignUp;
