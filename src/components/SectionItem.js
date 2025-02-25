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
                } sm:text-base font-bold block`}
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
                } sm:text-base text-gray-800 dark:text-gray-200 italic flex items-center`}
            >
                <img
                    src={require(`../assets/logo/${item.icon}`)}
                    alt={item.icon}
                    className="w-4 mr-1 dark:invert"
                />
                {item.subtitle}
            </span>
            {item.details && (
                <div
                    className="text-sm text-justify"
                    dangerouslySetInnerHTML={{ __html: item.details }}
                ></div>
            )}
        </motion.div>
        <div className="text-right">
            <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                {item.date}
            </span>
            <span className="block text-xs sm:text-sm mt-1 text-gray-500 dark:text-gray-400 min-w-20">
                {item.location}
            </span>
        </div>
    </motion.div>
);

export default SectionItem;
