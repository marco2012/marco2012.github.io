import React from "react";
import SocialLinks from "./SocialLinks";
import { IoIosLink } from "react-icons/io";
import { motion } from "framer-motion";
import { FaCookieBite } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

function Footer() {
    return (
        <motion.div
            // className="mt-10 text-left text-gray-800 dark:text-gray-200 text-xs flex items-center justify-between"
            className="mt-10 mb-10 max-w-2xl mx-auto px-4 flex items-center justify-between text-gray-800 dark:text-gray-200 text-xs"
            initial={{ opacity: 0, y: 30 }} // Start off-screen from the top
            animate={{ opacity: 1, y: 0 }} // Animate to on-screen
            transition={{ duration: 0.6 }} // Duration of the slide-in
        >
            <div className="flex items-center space-x-2">
                <span className="p-1 rounded-full transition-colors hover:bg-white/[0.06]">
                    <IoIosLink />
                </span>
                <SocialLinks />
                <Link to="/cookie-policy">
                    <FaCookieBite className="hover:scale-125 ml-1" />
                </Link>
            </div>
            <div className="flex items-center">
                Made with <FaReact className="mx-1" /> in 🇮🇹
            </div>
        </motion.div>
    );
}

export default Footer;
