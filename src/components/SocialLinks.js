import React from "react";
import { FaGithub, FaUserFriends } from "react-icons/fa";
import { FaLinkedinIn, FaGoogleScholar } from "react-icons/fa6";

function SocialLinks() {
    return (
        <span className="flex items-center space-x-2 text-sm sm:text-base">
            <a
                href="https://www.linkedin.com/in/marco-lupia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-full transition-colors hover:bg-white/[0.06] hover:scale-125"
            >
                <FaLinkedinIn className="transition-transform duration-200" />
            </a>
            <a
                href="https://github.com/marco2012"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-full transition-colors hover:bg-white/[0.06] hover:scale-125"
            >
                <FaGithub className="transition-transform duration-200" />
            </a>
            <a
                href="https://scholar.google.com/citations?user=D139cEIAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-full transition-colors hover:bg-white/[0.06] hover:scale-125"
            >
                <FaGoogleScholar className="transition-transform duration-200" />
            </a>
            <a
                href="/#/referrals"
                rel="noopener noreferrer"
                className="p-1 rounded-full transition-colors hover:bg-white/[0.06] hover:scale-125"
            >
                <FaUserFriends className="transition-transform duration-200" />
            </a>
        </span>
    );
}

export default SocialLinks;
