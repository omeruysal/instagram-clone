import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDbbo3xazzwPtIWhY3z5qPGO2J5oHt0dTY',
  authDomain: 'rn-instagram-clone-f1eaa.firebaseapp.com',
  projectId: 'rn-instagram-clone-f1eaa',
  storageBucket: 'rn-instagram-clone-f1eaa.appspot.com',
  messagingSenderId: '818451283005',
  appId: '1:818451283005:web:42dbe01b56f7e64a0d3e54',
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
