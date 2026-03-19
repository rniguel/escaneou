import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter-sans)", "sans-serif"],
                montserrat: ["var(--font-montserrat-sans)", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Primary gradient colors
                primary: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                },
                // Secondary gradient colors
                secondary: {
                    50: "#fdf4ff",
                    100: "#fae8ff",
                    200: "#f5d0fe",
                    300: "#f0abfc",
                    400: "#e879f9",
                    500: "#d946ef",
                    600: "#c026d3",
                    700: "#a21caf",
                    800: "#86198f",
                    900: "#701a75",
                },
                // Success colors
                success: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d",
                },
                // Glassmorphism backgrounds
                glass: {
                    light: "rgba(255, 255, 255, 0.7)",
                    dark: "rgba(10, 10, 10, 0.7)",
                },
            },
            backdropBlur: {
                xs: "2px",
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "pulse-glow": {
                    "0%, 100%": {
                        opacity: "1",
                        boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)",
                    },
                    "50%": {
                        opacity: "0.8",
                        boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)",
                    },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-1000px 0" },
                    "100%": { backgroundPosition: "1000px 0" },
                },
            },
            boxShadow: {
                glow: "0 0 30px rgba(14, 165, 233, 0.4)",
                "glow-lg": "0 0 50px rgba(14, 165, 233, 0.6)",
                glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-primary":
                    "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
                "gradient-secondary":
                    "linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)",
                "gradient-surface":
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
            },
        },
    },
    plugins: [],
} satisfies Config;
