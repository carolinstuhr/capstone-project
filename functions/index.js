const functions = require("firebase-functions");
const admin = require("firebase-admin");

const firebaseConfig = {
  apiKey: "AIzaSyAsgcdIQljUwAmIJZWnQNNZY-gQsMCv020",
  authDomain: "get-cooking.firebaseapp.com",
  databaseURL: "https://get-cooking.firebaseio.com",
  projectId: "get-cooking",
  storageBucket: "get-cooking.appspot.com",
  messagingSenderId: "615349615726",
  appId: "1:615349615726:web:19a59828e9428a451cba7f",
};

admin.initializeApp(firebaseConfig);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.getRecipes = functions.https.onRequest((req, res) => {
  admin
    .firestore()
    .collection("recipes")
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

exports.createRecipe = functions.https.onRequest((req, res) => {
  const newRecipe = {
    body: req.body.body,
    id: req.body.id,
    title: req.body.title,
    tags: req.body.tags,
    serving: req.body.serving,
    timehour: req.body.timehour,
    timeminutes: req.body.timeminutes,
    image: req.body.image,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    isFavourite: false,
  };
  admin
    .firestore()
    .collection("recipes")
    .add(newRecipe)
    .then((doc) => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: `something went wrong` });
      console.error(err);
    });
});
