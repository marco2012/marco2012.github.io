import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import About from "../components/About";
import { ThemeContext } from "../contexts/ThemeContext";
import { GoHomeFill } from "react-icons/go";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../assets/projects.json";
import { IoIosSearch } from "react-icons/io";
import ScrollToTop from "../components/ScrollToTop";
import TagManager from "react-gtm-module";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { BsSuitcaseLg } from "react-icons/bs";

function Projects() {
    TagManager.dataLayer({
        dataLayer: {
            event: "pageview",
            page: {
                url: "/projects",
                title: "Projects",
            },
        },
    });

    const { isDarkTheme } = useContext(ThemeContext);

    const [searchQuery, setSearchQuery] = useState("");
    const filteredProjects = projectsData.filter(
        ({ title, description, language, skills }) =>
            [title, description, language, skills].some((field) =>
                field.toLowerCase().includes(searchQuery.toLowerCase())
            )
    );

    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.div className="min-h-screen px-6 text-gray-800 dark:text-gray-200">
            <ScrollToTop />
            <div className="max-w-2xl mx-auto">
                <NavBar btnLink="/" btnImage={<GoHomeFill />} animate={false} />
                <div className="flex justify-center">
                    <About
                        title="My Projects"
                        subtitle={`Check out my ${filteredProjects.length} projects`}
                        isDarkTheme={isDarkTheme}
                        showAbout={false}
                        icon={<BsSuitcaseLg size={64} />}
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
                        placeholder=" search projects"
                        required
                        value={searchQuery}
                        onChange={(e) => {
                            const query = e.target.value;
                            setSearchQuery(query);
                            const url = new URL(window.location);
                            if (query) {
                                url.hash = `${
                                    url.hash.split("?")[0]
                                }?q=${query}`;
                            } else {
                                url.hash = url.hash.split("?")[0];
                            }
                            window.history.pushState({}, "", url);
                        }}
                    />
                    {(() => {
                        const urlParams = new URLSearchParams(
                            window.location.hash.split("?")[1]
                        );
                        const query = urlParams.get("q");
                        if (query && query !== searchQuery) {
                            setSearchQuery(query);
                        }
                    })()}
                    <div className="absolute inset-y-0 right-0 flex items-center justify-end">
                        <select
                            id="language"
                            name="language"
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500 dark:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm text-left"
                            defaultValue=""
                            onChange={(e) => setSearchQuery(e.target.value)}
                        >
                            <option value="">All</option>
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
                className="my-8 grid gap-6 justify-items-center lg:mx-20"
                // This property defines the column structure of the grid.
                // "repeat(auto-fill, minmax(320px, 1fr))" means:
                // - auto-fill: Fill the row with as many columns as possible.
                // - minmax(320px, 1fr): Each column should be at least 320px wide, but can grow to take up available space (1fr).
                style={{
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(320px, 1fr))",
                }}
            >
                {filteredProjects
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((p, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.1 },
                            }}
                            transition={{ delay: index * 0.06 }}
                            className="transform transition-transform duration-300 hover:shadow-lg"
                        >
                            <ProjectCard project={p} />
                        </motion.div>
                    ))}
            </div>

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-3 right-3 bg-slate-500 dark:bg-slate-600 text-gray-200 dark:text-gray-200 rounded-full shadow-lg focus:outline-none"
                >
                    <IoIosArrowDropupCircle className="w-10 h-10" />
                </button>
            )}
        </motion.div>
    );
}

export default Projects;
