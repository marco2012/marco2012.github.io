import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { MdOutlineWbSunny } from "react-icons/md";
import SocialLinks from "./SocialLinks";
import { NavLink } from "react-router-dom";

const NavBar = ({ btnLink, btnImage, animate = true }) => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <motion.nav
            className="mt-8 max-w-xl mx-auto" // Added w-full for full width
            initial={animate ? { opacity: 0, y: -30 } : {}} // Start off-screen from the top if animate is true
            animate={animate ? { opacity: 1, y: 0 } : {}} // Animate to on-screen if animate is true
            transition={animate ? { duration: 0.6 } : {}} // Duration of the slide-in if animate is true
        >
            <div className="w-full bg-white/40 dark:bg-black/40 text-gray-300 border-2 border-black/[0.1] dark:border-white/[0.1] backdrop-blur-xl rounded-full px-3 sm:px-5 py-2.5 inline-flex items-center gap-2 sm:gap-4 transition-all duration-300 justify-evenly">
                <NavLink
                    to={btnLink}
                    className="p-1 rounded-full transition-colors hover:bg-white/[0.06] hover:scale-125 text-md"
                >
                    <div className="group relative">
                        <div className="flex items-center gap-2 text-[13px] font-mono text-gray-800 dark:text-gray-200 transition-colors cursor-pointer">
                            {/* <div className="flex">{ctime}</div> */}
                            {btnImage}
                            {/* <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {btnLink.includes("projects") ? "Projects" : "Home"}
                        </span> */}
                        </div>
                    </div>
                </NavLink>

                <div className="h-3.5 w-[1px] bg-black/[0.2] dark:bg-white/[0.2] hidden sm:block"></div>
                <div className="flex items-center">
                    <div
                        className="flex items-center gap-2 ml-2 overflow-hidden text-gray-800 dark:text-gray-200"
                        style={{ opacity: 1, width: "auto" }}
                    >
                        <SocialLinks />
                    </div>
                </div>
                {/* <div className="h-3.5 w-[1px] bg-white/[0.08]"></div> */}
                <div className="h-3.5 w-[1px] bg-black/[0.2] dark:bg-white/[0.2] hidden sm:block"></div>
                <button
                    className="p-1 rounded-full group relative text-gray-800 dark:text-gray-200 "
                    tabIndex="0"
                    style={{ transform: "none" }}
                    onClick={() => {
                        toggleTheme();
                        const icon = document.getElementById("theme-icon");
                        if (icon) {
                            icon.style.transition = "transform 0.5s";
                            const currentRotation =
                                icon.style.transform === "rotate(90deg)"
                                    ? "rotate(0deg)"
                                    : "rotate(90deg)";
                            icon.style.transform = currentRotation;
                        }
                    }}
                >
                    <MdOutlineWbSunny id="theme-icon" />
                    {/* <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Switch theme
                    </span> */}
                </button>
            </div>
        </motion.nav>
    );
};

export default NavBar;
