/*+===================================================================
File: Login.test.js
Exported Data Structures: None

Exported Functions: None

Contributors:
  Samuel Merlin - 2/3/2023 - SP-341

===================================================================+*/
import {render, screen, fireEvent} from "@testing-library/react";
import { BrowserRouter as Router} from "react-router-dom";
import React from "react";
import Login from "./login";
import auth from "./firebase-config";
    test("Login success oAuth is not null",  () => {
        render(
            <Router>
            <Login/>
            </Router>
            );
            jest.setTimeout(30000)
        const text = screen.getByText("MyCalendarTime.com")
        expect(text).toBeInTheDocument;
        });

