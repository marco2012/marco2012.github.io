import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaStar } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

function Redirect({ title, icon, redirectUrl }) {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    React.useEffect(() => {
        window.location.href = redirectUrl;
    }, [redirectUrl]);

    return (
        <motion.div className="min-h-screen px-6 py-12 sm:py-20 max-w-3xl mx-auto text-gray-900 dark:text-gray-100 font-sans">
            <header className="mb-20">
                <div className="flex justify-between items-start">
                    <Link to="/">
                        <motion.h1 
                            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
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

                <motion.div 
                    className="flex flex-wrap gap-x-3 gap-y-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Link 
                        to="/projects"
                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <GrProjects />
                        Projects
                    </Link>
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    <Link 
                        to="/referrals"
                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaStar />
                        Referrals
                    </Link>
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    <a 
                        href="https://github.com/marco2012" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    <a 
                        href="https://www.linkedin.com/in/marco-lupia" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    <a 
                        href="https://scholar.google.com/citations?user=D139cEIAAAAJ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaGoogleScholar />
                        Scholar
                    </a>
                </motion.div>
            </header>

            <motion.div
                className="flex flex-col items-center justify-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <span className="mb-6 text-6xl text-gray-800 dark:text-gray-200">{icon}</span>
                <p className="text-xl mb-4 text-center">
                    Redirecting to <strong>{title}</strong> profile...
                </p>
                <a
                    href={redirectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-sm mt-4 underline decoration-gray-300 underline-offset-4"
                >
                    Click here if you are not redirected automatically.
                </a>
            </motion.div>
        </motion.div>
    );
}

export default Redirect;
