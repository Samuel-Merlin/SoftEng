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
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase-config';
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/HomeScreenPage")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });}

      return(
        <div className='body'>
            <div className='Header'> MyCalendarTime.com </div>
              <img className='img' src={CalApp} alt='sd'/>
              <div>
                <div className="heading-container">
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
                            <button className = 'btn' onClick={onLogin} >Log in</button>
                        </div>
                  </div>
              </div>
          </div>
      </div>
);}
export default Login;