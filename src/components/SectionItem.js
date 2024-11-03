import React from "react";
import { motion } from "framer-motion";

const SectionItem = ({ item }) => (
    <motion.div
        className="flex justify-between mt-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
    >
        <motion.div className="space-y-1" whileHover={{ x: 6 }}>
            <span
                className={`${
                    item.title.length > 40 ? "text-xs" : "text-sm"
                } md:text-md font-bold block`}
            >
                {item.link ? (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.title}
                    </a>
                ) : (
                    item.title
                )}
            </span>
            <span
                className={`${
                    item.subtitle.length > 40 ? "text-xs" : "text-sm"
                } md:text-md text-gray-800 dark:text-gray-200 italic flex items-center`}
            >
                <img
                    src={require(`../assets/logo/${item.icon}`)}
                    alt={item.icon}
                    className="w-4 mr-1 dark:invert"
                />
                {item.subtitle}
            </span>
        </motion.div>
        <div className="text-right">
            <span className="text-xs sm:text-md text-gray-800 dark:text-gray-200">
                {item.date}
            </span>
            <span className="block text-xs mt-1 text-gray-400 dark:text-gray-400 min-w-20">
                {item.location}
            </span>
        </div>
    </motion.div>
);

export default SectionItem;
