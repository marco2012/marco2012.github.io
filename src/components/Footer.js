import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

function Footer() {
    return (
        <motion.div
            className="mt-6 mb-6 max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-mono gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center gap-4">
                {/* <span>© {new Date().getFullYear()} Marco Lupia</span> */}
                {/* <span className="text-gray-300 dark:text-gray-600">/</span> */}
                <Link 
                    to="/cookie-policy"
                    className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                    Cookie Policy
                </Link>
            </div>
            
            <div className="flex items-center gap-2">
                Made with <FaReact className="animate-spin-slow" /> in 🇮🇹
            </div>
        </motion.div>
    );
}

export default Footer;
