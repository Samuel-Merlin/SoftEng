/*T+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Test: grou_calendar.test.js
Target: const date
Assertions: tests that the initial date displayed in group calendar is todays date.
Writer: Justin Bruno
-------------------------------------------------------------------T*/


import {render, screen, fireEvent, getByText} from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import CalendarTimeGC from './group_calendar';

test("displays current date on load", () => {
   
   
    render(
        <MemoryRouter>
    <CalendarTimeGC 
        date
        
        
        />
        </MemoryRouter>
        );
  
  const currentDate = new Date().toDateString();
  const odate = screen.getByText(currentDate)


  expect(odate.textContent).toBe("Selected Date: "+currentDate);
});
