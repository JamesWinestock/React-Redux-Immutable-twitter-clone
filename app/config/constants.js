import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBmFXY7RovNl7hKf90OyTgdcXGju1AnqlI",
  authDomain: "jimmywinesreactreduxpractice.firebaseapp.com",
  databaseURL: "https://jimmywinesreactreduxpractice.firebaseio.com",
  storageBucket: "jimmywinesreactreduxpractice.appspot.com",
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
