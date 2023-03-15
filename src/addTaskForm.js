import React from 'react';
import './login.css';

import { NavLink, useNavigate, Link } from 'react-router-dom'

function TaskDesign()
{
  const navigate = useNavigate();
return(
  <div className='body'>
            <div className='Header'> MyCalendarTime.com </div>
        <div className='formContainer'>

        <div className='ItemContainer'>
        <div className='Header2'> Add Task Form </div>
        <div className='date'> Select a Date and Time</div>
        <div>
        <input value='value' className="dateNtime" type="datetime-local" id="add an ID"></input>
        </div>

        <div className='title'> Title and Description </div>
        <div>
        <input className='inputText'
          placeholder="Add text here"
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
        <button className='byeuton' onClick={() => navigate('/PersonalCalendar')}> Go Back</button>
                    </div>
                    </div>
             </div>
);}
export default TaskDesign;