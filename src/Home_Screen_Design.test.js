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
    const link = screen.getByRole('link')
    fireEvent.click(link)
    const text2 = screen.getByText("Event:")
    expect(text2).toBeInTheDocument;
    const text3 = screen.getByText("Group Calendar")
    fireEvent.click(text)
    const text4 = screen.getByText("Events:")
    expect(text4).toBeInTheDocument;
    });