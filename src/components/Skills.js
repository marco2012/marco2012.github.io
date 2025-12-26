import React from "react";
import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { PiFileCppDuotone } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import SkillsItem from "./SkillsItem";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FaConfluence } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { GrUserManager } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";
import { SiTableau } from "react-icons/si";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SiSemrush } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiGoogleadmob } from "react-icons/si";
import { SiGoogletagmanager } from "react-icons/si";
import { FaTag } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGears } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { GrStakeholder } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";
import { RiOrganizationChart } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

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
            icon: <TbBrandCSharp />,
        },
        // {
        //     name: "C",
        //     icon: <PiFileCppDuotone />,
        // },
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
            name: "AdMob",
            icon: <SiGoogleadmob />,
        },
        {
            name: "Google Analytics",
            icon: <FaGoogle />,
        },
        {
            name: "Tag Manager",
            icon: <SiGoogletagmanager />,
        },
        {
            name: "Firebase",
            icon: <IoLogoFirebase />,
        },
        {
            name: "Real-time CDP (AEP)",
            icon: <SiAdobe />,
        },
        {
            name: (
                <>
                    <span className="hidden sm:inline">Journey Optimizer</span>
                    <span className="sm:hidden">Journey Optimizer</span>
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
            name: "Tealium",
            icon: <FaTag />,
        },
        {
            name: "Data Analysis",
            icon: <MdSpaceDashboard />,
        },
        {
            name: "Tableau",
            icon: <SiTableau />,
        },
        {
            name: "Power BI",
            icon: <MdOutlineSpaceDashboard />,
        },
        {
            name: "SemRush",
            icon: <SiSemrush />,
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
            icon: <FaGithub />,
        },
        {
            name: "Azure Cloud",
            icon: <VscAzure />,
        },
        {
            name: "REST APIs",
            icon: <SiPostman />,
        },

    ];
    const businessSkills = [
        {
            name: "Project Management",
            icon: <GrUserManager />,
        },
        {
            name: "Stakeholder Management",
            icon: <GrStakeholder />,
        },
        {
            name: "Process optimization",
            icon: <FaGears />,
        },
        {
            name: "Cross-functional coordination",
            icon: <IoIosPeople />,
        },
        {
            name: "Leadership",
            icon: <IoPeople />,
        },
        {
            name: "Organization",
            icon: <RiOrganizationChart />,
        },
    ];
    return (
        <div>
            <motion.h2
                className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Skills
            </motion.h2>
            <div className="flex flex-col mt-4 gap-6">
                <div className="flex flex-col gap-8">
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
                    <SkillsItem title="Business" data={businessSkills} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
