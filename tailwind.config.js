/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "selector",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Geist Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
