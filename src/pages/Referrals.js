import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import About from "../components/About";
import { GoHomeFill } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { FaChartLine, FaCreditCard, FaCar, FaWallet } from "react-icons/fa";
import { SiRevolut } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";

function Referrals() {
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
        {
            title: "Uber",
            description: "Join Uber for exclusive discounts on your trips.",
            link: "https://referrals.uber.com/refer?id=bx87hgdt5cdg",
            icon: <FaCar />,
            color: "from-black to-gray-800",
            bgColor: "bg-gray-50 dark:bg-gray-900/20",
        },
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
        <motion.div className="min-h-screen px-6 text-gray-800 dark:text-gray-200">
            <div className="max-w-2xl mx-auto">
                <NavBar btnLink="/" btnImage={<GoHomeFill />} animate={false} />
                <About
                    title="Referrals"
                    subtitle={`Explore these referral links to enjoy exclusive
                        benefits.`}
                    isDarkTheme={false}
                    showAbout={false}
                    icon={<FaUserFriends size={64} />}
                />
                <div className="flex flex-col mt-8">
                    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                        {referrals.map((referral, index) => (
                            <motion.a
                                key={index}
                                href={referral.link}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.2 },
                                }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-700 ${referral.bgColor} p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer`}
                            >
                                <div className="flex flex-col h-full">
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
                                </div>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${referral.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Referrals;
