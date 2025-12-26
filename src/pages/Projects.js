import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../assets/projects.json";
import { IoIosSearch } from "react-icons/io";
import ScrollToTop from "../components/ScrollToTop";
import TagManager from "react-gtm-module";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaFilter, FaTimes } from "react-icons/fa";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import FixedHeader from "../components/FixedHeader";

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
        <motion.div className="min-h-screen px-6 pt-40 pb-12 sm:pb-20 max-w-7xl mx-auto text-gray-900 dark:text-gray-100 font-sans">
            <ScrollToTop />
            <FixedHeader />
            
            <div className="max-w-3xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {/* Search and Filter Bar */}
                    <div className="mb-10">
                        <div className="relative rounded-xl shadow-sm bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
                            <div className="flex items-center relative min-h-[48px] p-1">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 z-10">
                                    <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                                        <IoIosSearch />
                                    </span>
                                </div>
                                <Input
                                    type="search"
                                    className="flex-1 border-0 bg-transparent py-3 pl-10 pr-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => {
                                        const query = e.target.value;
                                        setSearchQuery(query);
                                        const url = new URL(window.location);
                                        if (query) {
                                            url.hash = `${url.hash.split("?")[0]}?q=${query}`;
                                        } else {
                                            url.hash = url.hash.split("?")[0];
                                        }
                                        window.history.pushState({}, "", url);
                                    }}
                                />
                                {searchQuery && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setSearchQuery("")}
                                        className="mr-2 h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors z-10"
                                    >
                                        <FaTimes className="text-gray-500 dark:text-gray-400" />
                                    </Button>
                                )}
                                <Button
                                    variant={selectedCategory ? "default" : "secondary"}
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={`mr-2 gap-2 h-8 px-3 text-xs transition-colors duration-150 z-10 ${
                                        selectedCategory
                                            ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                                            : "bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600"
                                    }`}
                                >
                                    <FaFilter className="w-3 h-3" />
                                    Filters
                                </Button>
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
                                                <Button
                                                    variant={!selectedCategory ? "default" : "secondary"}
                                                    size="sm"
                                                    onClick={() => setSelectedCategory("")}
                                                    className={`h-7 px-3 text-xs ${
                                                        !selectedCategory
                                                            ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                                                            : "bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600"
                                                    }`}
                                                >
                                                    All Categories
                                                </Button>
                                                {categories.map((category) => (
                                                    <Button
                                                        key={category}
                                                        variant={selectedCategory === category ? "default" : "secondary"}
                                                        size="sm"
                                                        onClick={() => setSelectedCategory(category)}
                                                        className={`h-7 px-3 text-xs ${
                                                            selectedCategory === category
                                                                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                                                                : "bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600"
                                                        }`}
                                                    >
                                                        {category}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <p className="mt-2 mb-6 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            {filteredProjects.length} projects found
                        </p>
                    </div>
                </motion.div>
            </div>

            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {filteredProjects
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((p, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.2 },
                                }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.3,
                                }}
                                className="w-full max-w-[360px]"
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
                    <div className="text-6xl mb-4 grayscale opacity-50">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        No projects found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Try adjusting your search or filter criteria
                    </p>
                    {(searchQuery || selectedCategory) && (
                        <Button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("");
                            }}
                            className="mt-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:opacity-90"
                        >
                            Clear filters
                        </Button>
                    )}
                </motion.div>
            )}

            {showScrollTop && (
                <motion.div
                    className="fixed bottom-6 right-6 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={scrollToTop}
                        className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:opacity-90 rounded-full shadow-lg w-12 h-12 p-0"
                    >
                        <IoIosArrowDropupCircle className="w-8 h-8" />
                    </Button>
                </motion.div>
            )}
        </motion.div>
    );
}

export default Projects;
