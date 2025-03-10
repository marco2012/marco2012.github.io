import React from "react";
import ReactDOM from "react-dom/client";

// Client-side redirect: if URL doesn't contain a hash, add one for GitHub Pages routing
if (!window.location.hash && window.location.pathname !== "/") {
    const newUrl =
        window.location.origin +
        "/#" +
        window.location.pathname +
        window.location.search;
    window.location.replace(newUrl);
}

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/jetbrains-mono";
import TagManager from "react-gtm-module";

//https://stackoverflow.com/questions/66406770/react-router-render-component-twice
TagManager.initialize({
    gtmId: "GTM-W9VG6TN",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// const router = createHashRouter([
//     {
//         path: "/",
//         element: <App />,
//     },
//     {
//         path: "/projects",
//         element: <ProjectsPage />,
//     },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <ThemeProvider>
//             <RouterProvider router={router} />
//         </ThemeProvider>
//     </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
