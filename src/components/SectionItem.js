import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Helper function to convert country code to flag emoji
const getCountryFlag = (countryCode) => {
    if (!countryCode) return "";
    // Convert country code to flag emoji using Unicode regional indicator symbols
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
};

const SectionItem = ({ item }) => (
    <motion.div
        className="group flex gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
    >
        {(item.icon || item.iconComponent) && (
            <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center border border-gray-100 dark:border-gray-800">
                    {item.icon ? (
                        <img
                            src={require(`../assets/logo/${item.icon}`)}
                            alt={item.title}
                            className="w-6 h-6 object-contain dark:invert-[.9] opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                    ) : (
                        <span className="text-lg text-gray-400 dark:text-gray-300 group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors">
                            {item.iconComponent}
                        </span>
                    )}
                </div>
            </div>
        )}

        <div className="flex-grow flex flex-row justify-between items-start gap-4">
            <div className="space-y-1.5 flex-grow min-w-0">
                <div className="font-medium text-gray-900 dark:text-gray-100 leading-none truncate">
                    {item.link ? (
                        item.link.startsWith("/") ? (
                            <Link
                                to={item.link}
                                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                {item.title}
                            </Link>
                        ) : (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                {item.title}
                            </a>
                        )
                    ) : (
                        item.title
                    )}
                </div>
                {item.subtitle && (
                    <div className="text-gray-500 dark:text-gray-300 text-sm leading-snug">
                        {item.link ? (
                            item.link.startsWith("/") ? (
                                <Link
                                    to={item.link}
                                    className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                >
                                    {item.subtitle}
                                </Link>
                            ) : (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                >
                                    {item.subtitle}
                                </a>
                            )
                        ) : (
                            item.subtitle
                        )}
                    </div>
                )}
                {item.details && (
                    <div
                        className="text-sm text-gray-500 dark:text-gray-300 pt-1 leading-relaxed max-w-xl"
                        dangerouslySetInnerHTML={{ __html: item.details }}
                    ></div>
                )}
            </div>

            <div className="flex-shrink-0 flex flex-col items-end gap-0.5 text-right">
                <div className="text-xs text-gray-500 dark:text-gray-300">
                    {item.date}
                </div>
                {item.location && (
                    <div className="text-xs text-gray-500 dark:text-gray-300 flex items-center justify-end gap-1.5">
                        {item.countryCode && (
                            <span className="text-base leading-none" role="img" aria-label={`Flag of ${item.countryCode}`}>
                                {getCountryFlag(item.countryCode)}
                            </span>
                        )}
                        <span>{item.location}</span>
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

export default SectionItem;
