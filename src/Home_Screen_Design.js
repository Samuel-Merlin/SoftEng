import React from 'react'
import {Link} from 'react-router-dom'
import CalApp from './Images/logo.png';
import './login.css'
function Home_Screen()
{
      return(
        <div className='body'>
            <div className='Header'> MyCalendarTime.com </div>
                <div className='ItemContainer'>
                  <div className='ImageContainer'>
                    <img className='bigImg' src={CalApp} alt='sd'/>
                    <img className='bigImg' src={CalApp} alt='sd'/>
                </div>
                  <div className='link'>
                    <Link to='/PersonalCalendar'>Personal Calendar</Link>
                      </div>
                      
                    <div className='link'>  
                      <Link to='/PersonalCalendar'>Group Calendar</Link>
                </div>
              </div>
        </div>
               //<img className='bigImg' src={CalApp} alt='sd'/>  
);}
export default Home_Screen;