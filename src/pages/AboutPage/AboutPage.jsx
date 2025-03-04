import React, { useState } from 'react';
import styles from './AboutPage.module.css';

import Header from '../../components/Header/Header';
import UserComment from '../../components/AboutPage/UserComment/UserComment';

function AboutPage() {
    const [comments, setComments] = useState([
        { username: "User1", comment: "Great food and service!" },
        { username: "User2", comment: "Will definitely come back!" }
    ]);

    const [newComment, setNewComment] = useState({ username: "", comment: "" });

    const addComment = () => {
        setComments([...comments, newComment]);
        setNewComment({ username: "", comment: "" });
    };

    return (
        <div className={styles.aboutPageContainer}>
            <Header pageTitle="About Us"/>
            
            <div className={styles.aboutPage}>
                <h1>About Us</h1>
                <p>Welcome to our restaurant. We strive to provide the best dining experience.</p>

                <div className={styles.commentsSection}>
                    <h2>User Comments</h2>
                    <div className={styles.commentForm}>
                        <input
                            type="text"
                            placeholder="Your username"
                            value={newComment.username}
                            onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
                        />
                        <textarea
                            placeholder="Your comment"
                            value={newComment.comment}
                            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                        />
                        <button onClick={addComment}>Submit</button>
                    </div>
                    <div className={styles.commentsList}>
                        {comments.map((comment, index) => (
                            <UserComment
                                key={index}
                                username={comment.username}
                                comment={comment.comment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
