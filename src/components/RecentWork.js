import React from "react";
import { motion } from "framer-motion";
import { LiaAtomSolid } from "react-icons/lia";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const RecentWork = ({ data }) => {
    return (
        <div className="mt-10 space-x-4">
            <h2 className="text-md uppercase tracking-widest text-gray-800 dark:text-gray-200 flex items-center">
                <LiaAtomSolid className="mr-2" />
                <span className="font-semibold">Recent work</span>
            </h2>
            <div className="flex mt-2 space-x-4">
                <div className="flex-1 text-gray-800 dark:text-gray-200">
                    <ul className="mt-2 space-y-3">
                        {data.map((project, index) => (
                            <motion.li
                                key={index}
                                className="flex justify-between items-center rounded-lg transition-transform transform hover:scale-105"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.span
                                    className="text-md text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer"
                                    whileHover={{ x: 6 }} // Move title slightly to the right on hover
                                >
                                    {project.title.includes("more") ? (
                                        <Link to="/projects" className="italic">
                                            {project.title}
                                        </Link>
                                    ) : (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className=""
                                        >
                                            <span>{project.title}</span>
                                        </a>
                                    )}
                                </motion.span>
                                <Link to="/projects">
                                    <GoArrowRight />
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecentWork;
