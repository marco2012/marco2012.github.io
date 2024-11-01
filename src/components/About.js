import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import { motion } from "framer-motion";
import { IoInformationCircleOutline } from "react-icons/io5";

function About({ title, subtitle, description, showAbout }) {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <>
            <motion.div
                className="mt-8 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src={`${process.env.PUBLIC_URL}/logo_icon.webp`}
                    alt="Profile"
                    className="rounded-full w-20 h-20 mr-4"
                    style={{ filter: isDarkTheme ? "none" : "invert()" }}
                    whileHover={{ rotate: 180, transition: { duration: 0.3 } }} // Rotate on mouse hover
                />
                <div>
                    <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {title}
                    </h1>
                    <p className="text-md text-gray-800 dark:text-gray-200">
                        {subtitle}
                    </p>
                </div>
            </motion.div>

            {showAbout && (
                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }} // Move up on mouse hover with increased speed
                >
                    <h2 className="text-md uppercase tracking-widest text-gray-800 dark:text-gray-200 flex items-center">
                        <IoInformationCircleOutline className="mr-2" />
                        <span className="font-semibold">About</span>
                    </h2>
                    <p className="mt-2 text-sm md:text-md leading-relaxed text-gray-800 dark:text-gray-200 text-justify hyphens-auto">
                        {description}
                    </p>
                </motion.div>
            )}
        </>
    );
}

export default About;
