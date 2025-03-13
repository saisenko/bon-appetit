const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());

const cloudinary = require('cloudinary').v2;
const cloudinaryConfig = require('../../cloudinaryConfig.json');
cloudinary.config(cloudinaryConfig);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});


// API requests =====================================================================

app.get("/api/users", async (req, res) => {
    const snapshot = await db.collection("users").get();
    const users = [];
    snapshot.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
    });
    res.json(users);
});

app.get("/api/comments", async (req, res) => {
    const snapshot = await db.collection("comments").get();
    const comments = [];
    snapshot.forEach(doc => {
        comments.push({ id: doc.id, ...doc.data() });
    });
    res.json(comments);
});

app.post("/api/comments", async (req, res) => {
    const newComment = req.body;
    const competitors = ["Bistro Delight", "Gourmet Garden", "Savor Square"];

    const containsCompetitor = competitors.some(competitor =>
        newComment.comment.includes(competitor)
    );

    if (!containsCompetitor) {
        try {
            const docRef = await db.collection("comments").add(newComment);
            res.status(201).json({ id: docRef.id, ...newComment });
        } catch (error) {
            res.status(500).json({ error: "Failed to add comment" });
        }
    } else {
        console.log("competitor mentioned!!!");
    }
});

app.get("/api/menu", async (req, res) => {
    const snapshot = await db.collection("menu").get();
    const menu = [];
    snapshot.forEach(doc => {
        const dishData = doc.data();
        const dishImgUrl = cloudinary.url(`${doc.id}.webp`, {secure: true}).toString();
        menu.push({ id: doc.id, ...dishData, dishImgUrl });
    });
    res.json(menu);
});