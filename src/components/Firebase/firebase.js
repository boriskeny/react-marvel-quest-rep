import app from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBWn7QPxl-L1pNh4D3-u7SA7a4nycyQ9tQ",
  authDomain: "marvel-quiz-ae1aa.firebaseapp.com",
  projectId: "marvel-quiz-ae1aa",
  storageBucket: "marvel-quiz-ae1aa.appspot.com",
  messagingSenderId: "380000045486",
  appId: "1:380000045486:web:f1925fc55eabfc8f36603f",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }
  signinUser = (email, pass) =>
    this.auth.signInWithEmailAndPassword(email, pass);

  signupUser = (email, pass) =>
    this.auth.createUserWithEmailAndPassword(email, pass);

  signoutUser = () => this.auth.signOut();
}

export default Firebase;
