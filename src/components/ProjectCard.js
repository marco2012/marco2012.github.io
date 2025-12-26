import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import LazyLoad from "react-lazyload";
import { BsThreeDots } from "react-icons/bs";
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const ProjectCard = ({ project }) => {
    return (
        <Card className="w-full max-w-[360px] flex flex-col h-full border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden group transition-all duration-300 hover:shadow-2xl">
            <div className="relative overflow-hidden">
                <LazyLoad height={220}>
                    <img
                        className="w-full h-[220px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        src={require(`../assets/images/${project.image}`)}
                        alt={project.image}
                    />
                </LazyLoad>
                <Badge 
                    variant="secondary" 
                    className="absolute top-3 right-3 bg-black/70 hover:bg-black/70 text-white border-none backdrop-blur-sm"
                >
                    {project.category}
                </Badge>
            </div>

            <CardContent className="p-5 flex-grow flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm text-gray-700 dark:text-slate-200">
                    <Badge 
                        variant="outline" 
                        className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-none flex gap-1 px-2 py-1"
                    >
                        <FaCode className="text-indigo-600 dark:text-indigo-400" /> 
                        {project.language}
                    </Badge>
                    <span className="flex items-center text-gray-500 dark:text-gray-400">
                        <CiCalendar className="mr-1" />{" "}
                        {new Date(project.date).toLocaleString("en-US", {
                            month: "numeric",
                            year: "numeric",
                        })}
                    </span>
                </div>
                
                <CardTitle className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </CardTitle>
                
                <div
                    className="text-base text-gray-700 dark:text-slate-200 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                />
            </CardContent>

            <CardFooter className="p-5 pt-0 flex items-center justify-between">
                <Button
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all hover:scale-105"
                    onClick={() => window.open(project.link, "_blank")}
                    disabled={!project.link}
                >
                    View Project
                    <FaArrowRightLong className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                
                {project.skills && (
                    <div
                        className="text-xs text-gray-500 dark:text-slate-400 flex items-center px-2 py-1 bg-gray-100 dark:bg-neutral-700 rounded-md max-w-[180px]"
                    >
                        <BsThreeDots className="mr-1 flex-shrink-0" /> 
                        <span className="truncate">{project.skills}</span>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;

