import React, { useContext, useEffect, useState } from 'react';
import styles from './AboutPage.module.css';
import Header from '../../components/Common/Header/Header';
import UserComment from '../../components/AboutPage/UserComment/UserComment';
import { AuthContext } from '../../contexts/authContext';
import axios from 'axios';

function AboutPage() {
    const { currentUser } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ username: "", comment: "" });
    const [displayedComments, setDisplayedComments] = useState([]);
    const MAX_COMMENTS = 5;

    const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

    useEffect(() => {
        axios.get(`${apiEndpoint}/api/comments`)
            .then(response => {
                const allComments = response.data;
                setComments(allComments);
                setDisplayedComments(getRandomComments(allComments, MAX_COMMENTS));
            })
            .catch(error => {
                console.error("Failed to fetch comments:", error);
            });
    }, []);

    const getRandomComments = (allComments, count) => {
        const shuffled = allComments.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const addComment = async () => {
        try {
            const response = await axios.post(`${apiEndpoint}/api/comments`, newComment);
            const updatedComments = [...comments, response.data];
            setComments(updatedComments);
            setDisplayedComments(getRandomComments(updatedComments, MAX_COMMENTS));
            setNewComment({ username: "", comment: "" });
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className={styles.aboutPageContainer}>
            <Header pageTitle="About Us" />

            <div className={styles.aboutPage}>
                <div className={styles.aboutInfo}>
                    <p>Welcome to our restaurant. We strive to provide the best dining experience.</p>
                    <div className={styles.map}>
                        <h2>Find Us</h2>
                        <div id="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.799590283834!2d30.52333037659499!3d50.45003297089999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5edf66b7e3%3A0x367ae1e1f9f17f95!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sua!4v1700000000000!5m2!1sen!2sua"
                                width="600"
                                height="450"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className={styles.commentsSection}>
                    <h2>Leave Us a Comment</h2>
                    {currentUser ? (
                        <div className={styles.commentForm}>
                            <input
                                type="text"
                                placeholder="Your username"
                                value={newComment.username}
                                onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Your comment"
                                value={newComment.comment}
                                onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                            />
                            <button onClick={addComment}>Submit</button>
                            <p>Logged in as: {currentUser.email}</p>
                        </div>
                    ) : (
                        <p>Please log in to leave a comment.</p>
                    )}
                    <div className={styles.commentsDisplay}>
                        <h2>What Others Say About Us</h2>
                        <div className={styles.commentsList}>
                            {displayedComments.map((comment, index) => (
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
        </div>
    );
}

export default AboutPage;
