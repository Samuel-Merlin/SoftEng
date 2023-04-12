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
    const Message = document.getElementById('Message');
    if (evName =='' || evTimestamp == ''){
      Message.innerHTML = "Invalid input, please enter all form elements";
    }
    else{
    try{
    const newDocRef = await addDoc(collection(oFirestore, 'PCEvents'),{
        event_name: evName,
        event_timestamp: new Date(evTimestamp)
    });
    const Message = document.getElementById('Message');
      Message.innerHTML = "Event succesfully created";
      document.querySelector(".dateNtime").value = "";
      document.querySelector(".inputText").value = "";
      setevName("");
      setevTimestamp("");
    }
    catch(error) {
        console.log(error);
        const Message = document.getElementById('Message');
        Message.innerHTML = "Invalid input, please enter all form elements";
    };
  }
}
return(

  
  <div className='body'>
            <div className='Header'> MyCalendarTime.com </div>
        <div className='formContainer'>

        <div className='ItemContainer'>
        <div className='Header2'> Add Task Form </div>
        <div className='date'> Select a Date and Time</div>
        <input defualtValue='value' className="dateNtime" type="datetime-local" id="add an ID" onChange={(event) => {
                        setevTimestamp(event.target.value);}}></input>

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
        <button className='byeuton1' onClick={() => navigate('/PersonalCalendar')}> Go Back</button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        <button className='byeuton2' onClick={handleSubmit}> Submit</button>
                    </div>
                    </div>
                    <div clasName = 'inerhtml'>
                    <p className = 'innerhtml' id ='Message'></p>
                    </div>
      </div>
);}
export default TaskDesign;