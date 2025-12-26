import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionItem from "./SectionItem";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Button } from "./ui/button";

const Section = ({ data, icon, title, limit = 3 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <motion.h2
                className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {icon && <span className="text-base">{icon}</span>}
                {title}
            </motion.h2>
            <div className="flex flex-col mt-4 space-y-6 cursor-default">
                <div className="flex-1 text-gray-800 dark:text-gray-200 space-y-6">
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
                                className="overflow-hidden space-y-6"
                            >
                                {data.slice(limit).map((d, index) => (
                                    <SectionItem key={index + 3} item={d} />
                                ))}
                            </motion.div>
                            <Button
                                variant="ghost"
                                onClick={toggleExpand}
                                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white flex items-center p-0 h-auto hover:bg-transparent"
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
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Section;
