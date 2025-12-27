import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaStar, FaGithub, FaLinkedin, FaHome } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const FixedHeader = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();
    const path = location.pathname;
    const [isScrolled, setIsScrolled] = useState(false);

    const isActive = (route) => path === route;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/60 dark:bg-[#09090B]/60 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-3xl mx-auto px-6 py-6">
                <div className="flex justify-between items-start mb-4">
                    <Link to="/">
                        <motion.h1
                            className="text-4xl sm:text-5xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-gray-900 dark:text-gray-100"
                        >
                            Marco Lupia
                        </motion.h1>
                    </Link>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => toggleTheme()}
                    >
                        {isDarkTheme ? (
                            <MdOutlineWbSunny className="w-5 h-5" />
                        ) : (
                            <IoMoonOutline className="w-5 h-5" />
                        )}
                    </Button>
                </div>

                <div className="flex flex-wrap gap-x-3 gap-y-3 sm:gap-y-2 text-sm sm:text-base font-medium items-center">
                    {isActive("/") ? (
                        <span className="text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <FaHome />
                            Home
                        </span>
                    ) : (
                        <Link
                            to="/"
                            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                        >
                            <FaHome />
                            Home
                        </Link>
                    )}
                    
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    
                    {isActive("/projects") ? (
                        <span className="text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <GrProjects />
                            Projects
                        </span>
                    ) : (
                        <Link
                            to="/projects"
                            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                        >
                            <GrProjects />
                            Projects
                        </Link>
                    )}
                    
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    
                    {isActive("/referrals") ? (
                        <span className="text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <FaStar />
                            Referrals
                        </span>
                    ) : (
                        <Link
                            to="/referrals"
                            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                        >
                            <FaStar />
                            Referrals
                        </Link>
                    )}

                     <span className="text-gray-300 dark:text-gray-600">/</span>
                    
                    <a
                        href="https://www.linkedin.com/in/marco-lupia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    
                    <a
                        href="https://github.com/marco2012"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                    
                   
                    
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    
                    <a
                        href="https://scholar.google.com/citations?user=D139cEIAAAAJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaGoogleScholar />
                        Scholar
                    </a>
                </div>
            </div>
        </motion.header>
    );
};

export default FixedHeader;
