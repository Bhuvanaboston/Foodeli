// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAQsnaAoRouRqU5zkHkfRQRY1Gz8b65640',
  authDomain: 'bhuvana-foodeli.firebaseapp.com',
  projectId: 'bhuvana-foodeli',
  storageBucket: 'bhuvana-foodeli.firebasestorage.app',
  messagingSenderId: '600932869405',
  appId: '1:600932869405:web:c4368717bfcf2e940e6df4',
  measurementId: 'G-GTMQQ3ZC0C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
