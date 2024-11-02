import React from "react";
import { motion } from "framer-motion";
function SkillsItem({ title, data }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 text-gray-800 dark:text-gray-200 flex items-center flex-wrap"
        >
            <span className="font-semibold text-sm mr-1">{title}</span>
            {data.map((language, index) => (
                <div key={index} className="text-sm flex items-center">
                    <span className="mr-1">{language.icon}</span>
                    {language.name}
                    <span className="mx-1">
                        {index < data.length - 1 && " | "}
                    </span>
                </div>
            ))}
        </motion.div>
    );
}

export default SkillsItem;
