import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./scrollToTop";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <App />
            <ToastContainer />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
