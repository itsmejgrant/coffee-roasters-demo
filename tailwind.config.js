module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
        },
        extend: {
            colors: {
                dark: "#1B1C1E",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
