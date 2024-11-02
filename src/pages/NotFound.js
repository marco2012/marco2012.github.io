// src/App.js
import React from "react";
import "../index.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

function NotFound() {
    return (
        <div className="px-6 max-w-2xl mx-auto text-gray-800 dark:text-gray-200">
            <NavBar btnLink="/" btnImage={<GoHomeFill />} animate={false} />

            <div className="mt-8">
                <div
                    style={{
                        backgroundImage: `url(${require("../assets/images/404.gif")})`,
                        height: "400px",
                        backgroundPosition: "center",
                    }}
                >
                    <h1 className="text-center text-8xl">404</h1>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h2 className="text-xl italic mb-8">
                        Look like you're lost...
                    </h2>
                    <Link to="/">
                        <button
                            className="rounded-md border border-transparent p-2 flex items-center text-center text-lg transition-all text-slate-600 bg-slate-200 hover:bg-slate-400 focus:bg-slate-300 active:bg-slate-300"
                            type="button"
                        >
                            Go Home
                            <GoHomeFill className="ml-2" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
