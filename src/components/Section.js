import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionItem from "./SectionItem";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Section = ({ data, icon, title, limit = 3 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mt-12">
            <motion.h2
                className="text-base uppercase tracking-widest text-gray-800 dark:text-gray-200 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {icon && <span className="mr-2">{icon}</span>}{" "}
                <span className="font-semibold">{title}</span>
            </motion.h2>
            <div className="flex mt-2 space-x-4 border-l border-gray-400 cursor-default">
                <div className="h-full"></div> {/* Vertical line */}
                <div className="flex-1 text-gray-800 dark:text-gray-200 space-y-4">
                    {data.slice(0, limit).map((d, index) => (
                        <SectionItem key={index} item={d} />
                    ))}
                    {data.length > limit && (
                        <>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: isExpanded ? "auto" : 0,
                                    opacity: isExpanded ? 1 : 0,
                                }}
                                transition={{ duration: 0.2 }} // Speed up animation
                                className="overflow-hidden space-y-4"
                            >
                                {data.slice(limit).map((d, index) => (
                                    <SectionItem key={index + 3} item={d} />
                                ))}
                            </motion.div>
                            <button
                                onClick={toggleExpand}
                                className="text-sm text-gray-600 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-400 flex items-center mt-0"
                                style={{
                                    marginTop: isExpanded ? "1rem" : "0",
                                }}
                            >
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: isExpanded ? 360 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mr-2"
                                >
                                    {isExpanded ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </motion.span>
                                {isExpanded ? "Show less" : "Show all"}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Section;
