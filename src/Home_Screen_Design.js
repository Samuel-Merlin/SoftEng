import React from 'react'
import {Link} from 'react-router-dom'
import CalApp from './Images/logo.png';
import halfLogo from './Images/halfLogo.png';
import './login.css'
import './JBstyles.css'
function Home_Screen()
{
      return(
        <div className='body'>
               <header>
       <div className="flexbox-container">
         <div className="flexbox-item flexbox-item-1"> <img className='header' src={halfLogo} alt='sd'/>
         <br></br>
          </div>
       </div>
     </header>
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