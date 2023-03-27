import React, { useState, useEffect } from 'react';
import { oFirestore } from './firebase-config';
import {collection,getDocs} from 'firebase/firestore';
import moment from 'moment';
/*+===================================================================
File: dbtest.js

Summary: Loads collections from fire base ofirestore

Exported Data Structures: DBtest

Exported Functions: DBtest

Contributors:
    Sam Merlin 3/22/2023

===================================================================+*/
export default function DBtest(){
    //these are objects used to pass in the data from the DB function, set is used also get is used
const [PCals, setPCals] = useState([])
const [GCals, setGCals] = useState([])
    //use effect calls the function on page load (render)
    useEffect(()=>{
        getGroups()
    },[])
    //the first function, getGroups, returns the events from PCEvents into the ob ject PCals
    //Objects in PCals will be PCal.data.event_name,  PCal.data.event_timstamp
    //for modifying the timestamp, research react moment with react-calendar conversions, im sure there are sources online
    function getGroups(){
        const groupCollection = collection(oFirestore, 'PCEvents')
        getDocs(groupCollection)
         .then(Response=>{
            const groups = Response.docs.map(doc=>({
            data:doc.data(),
            id:doc.id,
    }))
            console.log(groups)
            setPCals(groups)
    })
        .catch(error => console.log(error.message))
}
    //use effect to call the second database function for the group calendar
useEffect(()=>{
    getGroups2()
},[])
    //the second function, getGroups2, returns the events from GCEvents into the object GCals
    //Objects in GCals will be GCal.data.event_name,  GCal.data.event_timstamp
function getGroups2(){
    const groupCollection = collection(oFirestore, 'GCEvents')
    getDocs(groupCollection)
     .then(Response=>{
        const groups = Response.docs.map(doc=>({
        data:doc.data(),
        id:doc.id,
}))
        console.log(groups)
        setGCals(groups)
})
    .catch(error => console.log(error.message))
}


return(
    <div>
{/* <div>here, i used a .map function to list out every event_name and event_timestamp that exists within the PCal collection in fire base
    the <ul> <li> tags are built in bulleted list format from React, modify this any way you need, just keep in mind what the .map is doing */}
    <ul>
        {PCals.map(PCal=> (
            <li key={PCal.id}>{PCal.data.event_name}&nbsp;{ moment( PCal.data.event_timestamp.seconds * 1000 + PCal.data.event_timestamp.nanoseconds / 1000000 ).format("MMM Do YY, h:mm a")  }
        </li>
        ))}
    </ul>
    <ul>
        {GCals.map(GCal=> (
            <li key={GCal.id}>{GCal.data.event_name}&nbsp;{ moment( GCal.data.event_timestamp.seconds * 1000 + GCal.data.event_timestamp.nanoseconds / 1000000 ).format("MMM Do YY, h:mm a")  }
        </li>
        ))}
    </ul>
</div>
)
}
//GCals