import React, { useState, useEffect } from 'react';
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './JBstyles.css';
import halfLogo from './Images/halfLogo.png';
import { NavLink, useNavigate } from 'react-router-dom'
import { oFirestore } from './firebase-config';
import {collection,getDocs} from 'firebase/firestore';



export default function CalendarTime(){
  const[fuel,setFuel]=useState([])
  const abPath=collection(oFirestore,'fuel')
  useEffect(()=>{
    const DispData=async()=>{
    const Data = await getDocs(abPath)
    console.log(Data)
    setFuel(data.docs.map((val)=>({...val.data(),id:val.id})))
    }
    DispData()
  },[])

  const navigate = useNavigate();
 const [date, setDate] = useState(new Date());
 const [selectedDate, setSelectedDate] = useState(new Date());
 const [events, setEvents] = useState([]);
 const numOfEvents = 3;
  const data = {
   '2023-03-10': ['First event'],
   '2023-03-15': ['2','djasdj','qndwqwd'],
   '2023-03-22': ['3'],
   '2023-04-08': ['4'],
   '2024-03-08': ['5'],
 };


 const tileContent = ({ date, view }) => {
   if (view === 'month') {
     const dateStr = date.toISOString().slice(0, 10);
     const eventList = data[dateStr] || [];
     return <p>Events: {eventList.length}</p>;
   }
 };


 const onClickDay = (value) => {
   setSelectedDate(value);
   const dateStr = value.toISOString().slice(0, 10);
   const eventList = data[dateStr] || [];
   setEvents(eventList);
 };


 return (
   <div>
     <header>
       <div className="flexbox-container">
         <div className="flexbox-item flexbox-item-1"> <img className='header' src={halfLogo} alt='sd'/>
         <br></br>
          </div>
         <div className="flexbox-item flexbox-item-2">
               <span><button className="button mid" onClick={() => alert('You clicked me!')}>
                   <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M18.1813 18.1797C19.1939 18.1797 20.1651 18.582 20.8811 19.298C21.5972 20.0141 21.9995 20.9852 21.9995 21.9979C21.9995 23.0105 21.5972 23.9817 20.8811 24.6977C20.1651 25.4138 19.1939 25.8161 18.1813 25.8161C17.1686 25.8161 16.1975 25.4138 15.4814 24.6977C14.7654 23.9817 14.3631 23.0105 14.3631 21.9979C14.3631 20.9852 14.7654 20.0141 15.4814 19.298C16.1975 18.582 17.1686 18.1797 18.1813 18.1797ZM18.1813 27.7251C22.4004 27.7251 25.8176 29.4338 25.8176 31.5433V33.4524H10.5449V31.5433C10.5449 29.4338 13.9622 27.7251 18.1813 27.7251Z" fill="#1B3848"/>
                       <path d="M4 40C2.9 40 1.958 39.6087 1.174 38.826C0.391333 38.042 0 37.1 0 36V8C0 6.9 0.391333 5.95867 1.174 5.176C1.958 4.392 2.9 4 4 4H6V0H10V4H26V0H30V4H32C33.1 4 34.042 4.392 34.826 5.176C35.6087 5.95867 36 6.9 36 8V36C36 37.1 35.6087 38.042 34.826 38.826C34.042 39.6087 33.1 40 32 40H4ZM4 36H32V16H4V36Z" fill="#1B3848"/>
                   </svg>
                   &nbsp;
               Personal
           </button></span></div>
         <div className="flexbox-item flexbox-item-3">
           <span><button className="button right" onClick={() => alert('You clicked me!')}>
               <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M18.1814 18.1797C19.1659 18.1797 20.1101 18.5681 20.8062 19.2594C21.5024 19.9508 21.8935 20.8885 21.8935 21.8662C21.8935 22.8439 21.5024 23.7816 20.8062 24.473C20.1101 25.1643 19.1659 25.5527 18.1814 25.5527C17.1969 25.5527 16.2527 25.1643 15.5565 24.473C14.8604 23.7816 14.4693 22.8439 14.4693 21.8662C14.4693 20.8885 14.8604 19.9508 15.5565 19.2594C16.2527 18.5681 17.1969 18.1797 18.1814 18.1797ZM10.7571 20.8129C11.3511 20.8129 11.9026 20.9709 12.3799 21.2553C12.2208 22.7615 12.6662 24.2572 13.5783 25.4263C13.048 26.4375 11.9874 27.1327 10.7571 27.1327C9.91326 27.1327 9.10395 26.7998 8.50725 26.2072C7.91054 25.6146 7.57531 24.8108 7.57531 23.9728C7.57531 23.1347 7.91054 22.331 8.50725 21.7384C9.10395 21.1458 9.91326 20.8129 10.7571 20.8129ZM25.6056 20.8129C26.4495 20.8129 27.2588 21.1458 27.8555 21.7384C28.4522 22.331 28.7874 23.1347 28.7874 23.9728C28.7874 24.8108 28.4522 25.6146 27.8555 26.2072C27.2588 26.7998 26.4495 27.1327 25.6056 27.1327C24.3753 27.1327 23.3147 26.4375 22.7844 25.4263C23.7091 24.2408 24.1383 22.747 23.9829 21.2553C24.4602 20.9709 25.0117 20.8129 25.6056 20.8129ZM11.2874 31.6092C11.2874 29.4288 14.3738 27.6593 18.1814 27.6593C21.989 27.6593 25.0753 29.4288 25.0753 31.6092V33.4524H11.2874V31.6092ZM5.4541 33.4524V31.8725C5.4541 30.4084 7.45865 29.1761 10.1738 28.8179C9.54804 29.5342 9.16622 30.5243 9.16622 31.6092V33.4524H5.4541ZM30.9086 33.4524H27.1965V31.6092C27.1965 30.5243 26.8147 29.5342 26.189 28.8179C28.9041 29.1761 30.9086 30.4084 30.9086 31.8725V33.4524Z" fill="#1B3848"/>
                   <path d="M4 40C2.9 40 1.958 39.6087 1.174 38.826C0.391333 38.042 0 37.1 0 36V8C0 6.9 0.391333 5.95867 1.174 5.176C1.958 4.392 2.9 4 4 4H6V0H10V4H26V0H30V4H32C33.1 4 34.042 4.392 34.826 5.176C35.6087 5.95867 36 6.9 36 8V36C36 37.1 35.6087 38.042 34.826 38.826C34.042 39.6087 33.1 40 32 40H4ZM4 36H32V16H4V36Z" fill="#1B3848"/>
               </svg>
               &nbsp;
               Group
           </button> </span></div>
       </div>
     </header>
     <br></br>
     <div>
       <button className="button right" onClick={() => navigate('/AddForm')}>
           <svg width="30" height="30" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="13" y="0.5" width="4" height="30" rx="2" fill="#1B3848"/>
               <rect x="30" y="13.5" width="4" height="30" rx="2" transform="rotate(90 30 13.5)" fill="#1B3848"/>
           </svg>
           &nbsp;
           Create Task
       </button>
       <br /><br /><br />
     </div>


     <div>
       <Calendar onChange={setDate} value={date} onClickDay={onClickDay} tileContent={tileContent} />
       <p className='text-center'>
         <span className='bold'>Selected Date:</span> {date.toDateString()}<br />
         <span className='bold'>Events:</span> {events.map((event, index) => <div key={index}>{event}</div>)}
       </p>
     </div>
   </div>
 );
};




