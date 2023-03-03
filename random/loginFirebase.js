// Initialize Firebase
var firebaseConfig = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  projectId: "<PROJECT_ID>",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
  appId: "<APP_ID>",
  measurementId: "<MEASUREMENT_ID>"
};
firebase.initializeApp(firebaseConfig);

// Sign in with email and password
const email = "<EMAIL>";
const password = "<PASSWORD>";
firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(function(result) {
    console.log("Login Successful", result);
  })
  .catch(function(error) {
    console.error("Login Failed", error);
  });
