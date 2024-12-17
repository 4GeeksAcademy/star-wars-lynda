import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./views/home";
import CharacterDetail from "./views/characterDetail";

const Layout = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters/:id" element={<CharacterDetail />} />
                <Route path="/locations/:id" element={<CharacterDetail />} />
                <Route path="/episodes/:id" element={<CharacterDetail />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    );
};

export default Layout;
