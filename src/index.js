/*+===================================================================
File: Index.js

Summary: Renders the App as a broswer router

Exported Data Structures: None

Exported Functions: None

Contributors:
    Sam Merlin 3/1/2023

===================================================================+*/
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
         <App />
    </BrowserRouter>
  </React.StrictMode>
);