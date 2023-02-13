
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { collection,
  getFirestore, 
  addDoc, getDocs,
  query, where,
  getCountFromServer
 } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWxgWMLswOdGjGAFaoGRKr_rWfbpSsfAA",
  authDomain: "ruleta-3ef6e.firebaseapp.com",
  projectId: "ruleta-3ef6e",
  storageBucket: "ruleta-3ef6e.appspot.com",
  messagingSenderId: "1059250452572",
  appId: "1:1059250452572:web:e3fc1d264e7ace34224e99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveEmail = (email) => {
  addDoc(collection(db, 'ruleta')  , {email})
}

const q = query(collection(db, 'curso_ingles'))

const v = query(collection(db, 'pack_escolar'))


export const getEmail = () =>{
    const data = getDocs(q)
    return data
}

export const getIngles = async (email) => {
  const query_ = query(q, where ('email', '==', email))
  const ingles = await getCountFromServer(query_)
  const result = ingles.data()
  if (result.count === 0){
    return true
  }else{
    return false
  }

}

export const getEscolar = async (email) => {
  const query_ = query(v,where('email', '==', email))
  const escolar = await getCountFromServer(query_)
  const result = escolar.data()
  if(result.count === 0){
    return true
  }else{
    return false
  }
}