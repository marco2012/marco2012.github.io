// src/App.js
// https://hygraph.com/blog/routing-in-react
import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ThemeProvider } from "./contexts/ThemeContext";
import TagManager from "react-gtm-module";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
    useEffect(() => {
        const tagManagerArgs = {
            gtmId: "GTM-W9VG6TN",
        };
        TagManager.initialize(tagManagerArgs);
    }, []);
    return (
        <ThemeProvider>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </HashRouter>
            <Footer />
        </ThemeProvider>
    );
}

export default App;