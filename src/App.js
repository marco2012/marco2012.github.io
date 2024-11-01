// src/App.js
// https://hygraph.com/blog/routing-in-react
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <>
            <ThemeProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
