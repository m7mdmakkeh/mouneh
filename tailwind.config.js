/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
        },
        screens: {
            sm: { max: "640px" },
            md: { max: "768px" },
            lg: { max: "1024px" },
            xl: { max: "1280px" },
            "2xl": { max: "1536px" },
        },
        extend: {
            colors: {
                primary: "#fff6eb",
            },
        },
    },
    plugins: [],
};
