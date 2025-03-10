// src/App.js
import React from "react";
import "../index.css";
import NavBar from "../components/NavBar";
import { GoHomeFill } from "react-icons/go";

function Linkedin() {
    React.useEffect(() => {
        window.location.href = "https://www.linkedin.com/in/marco-lupia/";
    }, []);
    return (
        <div className="px-6 max-w-2xl mx-auto text-gray-800 dark:text-gray-200">
            <NavBar btnLink="/" btnImage={<GoHomeFill />} animate={false} />

            <div className="flex flex-col items-center justify-center h-80">
                <p className="text-lg mb-4">
                    Redirecting to <strong>LinkedIn</strong> homepage...
                </p>
                <a
                    href="https://www.linkedin.com/in/marco-lupia/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Click here if you are not redirected automatically.
                </a>
            </div>
        </div>
    );
}

export default Linkedin;
