// src/App.js
// https://hygraph.com/blog/routing-in-react
import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ThemeProvider } from "./contexts/ThemeContext";
import TagManager from "react-gtm-module";

function App() {
    useEffect(() => {
        const tagManagerArgs = {
            gtmId: "GTM-W9VG6TN",
        };
        TagManager.initialize(tagManagerArgs);
    }, []);
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
