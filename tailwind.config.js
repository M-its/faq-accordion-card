/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Kumnh: ["Kumbh Sans", "sans-serif"],
            },

            colors: {
                /* Primary */
                /* Text */
                "very-dark-desaturated-blue":
                    "hsl(var(--very-dark-desaturated-blue))",
                "soft-red": "hsl(var(--soft-red))",

                /* Gradient */
                /* Background gradient */
                "soft-violet": "hsl(var(--soft-violet))",
                "soft-blue": "hsl(var(--soft-blue))",

                /* Neutral */
                /* Text */
                "very-dark-grayish-blue": "hsl(var(--very-dark-grayish-blue))",
                "dark-grayish-blue": "hsl(var(--dark-grayish-blue))",

                /* Dividers */
                "light-grayish-blue": "hsl(var(--light-grayish-blue))",
            },

            keyframes: {
                slidex: {
                    "0%, 100%": { transform: "translateX(-20%)" },
                    "50%": { transform: "translateX(0)" },
                },
            },

            animation: {
                slidex: "slidex 3s ease-in-out infinite",
            },
        },
    },
    plugins: [],
}
