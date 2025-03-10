import React from 'react';
import styles from './UserComment.module.css';

function UserComment({ username, comment }) {
    return (
        <div className={styles.userComment}>
            <strong>{username}:</strong>
            <p>{comment}</p>
        </div>
    );
}

export default UserComment;
