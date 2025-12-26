import React from "react";
import { motion } from "framer-motion";
import "../index.css";
import Section from "../components/Section";
import Skills from "../components/Skills";
import TagManager from "react-gtm-module";
import projectsData from "../assets/projects.json";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import FixedHeader from "../components/FixedHeader";

function Home() {
    // analytics
    TagManager.dataLayer({
        dataLayer: {
            event: "pageview",
            page: {
                url: "/",
                title: "Resume",
            },
        },
    });

    const experienceData = [
        {
            subtitle: "Ad Tech Solutions Engineer, AdMob",
            date: "03/2025 - Present",
            title: "Google",
            location: "Dublin, IE",
            countryCode: "IE",
            icon: "google.webp",
            details:
                "• Optimizing AdMob monetization strategies for top EMEA mobile app publishers to increase revenue.",
        },
        {
            subtitle: "Digital Marketing Consultant",
            date: "08/2021 - 03/2025",
            title: "Deloitte",
            location: "Rome, IT",
            countryCode: "IT",
            icon: "deloitte.webp",
            details:
                "• Optimized digital marketing performance through cross-functional collaboration and data-driven strategy.",
        },
        {
            subtitle: "Full Stack Cloud Developer",
            date: "01/2021 - 08/2021",
            title: "Reply",
            location: "Rome, IT",
            countryCode: "IT",
            icon: "reply.webp",
            details:
                "• Deployed scalable enterprise web applications on Azure Cloud",
        },
    ];
    const educationData = [
        {
            title: "Sapienza University",
            subtitle: "MSc in Engineering in Computer Science",
            date: "2018 - 2020",
            location: "Rome, IT",
            countryCode: "IT",
            icon: "sapienza.webp",
            details:
                '• Designed algorithms to build <a href="https://github.com/bpm-diag/smartRPA" target="_blank" rel="noopener noreferrer" class="text-blue-800 dark:text-blue-400">SmartRPA</a>, a tool to generate sw robots that emulate observed user behavior</br>• Presented academic research at RPA Forum and CAiSE Forum and published 3 papers <a href="https://scholar.google.com/citations?user=D139cEIAAAAJ&hl=it&oi=ao" target="_blank" rel="noopener noreferrer" class="text-blue-800 dark:text-blue-400">cited 100+ times</a>',
        },
        {
            title: "Sapienza University",
            subtitle: "BSc in Computer and Systems Engineering",
            date: "2015 - 2018",
            location: "Rome, IT",
            countryCode: "IT",
            icon: "sapienza.webp",
        },
    ];
    const certificatesData = [
        {
            title: "Real-Time CDP",
            subtitle: "Adobe",
            date: "2024",
            link: "https://www.credly.com/badges/57b02656-76c8-44a5-8b68-78315d95f28b/linked_in_profile",
            icon: "adobe.webp",
        },
        {
            title: "Journey Optimizer",
            subtitle: "Adobe",
            date: "2024",
            link: "https://www.credly.com/badges/6549672f-2ad1-4da7-b3d3-3bc0d448d308/linked_in_profile",
            icon: "adobe.webp",
        },
        {
            title: "Adobe Analytics",
            subtitle: "Adobe",
            date: "2023",
            link: "https://www.credly.com/badges/30e8d9b1-f9e3-4d15-bef7-64f60ec55f11/linked_in_profile",
            icon: "adobe.webp",
        },
        {
            title: "Customer Journey Analytics",
            subtitle: "Adobe",
            date: "2024",
            link: "https://www.credly.com/badges/c0a83f2f-eeea-448d-9b69-bf9511a9e109/linked_in_profile",
            icon: "adobe.webp",
        },
        {
            title: "Google Analytics",
            subtitle: "Google",
            date: "2023",
            link: "https://skillshop.credential.net/b0b9b5f3-ad88-4968-a596-0dc537dfce33",
            icon: "google.webp",
        },
        {
            title: "Google Ads Search",
            subtitle: "Google",
            date: "2023",
            link: "https://skillshop.credential.net/ed422f7d-5fb0-48ac-aabe-ee010f9f1d2b",
            icon: "google.webp",
        },
        {
            title: "Azure Fundamentals",
            subtitle: "Microsoft",
            date: "2021",
            link: "https://www.credly.com/badges/5e71870d-f59d-4b04-be1e-4512ec12ed83",
            icon: "microsoft.webp",
        },
        {
            title: "English C2",
            subtitle: "EF Set",
            date: "2019",
            link: "https://cert.efset.org/hrVnQr",
            icon: "ef.webp",
        },
    ];
    const publicationsData = [
        {
            title: "Computers in Industry",
            subtitle: "Reactive synthesis of software robots in RPA from user interface logs",
            date: "06/2022",
            location: "Springer",
            link: "https://www.sciencedirect.com/science/article/abs/pii/S016636152200118X",
            icon: "springer.webp",
        },
        {
            title: "CAiSE Forum",
            subtitle:
                "SmartRPA: A Tool to Reactively Synthesize Software Robots from User Interface Logs",
            date: "06/2021",
            location: "Springer",
            link: "https://www.springerprofessional.de/en/smartrpa-a-tool-to-reactively-synthesize-software-robots-from-us/19259790",
            icon: "springer.webp",
        },
        {
            title: "RPA Forum",
            subtitle:
                "Automated Generation of Executable RPA Scripts from User Interface Logs",
            date: "09/2020",
            location: "Springer",
            link: "https://link.springer.com/chapter/10.1007/978-3-030-58779-6_8",
            icon: "springer.webp",
        },
    ];
    // Get the last 4 projects sorted by date (newest first)
    const recentProjects = projectsData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4)
        .map((project) => ({
            title: project.title,
            subtitle: project.description,
            date: new Date(project.date).getFullYear(),
            link: project.link,
            location: project.category, // reusing location for category/type
            iconComponent: <GrProjects />,
        }));

    return (
        <motion.div className="min-h-screen px-6 pt-32 pb-12 sm:pb-20 max-w-3xl mx-auto text-gray-900 dark:text-gray-100 font-sans">
            <FixedHeader />
            <header className="mb-10">
                <motion.div
                    id="about"
                    className="mt-10 w-full text-md text-gray-800 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <p>
                        Result-oriented <strong>Computer Engineer</strong> with {new Date().getFullYear() - 2021}+ years of experience delivering impactful, data-driven solutions. Expert in <strong>Google</strong> and <strong>Adobe</strong> systems, with strong skills in Python, JavaScript, and SQL.
                    </p>
                </motion.div>
            </header>

            <div className="space-y-12 sm:space-y-14">
                <Section
                    data={experienceData}
                    title="Experience"
                    limit={4}
                />

                <Section
                    data={educationData}
                    title="Education"
                />

                <Skills />

                <div>
                    <Section
                        data={recentProjects}
                        title="Recent Projects"
                        limit={4}
                    />
                    <div className="mt-8">
                        <Button
                            asChild
                            variant="outline"
                            className="w-full sm:w-auto"
                        >
                            <Link to="/projects">View all projects</Link>
                        </Button>
                    </div>
                </div>

                <Section
                    data={certificatesData}
                    title="Certificates"
                    limit={certificatesData.length}
                />

                <Section
                    data={publicationsData}
                    title="Publications"
                />

                
            </div>
        </motion.div>
    );
}

export default Home;
