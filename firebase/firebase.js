import * as firebase from 'firebase';

const firebaseConfig={
    apiKey: 'AIzaSyAuHszDWLDrcEL2VcZC42jUej9ezqQxSv4',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'assistify-f9861',
  storageBucket: 'assistify-f9861.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
}

const app = initializeApp(firebaseConfig);