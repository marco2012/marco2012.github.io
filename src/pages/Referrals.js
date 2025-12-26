import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaChartLine, FaCreditCard, FaCar, FaWallet } from "react-icons/fa";
import { SiRevolut } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaStar } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";

function Referrals() {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    const referrals = [
        {
            title: "Interactive Brokers",
            description:
                "Sign up for Interactive Brokers and enjoy low-cost trading.",
            link: "https://ibkr.com/referral/marco4788",
            icon: <FaChartLine />,
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50 dark:bg-blue-950/20",
        },
        {
            title: "Revolut",
            description:
                "Join Revolut for seamless banking and exclusive perks.",
            link: "https://revolut.com/referral/?referral-code=marcolupia!AUG1-25-AR-L3&geo-redirect",
            icon: <SiRevolut />,
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50 dark:bg-purple-950/20",
        },
        {
            title: "N26",
            description: "Join N26 for seamless banking and exclusive perks.",
            link: "https://n26.com/r/marcol4958",
            icon: <FaCreditCard />,
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
        },
        // {
        //     title: "Uber",
        //     description: "Join Uber for exclusive discounts on your trips.",
        //     link: "https://referrals.uber.com/refer?id=bx87hgdt5cdg",
        //     icon: <FaCar />,
        //     color: "from-black to-gray-800",
        //     bgColor: "bg-gray-50 dark:bg-gray-900/20",
        // },
        {
            title: "YNAB",
            description: "Get a free month of YNAB budgeting app and take control of your finances.",
            link: "https://ynab.com/referral/?ref=kgrp1OKSmNQ8CCR1&sponsor_name=Marco&utm_source=customer_referral",
            icon: <FaWallet />,
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50 dark:bg-green-950/20",
        },
    ];

    return (
        <motion.div className="min-h-screen px-6 py-12 sm:py-20 max-w-3xl mx-auto text-gray-900 dark:text-gray-100 font-sans">
            <header className="mb-20">
                <div className="flex justify-between items-start">
                    <Link to="/">
                        <motion.h1 
                            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Marco Lupia
                        </motion.h1>
                    </Link>
                    
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => toggleTheme()}
                    >
                        {isDarkTheme ? (
                            <MdOutlineWbSunny className="w-5 h-5" />
                        ) : (
                            <IoMoonOutline className="w-5 h-5" />
                        )}
                    </Button>
                </div>

                <motion.div 
                    className="flex flex-wrap gap-x-3 gap-y-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Link 
                        to="/projects"
                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <GrProjects />
                        Projects
                    </Link>
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    <Link 
                        to="/referrals"
                        className="text-gray-900 dark:text-gray-100 flex items-center gap-2"
                    >
                        <FaStar />
                        Referrals
                    </Link>
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    <a 
                        href="https://github.com/marco2012" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    <a 
                        href="https://www.linkedin.com/in/marco-lupia" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    <span className="text-gray-300 dark:text-gray-600">/</span>
                    <a 
                        href="https://scholar.google.com/citations?user=D139cEIAAAAJ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                    >
                        <FaGoogleScholar />
                        Scholar
                    </a>
                </motion.div>
            </header>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className="mb-8">
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                        Referrals
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Explore these referral links to enjoy exclusive benefits
                    </p>
                </div>

                <div className="flex flex-col">
                    <div className="grid gap-6 md:grid-cols-2">
                        {referrals.map((referral, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={referral.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block h-full"
                                >
                                    <Card
                                        className={`group relative overflow-hidden h-full border-gray-200 dark:border-neutral-700 ${referral.bgColor} hover:shadow-xl transition-all duration-300 cursor-pointer`}
                                    >
                                        <CardContent className="p-6 h-full flex flex-col">
                                            <div className="flex items-start justify-between mb-4">
                                                <div
                                                    className={`p-3 rounded-xl bg-gradient-to-br ${referral.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <div className="text-2xl">
                                                        {referral.icon}
                                                    </div>
                                                </div>
                                                <FaArrowRightLong className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                                            </div>
                                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                {referral.title}
                                            </h2>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4">
                                                {referral.description}
                                            </p>
                                            <div className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                Get Started
                                                <FaArrowRightLong className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardContent>
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${referral.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                                        />
                                    </Card>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Referrals;
