import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCsharp } from "react-icons/si";
import { PiFileCppDuotone } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import SkillsItem from "./SkillsItem";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { FaConfluence } from "react-icons/fa";
import { SiScrumalliance } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import { SiPostman } from "react-icons/si";

const Skills = () => {
    const languages = [
        {
            name: "Python",
            icon: <FaPython />,
        },
        {
            name: "JavaScript",
            icon: <RiJavascriptFill />,
        },
        {
            name: "SQL",
            icon: <FaDatabase />,
        },
        {
            name: "Java",
            icon: <FaJava />,
        },
        {
            name: "C#",
            icon: <SiCsharp />,
        },
        {
            name: "C",
            icon: <PiFileCppDuotone />,
        },
    ];
    const frameworks = [
        {
            name: "React",
            icon: <FaReact />,
        },
        {
            name: "Angular",
            icon: <FaAngular />,
        },
        {
            name: "Asp.Net Core",
            icon: <SiDotnet />,
        },
        {
            name: "Pandas",
            icon: <SiPandas />,
        },
    ];
    const digitalSkills = [
        {
            name: "AEP, AJO, CJA, Analytics, Launch",
            icon: <SiAdobe />,
        },
        {
            name: "Google Analytics, Tag Manager",
            icon: <FaGoogle />,
        },
        {
            name: "Tealium, Data Visualization",
            icon: <CiShoppingTag />,
        },
    ];
    const tools = [
        {
            name: "Agile",
            icon: <DiScrum />,
        },
        {
            name: "Jira",
            icon: <SiScrumalliance />,
        },
        {
            name: "Confluence",
            icon: <FaConfluence />,
        },
        {
            name: "Git",
            icon: <FaGit />,
        },
        {
            name: "Azure",
            icon: <VscAzure />,
        },
        {
            name: "REST APIs",
            icon: <SiPostman />,
        },
    ];
    return (
        <div className="mt-10">
            <motion.h2
                className="text-md uppercase tracking-widest text-gray-800 dark:text-gray-200 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <FaCode className="mr-2" />
                <span className="font-semibold">Skills</span>
            </motion.h2>
            <div className="flex mt-2 space-x-4 border-l border-gray-400 cursor-default">
                <div className="h-full"></div> {/* Vertical line */}
                <div className="flex flex-col space-y-3">
                    <SkillsItem title="Languages" data={languages} />
                    <SkillsItem title="Frameworks" data={frameworks} />
                    <SkillsItem title="Digital Skills" data={digitalSkills} />
                    <SkillsItem title="Tools" data={tools} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
