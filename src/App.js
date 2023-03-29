/*+===================================================================
File: App.js

Summary: App .js is the router/navigation framework for the application

Exported Data Structures: None

Exported Functions: App

Contributors:
    Sam Merlin 3/1/2023

===================================================================+*/

import React, {useState} from 'react';
import { Routes, Route, useNavigate  } from "react-router-dom";
import Login from './login';
import HomeScreen from './Home_Screen_Design';
import Calendar from './personal_calendar';
import GCalendar from './group_calendar';
import TaskDesign from './addTaskForm';


function App() {
    return (
        <Routes>
          <Route path="/" element={ <Login/>} />
          <Route path="/HomeScreenPage"  element={ <HomeScreen/> } />
          <Route path = "PersonalCalendar" element={<Calendar/>} />
          <Route path = "GroupCalendar" element={<GCalendar/>} />
          <Route path = 'AddForm' element={<TaskDesign/>} />
          
          {/* REACT ROUTER -- ADD YOUR PATH-NAME, AND THEN YOUR ELEMENT WICH IS THE FILE NAME FROM THE IMPORT */}
        </Routes>
    )
  }
export default App