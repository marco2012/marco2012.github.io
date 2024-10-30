// src/App.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";
import NavigationMenu from "./components/NavigationMenu";
import Section from "./components/Section";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { MdOutlineSchool } from "react-icons/md";
import { PiBooksLight } from "react-icons/pi";
import Projects from "./components/Project";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem("isDarkTheme");
        return savedTheme ? JSON.parse(savedTheme) : true;
    });

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => {
            const newTheme = !prevTheme;
            localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
            return newTheme;
        });
    };

    // Effect to update body background color based on theme
    useEffect(() => {
        document.body.classList.toggle("dark", isDarkTheme);
        document.body.style.backgroundColor = isDarkTheme ? "#000" : "#fff";
    }, [isDarkTheme]);

    const experienceData = [
        {
            subtitle: "Digital Marketing Consultant",
            date: "2021-now",
            title: "Deloitte",
            location: "Rome",
            icon: "deloitte.png",
        },
        {
            subtitle: "Full Stack Developer",
            date: "2021",
            title: "Reply",
            location: "Rome",
            icon: "reply.png",
        },
        {
            subtitle: "Software Engineer",
            date: "2020",
            title: "Sapienza University",
            location: "Rome",
            icon: "sapienza.png",
        },
    ];
    // Education data
    const educationData = [
        {
            title: "MSc in Engineering in Computer Science",
            subtitle: "Sapienza University",
            date: "2018-2020",
            location: "Rome",
            icon: "sapienza.png",
        },
        {
            title: "BSc in Computer and Systems Engineering",
            subtitle: "Sapienza University",
            date: "2015-2018",
            location: "Rome",
            icon: "sapienza.png",
        },
    ];
    const certificatesData = [
        {
            title: "Real-Time CDP",
            subtitle: "Adobe",
            date: "2024",
            link: "https://www.credly.com/badges/57b02656-76c8-44a5-8b68-78315d95f28b/linked_in_profile",
            icon: "adobe.png",
        },
        {
            title: "Journey Optimizer",
            subtitle: "Adobe",
            date: "2024",
            link: "https://www.credly.com/badges/6549672f-2ad1-4da7-b3d3-3bc0d448d308/linked_in_profile",
            icon: "adobe.png",
        },
        {
            title: "Customer Journey Analytics",
            subtitle: "Adobe",
            date: "2024",
            link: "https://www.credly.com/badges/c0a83f2f-eeea-448d-9b69-bf9511a9e109/linked_in_profile",
            icon: "adobe.png",
        },
        {
            title: "Adobe Analytics",
            subtitle: "Adobe",
            date: "2023",
            link: "https://www.credly.com/badges/30e8d9b1-f9e3-4d15-bef7-64f60ec55f11/linked_in_profile",
            icon: "adobe.png",
        },
        {
            title: "Google Analytics",
            subtitle: "Google",
            date: "2023",
            link: "https://skillshop.credential.net/73d77d62-630b-484c-b801-81fa96ed3639",
            icon: "google.png",
        },
        {
            title: "Azure Fundamentals",
            subtitle: "Microsoft",
            date: "2021",
            link: "https://www.credly.com/badges/5e71870d-f59d-4b04-be1e-4512ec12ed83",
            icon: "microsoft.png",
        },
        {
            title: "English C2",
            subtitle: "EF Set",
            date: "2019",
            link: "https://cert.efset.org/hrVnQr",
            icon: "ef.png",
        },
    ];
    const publicationsData = [
        {
            title: "SmartRPA: A Tool to Reactively Synthesize Software Robots from User Interface Logs",
            subtitle:
                "33rd Int. Conf. on Advanced Information Systems Engineering (CAiSE Forum)",
            date: "07/2021",
            location: "Springer",
            link: "https://www.springerprofessional.de/en/smartrpa-a-tool-to-reactively-synthesize-software-robots-from-us/19259790",
            icon: "springer.png",
        },
        {
            title: "Automated Generation of Executable RPA Scripts from User Interface Logs",
            subtitle:
                "18th Int. Conference on Business Process Management (RPA Forum) ",
            date: "09/2020",
            location: "Springer",
            link: "https://link.springer.com/chapter/10.1007/978-3-030-58779-6_8",
            icon: "springer.png",
        },
    ];
    const projects = [
        {
            title: "SmartRPA",
            link: "https://github.com/bpm-diag/SmartRPA",
        },
        {
            title: "Dana's Club",
            link: "https://danasclub.it/?utm_source=marlup&utm_medium=social&utm_campaign=profile",
        },
        {
            title: "Icaro OdV",
            link: "https://icaro-odv.it/",
        },
        {
            title: "EnergyCalc",
            link: "https://marco2012.github.io/energyCalcWeb/?utm_source=marlup&utm_medium=social&utm_campaign=profile",
        },
        {
            title: "more...",
            link: "https://github.com/marco2012?tab=repositories",
        },
    ];

    return (
        <motion.div className="min-h-screen p-6 max-w-xl mx-auto text-gray-800 dark:text-gray-200">
            <NavigationMenu toggleTheme={toggleTheme} />

            <Profile
                title="Hello, I'm Marco."
                description="I'm a software engineer passioned about building impactful projects with a focus on design. Looking for new challenges to expand my skills and creativity."
                isDarkTheme={isDarkTheme}
            />

            <Section
                data={experienceData}
                icon={<MdOutlineWorkOutline />}
                title="Experience"
            />

            <Section
                data={educationData}
                icon={<MdOutlineSchool />}
                title="Education"
            />

            <Section
                data={certificatesData}
                icon={<PiCertificate />}
                title="Certificates"
            />

            <Section
                data={publicationsData}
                icon={<PiBooksLight />}
                title="Publications"
            />

            <Projects data={projects} />

            <Footer />
        </motion.div>
    );
}

export default App;
