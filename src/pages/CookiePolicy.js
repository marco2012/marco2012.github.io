import React from "react";
import NavBar from "../components/NavBar";
import { GoHomeFill } from "react-icons/go";
import TagManager from "react-gtm-module";
import About from "../components/About";
import { FaCookieBite } from "react-icons/fa6";
import { MdOutlineCookie } from "react-icons/md";

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
        <div className="max-w-2xl px-6 mx-auto text-gray-800 dark:text-gray-200 text-justify hyphens-auto">
            <div className="max-w-2xl mx-auto mb-6">
                <NavBar btnLink="/" btnImage={<GoHomeFill />} animate={false} />
                <div className="flex justify-center">
                    <About
                        title="Cookie Policy"
                        subtitle="Last Updated: 2024-11-03"
                        showAbout={false}
                        icon={<MdOutlineCookie size={64} />}
                    />
                </div>
            </div>
            <div>
                <h2 className="font-bold">What are cookies?</h2>
                <p>
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
            &nbsp;
            <div>
                <h2 className="font-bold">How do we use cookies?</h2>
                <div>
                    <p>
                        As most of the online services, our website uses
                        first-party and third-party cookies for several
                        purposes. First-party cookies are mostly necessary for
                        the website to function the right way, and they do not
                        collect any of your personally identifiable data.
                    </p>{" "}
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
            &nbsp;
            <h2 className="font-bold">Types of Cookies we use</h2>
            <div className="cky-audit-table-element"></div>
            &nbsp;
            <h2 className="mb-2 font-bold">Manage cookie preferences</h2>
            <button
                className="cky-banner-element rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-800 dark:text-slate-200 bg-slate-200 dark:bg-slate-600 hover:bg-slate-400 focus:bg-slate-300 active:bg-slate-300 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
            >
                Cookie Settings
            </button>
            <br />
            <div>
                <p>
                    You can change your cookie preferences any time by clicking
                    the above button. This will let you revisit the cookie
                    consent banner and change your preferences or withdraw your
                    consent right away.{" "}
                </p>{" "}
                <p>
                    In addition to this, different browsers provide different
                    methods to block and delete cookies used by websites. You
                    can change the settings of your browser to block/delete the
                    cookies. Listed below are the links to the support documents
                    on how to manage and delete cookies from the major web
                    browsers.
                </p>
                <ul>
                    <li>
                        Chrome:{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://support.google.com/accounts/answer/32050"
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
                        >
                            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&amp;redirectlocale=en-US
                        </a>
                    </li>
                    <li>
                        Internet Explorer:{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                        >
                            https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
                        </a>
                    </li>
                    <li>
                        If you are using any other web browser, please visit
                        your browser's official support documents.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CookiePolicy;
