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
            className="project-card max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-neutral-800 dark:border-black"
            style={{ minWidth: "360px" }}
        >
            <LazyLoad height={200}>
                <img
                    className="rounded-t-xl"
                    style={{ minHeight: "220px" }}
                    src={require(`../assets/images/${project.image}`)}
                    alt={project.image}
                />
            </LazyLoad>

            <div className="p-5 flex-grow">
                <div className="text-sm text-gray-700 dark:text-slate-200 flex items-center justify-between">
                    <span className="flex items-center">
                        <FaCode className="mr-1" /> {project.language}
                    </span>
                    <span className="flex items-center">
                        <CiCalendar className="mr-1" />{" "}
                        {new Date(project.date).toLocaleString("en-US", {
                            month: "numeric",
                            year: "numeric",
                        })}
                    </span>
                </div>
                <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                </h5>
                <p
                    className="mb-3 text-base text-gray-700 dark:text-slate-200"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
            </div>
            <div className="mb-4 ml-4 flex items-center justify-between">
                <button
                    className="rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-600 bg-slate-200 hover:bg-slate-400 focus:bg-slate-300 active:bg-slate-300 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => window.open(project.link, "_blank")}
                    disabled={!project.link}
                >
                    View Project
                    <FaArrowRightLong className="ml-2" />
                </button>
                {project.skills && (
                    <div
                        className="text-sm text-gray-500 dark:text-slate-200 flex items-center mr-4 text-right"
                        style={{ maxWidth: "180px" }}
                    >
                        <BsThreeDots className="mr-1" /> {project.skills}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
