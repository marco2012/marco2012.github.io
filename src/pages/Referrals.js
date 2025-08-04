import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import About from "../components/About";
import { GrProjects } from "react-icons/gr";
import { FaMoneyCheckAlt, FaUserFriends } from "react-icons/fa";

function Referrals() {
    const referrals = [
        {
            title: "Interactive Brokers",
            description:
                "Sign up for Interactive Brokers and enjoy low-cost trading.",
            link: "/#/ibkr",
            icon: <FaMoneyCheckAlt />,
        },
        {
            title: "Revolut",
            description:
                "Join Revolut for seamless banking and exclusive perks.",
            link: "https://revolut.com/referral/?referral-code=marcolupia!AUG1-25-AR-L3&geo-redirect",
            icon: <FaMoneyCheckAlt />,
        },
        {
            title: "N26",
            description: "Join N26 for seamless banking and exclusive perks.",
            link: "https://n26.com/en-eu/invite/marcolupia",
            icon: <FaMoneyCheckAlt />,
        },
        {
            title: "Uber",
            description: "Join Uber for exclusive discounts on your trips.",
            link: "https://referrals.uber.com/refer?id=bx87hgdt5cdg",
            icon: <FaMoneyCheckAlt />,
        },
    ];

    return (
        <motion.div className="min-h-screen px-6 max-w-2xl mx-auto text-gray-800 dark:text-gray-200">
            <div className="max-w-2xl mx-auto">
                <NavBar btnLink="/" btnImage={<GrProjects />} animate={false} />
                <About
                    title="Referrals"
                    subtitle={`Explore these referral links to enjoy exclusive
                        benefits.`}
                    isDarkTheme={false}
                    showAbout={false}
                    icon={<FaUserFriends size={64} />}
                />
                <div className="flex flex-col mt-8">
                    <div className="space-y-6">
                        {referrals.map((referral, index) => (
                            <div
                                key={index}
                                className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-4xl text-blue-600 mr-4">
                                    {referral.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">
                                        {referral.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {referral.description}
                                    </p>
                                    <a
                                        href={referral.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 hover:underline mt-2 inline-block"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Referrals;
