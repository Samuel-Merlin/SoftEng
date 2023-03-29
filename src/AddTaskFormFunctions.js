// import React, { useState } from 'react';
// import { oFirestore } from './firebase-config';
// import {collection,getDocs,addDoc} from 'firebase/firestore';



// const navigate = useNavigate();
// const [evName, setevName] = useState([])
// const [evTimestamp, setevTimestamp] = useState([])

// async function handleSubmit(){
//   const oMessage = document.querySelector(".Message");
//   if(evTimestamp == "" || evName == "") {
//       oMessage.innerHTML = "Invalid input. Please complete all form elements."
//   } 
//   try{
//   const newDocRef = await addDoc(collection(oFirestore, 'PCEvents'),{
//       event_name: evName,
//       event_timestamp: new Date(evTimestamp)
//   });
//     document.querySelector(".dateNtime").value = "";
//     document.querySelector(".inputText").value = "";
//     oMessage.innerHTML = "Succesfully added event."
//   }
//   catch(error) {
//       console.log(error);
//   };
// }