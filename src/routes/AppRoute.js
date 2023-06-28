import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/app/store";

import Navbar from "../layouts/nav/Nav";
import LandingPage from "../pages/LandingPage";

function AppRoute() {

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default AppRoute;
