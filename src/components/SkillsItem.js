import React from "react";
import { motion } from "framer-motion";
function SkillsItem({ title, data }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 text-gray-800 dark:text-gray-200 flex items-center flex-wrap"
            whileHover={{ x: 6 }}
        >
            <div className="w-full mb-2">
                <span className="font-semibold text-sm sm:text-base uppercase">
                    {title}
                </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {data.map((language, index) => (
                    <div
                        key={index}
                        className="text-sm sm:text-base flex items-center w-full"
                    >
                        <span className="mr-1">{language.icon}</span>
                        {language.name}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default SkillsItem;
