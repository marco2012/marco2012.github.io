import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { FaFilter, FaTimes } from "react-icons/fa";

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
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const categories = [...new Set(projectsData.map((p) => p.category))].sort();

    // Handle URL parameters on mount
    useEffect(() => {
        const urlParams = new URLSearchParams(
            window.location.hash.split("?")[1] || ""
        );
        const query = urlParams.get("q");
        if (query) {
            setSearchQuery(query);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filteredProjects = projectsData.filter(
        ({ title, description, language, skills, category }) => {
            const matchesSearch = [title, description, language, skills].some(
                (field) =>
                    field.toLowerCase().includes(searchQuery.toLowerCase())
            );
            const matchesCategory = !selectedCategory || category === selectedCategory;
            return matchesSearch && matchesCategory;
        }
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
                        showAboutHeader={false}
                        icon={<BsSuitcaseLg size={64} />}
                    />
                </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="max-w-2xl mx-auto mt-8">
                <motion.div
                    className="relative mt-2 rounded-xl shadow-lg bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex items-center relative min-h-[48px]">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 z-10">
                            <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                                <IoIosSearch />
                            </span>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="flex-1 rounded-xl border-0 py-3 pl-12 pr-4 text-gray-900 dark:text-gray-100 bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm"
                            placeholder="Search projects..."
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
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mr-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors z-10"
                            >
                                <FaTimes className="text-gray-500 dark:text-gray-400" />
                            </button>
                        )}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`mr-4 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors duration-150 z-10 ${
                                selectedCategory
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600"
                            }`}
                        >
                            <FaFilter />
                            Filters
                        </button>
                    </div>
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="border-t border-gray-200 dark:border-neutral-700 overflow-hidden"
                            >
                                <div className="p-4">
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setSelectedCategory("")}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                                                !selectedCategory
                                                    ? "bg-indigo-600 text-white"
                                                    : "bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600"
                                            }`}
                                        >
                                            All Categories
                                        </button>
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() =>
                                                    setSelectedCategory(category)
                                                }
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                                                    selectedCategory === category
                                                        ? "bg-indigo-600 text-white"
                                                        : "bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600"
                                                }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
                {filteredProjects.length > 0 && (
                    <motion.p
                        className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Showing <span className="font-semibold text-indigo-600 dark:text-indigo-400">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? "s" : ""}
                    </motion.p>
                )}
            </div>

            {filteredProjects.length > 0 ? (
                <div
                    className="my-8 grid gap-6 justify-items-center max-w-7xl mx-auto px-4"
                    style={{
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
                    }}
                >
                    {filteredProjects
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((p, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.3,
                                }}
                                className="transform transition-all duration-300"
                            >
                                <ProjectCard project={p} />
                            </motion.div>
                        ))}
                </div>
            ) : (
                <motion.div
                    className="text-center py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        No projects found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Try adjusting your search or filter criteria
                    </p>
                    {(searchQuery || selectedCategory) && (
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("");
                            }}
                            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Clear filters
                        </button>
                    )}
                </motion.div>
            )}

            {showScrollTop && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-3 right-3 bg-slate-500 dark:bg-slate-600 text-gray-200 dark:text-gray-200 rounded-full shadow-lg focus:outline-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <IoIosArrowDropupCircle className="w-10 h-10" />
                </motion.button>
            )}
        </motion.div>
    );
}

export default Projects;
