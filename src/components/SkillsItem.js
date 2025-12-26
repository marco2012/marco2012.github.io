import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

function SkillsItem({ title, data }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 text-gray-600 dark:text-gray-400 flex flex-col gap-2"
            whileHover={{ x: 6 }}
        >
            <div className="w-full">
                <span className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {title}
                </span>
            </div>
            <div className="flex flex-wrap gap-2 w-full">
                {data.map((language, index) => (
                    <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm py-1 px-3 flex items-center gap-2 bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 text-gray-800 dark:text-gray-200 transition-colors font-normal"
                    >
                        <span className="text-lg">{language.icon}</span>
                        {language.name}
                    </Badge>
                ))}
            </div>
        </motion.div>
    );
}

export default SkillsItem;
