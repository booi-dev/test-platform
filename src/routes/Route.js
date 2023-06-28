import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/app/store";

import Navbar from "../components/layouts/nav/Nav";
import Main from "../components/layouts/main/Main";

function AppRoute() {

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </Router>
        </div>
    );
}

export default AppRoute;
