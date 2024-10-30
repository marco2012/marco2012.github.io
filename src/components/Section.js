import React from "react";
import { motion } from "framer-motion";

const Section = ({ data, icon, title }) => {
    return (
        <div className="mt-10">
            <motion.h2
                className="text-md uppercase tracking-widest text-gray-800 dark:text-gray-200 flex items-center"
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
                    {data.map((d, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-between mt-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <motion.div
                                className="space-y-1"
                                whileHover={{ x: 6 }} // Move title slightly to the right on hover
                            >
                                <span
                                    className={`${
                                        d.title.length > 40
                                            ? "text-xs"
                                            : "text-sm"
                                    } md:text-md font-bold block`}
                                >
                                    {d.link ? (
                                        <a
                                            href={d.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            // className="text-sm md:text-md font-bold block"
                                        >
                                            {d.title}
                                        </a>
                                    ) : (
                                        d.title
                                    )}
                                </span>
                                <span
                                    className={`${
                                        d.subtitle.length > 40
                                            ? "text-xs"
                                            : "text-sm"
                                    } md:text-md text-gray-800 dark:text-gray-200 italic flex items-center`}
                                >
                                    <img
                                        src={d.icon}
                                        alt="icon"
                                        className="w-4 mr-1 dark:invert"
                                    />
                                    {d.subtitle}
                                </span>
                            </motion.div>
                            <div className="text-right">
                                <span className="text-xs md:text-md text-gray-800 dark:text-gray-200">
                                    {d.date}
                                </span>
                                <span className="block text-xs mt-1 text-gray-400 dark:text-gray-400 min-w-20">
                                    {d.location}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section;
