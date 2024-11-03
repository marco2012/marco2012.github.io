import React from "react";
import NavBar from "../components/NavBar";
import { GoHomeFill } from "react-icons/go";

function CookiePolicy() {
    return (
        <div className="max-w-2xl mx-auto text-gray-800 dark:text-gray-200 text-justify hyphens-auto">
            <NavBar btnLink="/" btnImage={<GoHomeFill />} animate={false} />
            <h1 className="text-center my-8 text-xl font-bold">
                Cookie Policy
            </h1>
            <div className="text-right italic my-8 text-sm">
                <p>
                    Effective Date: 03-Nov-2024 <br />
                    Last Updated: 03-Nov-2024
                </p>
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
            <a
                className="my-8"
                style={{
                    padding: "8px 30px",
                    background: "#F8F9FA",
                    color: "#858A8F",
                    border: "1px solid #DEE2E6",
                    boxSizing: "border-box",
                    borderRadius: "2px",
                    cursor: "pointer",
                }}
            >
                Cookie Settings
            </a>{" "}
            <br />
            &nbsp;
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
                            href="https://support.google.com/accounts/answer/32050"
                        >
                            https://support.google.com/accounts/answer/32050
                        </a>
                    </li>
                    <li>
                        Safari:{" "}
                        <a
                            target="_blank"
                            href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                        >
                            https://support.apple.com/en-in/guide/safari/sfri11471/mac
                        </a>
                    </li>
                    <li>
                        Firefox:{" "}
                        <a
                            target="_blank"
                            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&amp;redirectlocale=en-US"
                        >
                            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&amp;redirectlocale=en-US
                        </a>
                    </li>
                    <li>
                        Internet Explorer:{" "}
                        <a
                            target="_blank"
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
