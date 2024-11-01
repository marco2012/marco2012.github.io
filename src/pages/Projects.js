import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import IntroSection from "../components/About";
import { ThemeContext } from "../contexts/ThemeContext";
import { GoHomeFill } from "react-icons/go";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../assets/projects.json";
import { IoIosSearch } from "react-icons/io";

function Projects() {
    const { isDarkTheme } = useContext(ThemeContext);

    const [searchQuery, setSearchQuery] = useState("");
    const filteredProjects = projectsData.filter(
        ({ title, description, language, skills }) =>
            [title, description, language, skills].some((field) =>
                field.toLowerCase().includes(searchQuery.toLowerCase())
            )
    );

    return (
        <motion.div className="min-h-screen px-6 text-gray-800 dark:text-gray-200">
            <div className="max-w-xl mx-auto px-6">
                <NavBar btnLink="/" btnImage={<GoHomeFill />} animate={false} />
                <div className="flex justify-center">
                    <IntroSection
                        title="My Projects"
                        subtitle={`Check out my ${filteredProjects.length} projects`}
                        isDarkTheme={isDarkTheme}
                        showAbout={false}
                    />
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-sm mx-auto mt-8">
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                            <IoIosSearch />
                        </span>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-800 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm/6"
                        placeholder="Search Projects..."
                        required
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center justify-end">
                        <select
                            id="language"
                            name="language"
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500 dark:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm text-left"
                            defaultValue=""
                            onChange={(e) => setSearchQuery(e.target.value)}
                        >
                            <option value="">All Languages</option>
                            {[
                                ...new Set(
                                    projectsData.map(({ language }) => language)
                                ),
                            ]
                                .sort()
                                .map((language, index) => (
                                    <option key={index} value={language}>
                                        {language}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
            </div>

            <div
                className="my-8 grid gap-6 justify-items-center mx-20"
                style={{
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(320px, 1fr))",
                }}
            >
                {filteredProjects
                    .sort((a, b) => b.date - a.date)
                    .map((p, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.1 },
                            }}
                            transition={{ delay: index * 0.1 }}
                            className="transform transition-transform duration-300 hover:shadow-lg"
                        >
                            <ProjectCard project={p} />
                        </motion.div>
                    ))}
            </div>

            <Footer />
        </motion.div>
    );
}

export default Projects;
