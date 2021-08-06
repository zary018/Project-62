import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAq-T-s3e42g741n-HMDcg8j-urWTHs7eU",
  authDomain: "project-60-c0933.firebaseapp.com",
  databaseURL:'https://project-60-c0933-default-rtdb.firebaseio.com/',
  projectId: "project-60-c0933",
  storageBucket: "project-60-c0933.appspot.com",
  messagingSenderId: "965342363760",
  appId: "1:965342363760:web:d77a14bdc2343a262af4b5"
};



if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()