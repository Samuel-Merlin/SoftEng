/*+===================================================================
File: login.js

Summary: Renders the login component

Exported Data Structures: user

Exported Functions: Login() Form that prompts user for login information, will accept if login is correct or not

Contributors:
    Sam Merlin 3/1/2023

===================================================================+*/
import React, {useState} from 'react'
import CalApp from './Images/logo.png';
import './login.css';
import {fnLogin} from './loginFunction'
import {useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate=useNavigate()
     
  const fnHandleLogin = async () => {
    const error = await fnLogin(email, password);
    
    
    if(error) {
      console.log(error.message);
      const Message = document.getElementById('Message');
      Message.innerHTML = "Invalid email, please enter an associated email or contact administration!";
    }
    else{
      
      Navigate('/HomeScreenPage')
    }
  }

      return(
        <div className='body'>
            <div className='Header'> MyCalendarTime.com </div>
              <img className='img' src={CalApp} alt='sd'/>
              <div>
                <div>
                  <div className='logintxt'>Log-in</div>
                    <div className='container'>
                        <div>
                            <input id="email-address"
                                   placeholder=" Email"
                                   name="email"
                                   type="email"                                    
                                   required                                                                                
                                   onChange={(e)=>setEmail(e.target.value)}
                                   className = "inpt" />
                        </div>
                        <div>
                            <input  id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className = "inpt"/>
                        </div>
                        <div>
                            <button className = 'btn' onClick={fnHandleLogin} >Log in</button>
                        </div>
                        <div className='inHtml'>
                        <p id ='Message'></p>
                        </div>
                  </div>
              </div>
          </div>
      </div>
);}
export default Login;