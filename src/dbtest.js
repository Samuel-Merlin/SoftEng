import React, { useState, useEffect } from 'react';
import { oFirestore } from './firebase-config';
import {collection,getDocs} from 'firebase/firestore';
import moment from 'moment';
// const[fuel,setFuel]=useState([])
// const abPath=collection(oFirestore,'fuel')
// useEffect(()=>{
//   const DispData=async()=>{
//   const Data = await getDocs(abPath)
//   console.log(Data)
//   setFuel(data.docs.map((val)=>({...val.data(),id:val.id})))
//   }
//   DispData()
// },[])
export default function DBtest(){
const [wkGroups, setwkGroups] = useState([])
    useEffect(()=>{
        getGroups()
    },[])
    function getGroups(){
        const groupCollection = collection(oFirestore, 'PCEvents')
        getDocs(groupCollection)
         .then(Response=>{
            const groups = Response.docs.map(doc=>({
            data:doc.data(),
            id:doc.id,
    }))
            console.log(groups)
            setwkGroups(groups)
    })
        .catch(error => console.log(error.message))
}

return(
<div>
<ul>
{wkGroups.map(wkGroup=> (
  <li key={wkGroup.id}>{wkGroup.data.event_name}&nbsp;{ moment( wkGroup.data.event_timestamp.seconds * 1000 + wkGroup.data.event_timestamp.nanoseconds / 1000000 ).format("MMM Do YY, h:mm a")  }
  </li>
))}
</ul>
</div>
)
}