import * as Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAGV33WW3dR1z5yE-eTdkw33J_IhbJAEMo",
  authDomain: "plantapp-18642.firebaseapp.com",
  databaseURL: "https://plantapp-18642.firebaseio.com",
  projectId: "plantapp-18642",
  storageBucket: "plantapp-18642.appspot.com",
  messagingSenderId: "822349028340",
  appId: "1:822349028340:web:704b787caafa7413ff37a1",
  measurementId: "G-T5FXZQG9N2"
};
  
let firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;

