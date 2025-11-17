import React from "react";
import "./ProjectCard.css"; // Import the CSS file
import { CiCalendar } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import LazyLoad from "react-lazyload";
import { BsThreeDots } from "react-icons/bs";

const ProjectCard = ({ project }) => {
    return (
        <div
            className="project-card w-full max-w-[360px] bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700 overflow-hidden group transition-all duration-300 hover:shadow-2xl"
        >
            <div className="relative overflow-hidden">
                <LazyLoad height={200}>
                    <img
                        className="rounded-t-xl w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ minHeight: "220px" }}
                        src={require(`../assets/images/${project.image}`)}
                        alt={project.image}
                    />
                </LazyLoad>
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-lg text-white text-xs font-semibold">
                    {project.category}
                </div>
            </div>

            <div className="p-5 flex-grow">
                <div className="text-sm text-gray-700 dark:text-slate-200 flex items-center justify-between mb-3">
                    <span className="flex items-center px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-md">
                        <FaCode className="mr-1 text-indigo-600 dark:text-indigo-400" /> 
                        <span className="text-indigo-700 dark:text-indigo-300 font-medium">{project.language}</span>
                    </span>
                    <span className="flex items-center text-gray-500 dark:text-gray-400">
                        <CiCalendar className="mr-1" />{" "}
                        {new Date(project.date).toLocaleString("en-US", {
                            month: "numeric",
                            year: "numeric",
                        })}
                    </span>
                </div>
                <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </h5>
                <p
                    className="mb-4 text-base text-gray-700 dark:text-slate-200 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
            </div>
            <div className="mb-4 ml-4 flex items-center justify-between">
                <button
                    className="rounded-lg border border-transparent py-2.5 px-5 flex items-center text-center text-sm font-semibold transition-all text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:from-indigo-700 focus:to-purple-700 active:from-indigo-800 active:to-purple-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none shadow-md hover:shadow-lg transform hover:scale-105"
                    type="button"
                    onClick={() => window.open(project.link, "_blank")}
                    disabled={!project.link}
                >
                    View Project
                    <FaArrowRightLong className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                {project.skills && (
                    <div
                        className="text-xs text-gray-500 dark:text-slate-400 flex items-center mr-4 text-right px-2 py-1 bg-gray-100 dark:bg-neutral-700 rounded-md flex-shrink min-w-0"
                        style={{ maxWidth: "180px" }}
                    >
                        <BsThreeDots className="mr-1 flex-shrink-0" /> 
                        <span className="break-words text-right">{project.skills}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
