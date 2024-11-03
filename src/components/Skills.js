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
import { FaGit } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { GrUserManager } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";

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
            name: "Real-time CDP",
            icon: <SiAdobe />,
        },
        {
            name: (
                <>
                    <span className="hidden sm:inline">Journey Optimizer</span>
                    <span className="sm:hidden">AJO</span>
                </>
            ),
            icon: <SiAdobe />,
        },
        {
            name: "Analytics/CJA",
            icon: <SiAdobe />,
        },
        {
            name: "Launch",
            icon: <SiAdobe />,
        },
        {
            name: "Target",
            icon: <SiAdobe />,
        },
        {
            name: "Google Analytics",
            icon: <FaGoogle />,
        },
        {
            name: "Tag Manager",
            icon: <FaGoogle />,
        },
        {
            name: "Tealium",
            icon: <CiShoppingTag />,
        },
        {
            name: "Data Analysis",
            icon: <MdSpaceDashboard />,
        },
    ];
    const tools = [
        {
            name: "Agile/Scrum",
            icon: <DiScrum />,
        },
        {
            name: "Jira/Confluence",
            icon: <FaConfluence />,
        },
        {
            name: "Git",
            icon: <FaGit />,
        },
        {
            name: "Azure Cloud",
            icon: <VscAzure />,
        },
        {
            name: "REST APIs",
            icon: <SiPostman />,
        },
        {
            name: "Project Management",
            icon: <GrUserManager />,
        },
    ];
    return (
        <div className="mt-10">
            <motion.h2
                className="text-base uppercase tracking-widest text-gray-800 dark:text-gray-200 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <FaCode className="mr-2" />
                <span className="font-semibold">Skills</span>
            </motion.h2>
            <div className="flex mt-2 space-x-4 border-l border-gray-400 cursor-default">
                <div className="h-full"></div> {/* Vertical line */}
                <div className="flex flex-col gap-6">
                    <SkillsItem
                        title="Programming Languages"
                        data={languages}
                    />
                    <SkillsItem title="Frameworks" data={frameworks} />
                    <SkillsItem
                        title="Digital Marketing"
                        data={digitalSkills}
                    />
                    <SkillsItem title="Tools" data={tools} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
