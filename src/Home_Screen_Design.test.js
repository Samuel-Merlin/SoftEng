import {render, screen, fireEvent} from "@testing-library/react";
import React from "react";
import Home_Screen from "./Home_Screen_Design"
import { BrowserRouter as Router} from "react-router-dom";
test("...",  () => {
    render(
        <Router>
        <Home_Screen/>
        </Router>
        );
        jest.setTimeout(30000)
    const link = screen.getByText('Personal Calendar')
    fireEvent.click(link)
    expect(window.location.href).toBe("http://localhost/PersonalCalendar");
    });
    test("....",  () => {
        render(
            <Router>
            <Home_Screen/>
            </Router>
            );
            jest.setTimeout(30000)
        const link = screen.getByText('Group Calendar')
        fireEvent.click(link)
        expect(window.location.href).toBe("http://localhost/GroupCalendar");
        });