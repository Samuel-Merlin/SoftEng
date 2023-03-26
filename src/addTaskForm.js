import React, { useState } from 'react';
import './login.css';
import { oFirestore } from './firebase-config';
import {collection,getDocs,addDoc} from 'firebase/firestore';
import moment from 'moment';
import { NavLink, useNavigate, Link } from 'react-router-dom'

function TaskDesign()
{
  const navigate = useNavigate();
  const [evName, setevName] = useState([])
  const [evTimestamp, setevTimestamp] = useState([])

  async function handleSubmit(){
    try{
    const newDocRef = await addDoc(collection(oFirestore, 'GCEvents'),{
        event_name: evName,
        event_timestamp: new Date(evTimestamp)
    });
    }
    catch(error) {
        console.log(error);
    };
}
return(
  <div className='body'>
            <div className='Header'> MyCalendarTime.com </div>
        <div className='formContainer'>

        <div className='ItemContainer'>
        <div className='Header2'> Add Task Form </div>
        <div className='date'> Select a Date and Time</div>
        <div>
        <input defualtValue='value' className="dateNtime" type="datetime-local" id="add an ID" onChange={(event) => {
                        setevTimestamp(event.target.value);}}></input>
        </div>

        <div className='title'> Title and Description </div>
        <div>
        <input className='inputText'
        defualtValue='value'
          placeholder="Add text here"
          onChange={(event) => {
            setevName(event.target.value);}}
        />
      </div>
      <div className='txtArea'>
         <textarea
          name="notes"
          rows={6}
          input
          placeholder="Add text here"
          className='textArea'
          />
        </div>
        <button className='byeuton' onClick={handleSubmit}> Submit</button>
                    </div>
                    </div>
             </div>
);}
export default TaskDesign;