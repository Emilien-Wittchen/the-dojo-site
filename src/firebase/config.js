import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD5uzKJy6BC2et4oq4OSBewSFYm3D7x2c8',
  authDomain: 'thedojosite-d727e.firebaseapp.com',
  projectId: 'thedojosite-d727e',
  storageBucket: 'thedojosite-d727e.appspot.com',
  messagingSenderId: '294175003503',
  appId: '1:294175003503:web:314f97564285667f438e9a',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, projectAuth, projectStorage, timestamp};
