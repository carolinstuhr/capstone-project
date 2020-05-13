const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors({ origin: true }));
app.use(bodyParser.json({ extended: true }));

const serviceAccount = require("./serviceAccountKey.json");
const firebaseConfig = {
  apiKey: "AIzaSyAsgcdIQljUwAmIJZWnQNNZY-gQsMCv020",
  authDomain: "get-cooking.firebaseapp.com",
  databaseURL: "https://get-cooking.firebaseio.com",
  projectId: "get-cooking",
  storageBucket: "get-cooking.appspot.com",
  messagingSenderId: "615349615726",
  appId: "1:615349615726:web:19a59828e9428a451cba7f",
  credential: admin.credential.cert(serviceAccount),
};

admin.initializeApp(firebaseConfig);
const db = admin.firestore();

app.get("/recipes", (req, res) => {
  db.collection("recipes")
    .get()
    .then((data) => {
      let recipes = [];
      data.forEach((doc) => {
        recipes.push(doc.data());
      });
      return res.json(recipes);
    })
    .catch((err) => console.error(err));
});

// app.get("/recipe/:id", (req, res) => {
//   db.collection("recipes")
//     .getById(req.params.id)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => console.error(err));
// });

app.post("/create", (req, res) => {
  db.collection("recipes")
    .add(JSON.parse(req.body))
    .then((doc) => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: `something went wrong` });
      console.error(err);
    });
});

exports.api = functions.https.onRequest(app);
