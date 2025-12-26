import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/geist-sans";
import "@fontsource/geist-sans/100.css";
import "@fontsource/geist-sans/200.css";
import "@fontsource/geist-sans/300.css";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/600.css";
import "@fontsource/geist-sans/700.css";
import "@fontsource/geist-sans/800.css";
import "@fontsource/geist-sans/900.css";
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
