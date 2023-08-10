/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./code/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                pallet_blue: "#00699D",
                pallet_cyan: "#4AC7F0",
                pallet_lightBlue: "#00A5E6",
                pallet_lightGrey: "#D9D9D9",
                pallet_lavender: "#C693EB",
            },
        },
    },
    plugins: [],
};