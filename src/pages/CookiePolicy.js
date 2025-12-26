import React from "react";
import TagManager from "react-gtm-module";
import { motion } from "framer-motion";
import FixedHeader from "../components/FixedHeader";
import { Button } from "../components/ui/button";

function CookiePolicy() {
    TagManager.dataLayer({
        dataLayer: {
            event: "pageview",
            page: {
                url: "/cookie-policy",
                title: "Cookie Policy",
            },
        },
    });

    return (
        <motion.div className="min-h-screen px-6 pt-32 pb-12 sm:pb-20 max-w-3xl mx-auto text-gray-900 dark:text-gray-100 font-sans text-justify hyphens-auto">
            <FixedHeader />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className="mb-8 mt-8">
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                        Cookie Policy
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Last Updated: 2024-11-03
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="font-bold text-xl mb-3">What are cookies?</h2>
                        <p className="mb-3">
                            This Cookie Policy explains what cookies are and how we use
                            them, the types of cookies we use i.e, the information we
                            collect using cookies and how that information is used, and
                            how to manage the cookie settings.
                        </p>
                        <p>
                            Cookies are small text files that are used to store small
                            pieces of information. They are stored on your device when
                            the website is loaded on your browser. These cookies help us
                            make the website function properly, make it more secure,
                            provide better user experience, and understand how the
                            website performs and to analyze what works and where it
                            needs improvement.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="font-bold text-xl mb-3">How do we use cookies?</h2>
                        <div>
                            <p className="mb-3">
                                As most of the online services, our website uses
                                first-party and third-party cookies for several
                                purposes. First-party cookies are mostly necessary for
                                the website to function the right way, and they do not
                                collect any of your personally identifiable data.
                            </p>
                            <p>
                                The third-party cookies used on our website are mainly
                                for understanding how the website performs, how you
                                interact with our website, keeping our services secure,
                                providing advertisements that are relevant to you, and
                                all in all providing you with a better and improved user
                                experience and help speed up your future interactions
                                with our website.
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="font-bold text-xl mb-3">Types of Cookies we use</h2>
                        <div className="cky-audit-table-element"></div>
                    </div>
                    
                    <div>
                        <h2 className="font-bold text-xl mb-3">Manage cookie preferences</h2>
                        <Button
                            className="cky-banner-element mb-4"
                            variant="secondary"
                        >
                            Cookie Settings
                        </Button>
                        <div>
                            <p className="mb-3">
                                You can change your cookie preferences any time by clicking
                                the above button. This will let you revisit the cookie
                                consent banner and change your preferences or withdraw your
                                consent right away.
                            </p>
                            <p className="mb-3">
                                In addition to this, different browsers provide different
                                methods to block and delete cookies used by websites. You
                                can change the settings of your browser to block/delete the
                                cookies. Listed below are the links to the support documents
                                on how to manage and delete cookies from the major web
                                browsers.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    Chrome:{" "}
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://support.google.com/accounts/answer/32050"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        https://support.google.com/accounts/answer/32050
                                    </a>
                                </li>
                                <li>
                                    Safari:{" "}
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        https://support.apple.com/en-in/guide/safari/sfri11471/mac
                                    </a>
                                </li>
                                <li>
                                    Firefox:{" "}
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&amp;redirectlocale=en-US"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
                                    </a>
                                </li>
                                <li>
                                    Internet Explorer:{" "}
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer
                                    </a>
                                </li>
                                <li>
                                    If you are using any other web browser, please visit
                                    your browser's official support documents.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default CookiePolicy;
