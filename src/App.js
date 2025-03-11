// src/App.js
// https://hygraph.com/blog/routing-in-react
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ThemeProvider } from "./contexts/ThemeContext";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import CookiePolicy from "./pages/CookiePolicy";
import Redirect from "./pages/Redirect";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
    return (
        <ThemeProvider>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route
                        exact
                        path="/cookie-policy"
                        element={<CookiePolicy />}
                    />
                    <Route
                        exact
                        path="/linkedin"
                        element={
                            <Redirect
                                title={"LinkedIn"}
                                icon={<FaLinkedin />}
                                redirectUrl={
                                    "https://www.linkedin.com/in/marco-lupia/"
                                }
                            />
                        }
                    />
                    <Route
                        exact
                        path="/github"
                        element={
                            <Redirect
                                title={"GitHub"}
                                icon={<FaGithub />}
                                redirectUrl={"https://github.com/marco2012"}
                            />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
